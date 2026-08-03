// app/api/verify-certificate/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabaseAdmin"

type CertificateStatus = "verified" | "expired" | "revoked"

type CertificateRecord = {
  serial_number: string
  holder_name: string
  certificate_type: string
  issue_date: string
  status: CertificateStatus
}

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000
const RATE_LIMIT_MAX_ATTEMPTS = 10

const attempts = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown"
  }

  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  )
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const current = attempts.get(ip)

  if (!current || current.resetAt <= now) {
    attempts.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })

    return false
  }

  if (current.count >= RATE_LIMIT_MAX_ATTEMPTS) {
    return true
  }

  attempts.set(ip, {
    ...current,
    count: current.count + 1,
  })

  return false
}

function normalizeSerialNumber(value: unknown) {
  if (typeof value !== "string") return ""

  return value
    .trim()
    .toUpperCase()
    .replace(/\s+/g, "")
}

function isValidSerialFormat(serialNumber: string) {
  return /^[A-Z0-9-]{3,40}$/.test(serialNumber)
}

function jsonResponse(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  })
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request)

  if (isRateLimited(ip)) {
    return jsonResponse(
      {
        ok: false,
        result: "rate_limited",
        message: "Too many verification attempts. Please try again later.",
      },
      429
    )
  }

  let body: { serialNumber?: string }

  try {
    body = await request.json()
  } catch {
    return jsonResponse(
      {
        ok: false,
        result: "invalid_request",
        message: "Invalid request.",
      },
      400
    )
  }

  const serialNumber = normalizeSerialNumber(body.serialNumber)

  if (!serialNumber || !isValidSerialFormat(serialNumber)) {
    return jsonResponse(
      {
        ok: false,
        result: "invalid",
        message: "Invalid serial number.",
      },
      400
    )
  }

  try {
    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from("certificates")
      .select("serial_number, holder_name, certificate_type, issue_date, status")
      .eq("serial_number", serialNumber)
      .maybeSingle<CertificateRecord>()

    if (error) {
      console.error("Certificate verification error:", error.message)

      return jsonResponse(
        {
          ok: false,
          result: "server_error",
          message: "Verification service unavailable.",
        },
        500
      )
    }

    if (!data) {
      return jsonResponse({
        ok: false,
        result: "not_found",
        message: "Certificate Not Found or Invalid Serial Number.",
      })
    }

    if (data.status === "revoked") {
      return jsonResponse({
        ok: true,
        result: "revoked",
        certificate: {
          holderName: data.holder_name,
          certificateType: data.certificate_type,
          serialNumber: data.serial_number,
          issueDate: data.issue_date,
          status: data.status,
        },
      })
    }

    if (data.status === "expired") {
      return jsonResponse({
        ok: true,
        result: "expired",
        certificate: {
          holderName: data.holder_name,
          certificateType: data.certificate_type,
          serialNumber: data.serial_number,
          issueDate: data.issue_date,
          status: data.status,
        },
      })
    }

    return jsonResponse({
      ok: true,
      result: "verified",
      certificate: {
        holderName: data.holder_name,
        certificateType: data.certificate_type,
        serialNumber: data.serial_number,
        issueDate: data.issue_date,
        status: data.status,
      },
    })
  } catch (error) {
    console.error("Certificate verification fatal error:", error)

    return jsonResponse(
      {
        ok: false,
        result: "server_error",
        message: "Verification service unavailable.",
      },
      500
    )
  }
}