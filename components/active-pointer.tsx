import React, { ReactElement, useEffect } from "react"

import { cn } from "@/lib/utils"

type Props = {
  Component: ReactElement
  className?: string
}

function ActivePointer({ Component, className }: Props) {
  const divRef = React.useRef<HTMLDivElement>(null)
  const componentRef = React.useRef<HTMLElement>(null)

  useEffect(() => {
    if (!divRef.current) return
    const div = divRef.current
    function moveDot() {
      const divBounds = div.getBoundingClientRect()
      const targetX = Math.random() * divBounds.width
      const targetY = Math.random() * divBounds.height

      if (componentRef.current) {
        componentRef.current.style.transition = "transform 2s linear"
        componentRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`
        componentRef.current.style.userSelect = "none"
      }
    }

    const interval = setInterval(moveDot, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!Component) return null

  const RenderedComponent = React.cloneElement(Component, { ref: componentRef })

  return (
    <div className="relative flex items-center">
      <div
        className={cn("absolute z-50 w-30 h-30 left-1/2", className)}
        ref={divRef}
      >
        {RenderedComponent}
      </div>
    </div>
  )
}

export default ActivePointer
