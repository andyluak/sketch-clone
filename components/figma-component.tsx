import React from "react"

import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  title: string
  className?: string
}

function FigmaComponent({ children, title, className }: Props) {
  return (
    <div>
      <p className="text-xs text-gray-600">{title}</p>
      <div className={cn("bg-background", className)}>{children}</div>
    </div>
  )
}

export default FigmaComponent
