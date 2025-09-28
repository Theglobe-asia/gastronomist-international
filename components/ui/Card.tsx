import { cn } from "../utils"

export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-6 shadow-xl", className)}>
      {children}
    </div>
  )
}
