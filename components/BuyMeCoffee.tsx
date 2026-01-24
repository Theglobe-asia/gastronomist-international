"use client"

import { useEffect } from "react"

export default function BuyMeCoffee() {
  useEffect(() => {
    console.log("🔥 BuyMeCoffee mounted")

    const el = document.createElement("div")
    el.innerText = "BMC TEST ELEMENT"
    el.style.position = "fixed"
    el.style.bottom = "20px"
    el.style.right = "20px"
    el.style.zIndex = "999999"
    el.style.background = "red"
    el.style.color = "white"
    el.style.padding = "10px"
    el.style.fontSize = "14px"

    document.body.appendChild(el)

    return () => {
      el.remove()
    }
  }, [])

  return null
}
