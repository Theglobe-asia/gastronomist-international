import { cn } from "../utils"

export default function Card({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("glass-card glass-shine", className)}>
      {children}
    </div>
  )
}
