import React, { useCallback } from "react"

import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  title: string
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

function FigmaComponent({ children, title, className, ...props }: Props) {
  const [isDragging, setIsDragging] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const dragRef = React.useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.button !== 0) return

      setIsDragging(true)
      dragRef.current!.style.transition = "none"
    },
    []
  )

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isDragging && dragRef.current) {
        const newX = position.x + event.movementX
        const newY = position.y + event.movementY
        setPosition({ x: newX, y: newY })
        dragRef.current.style.transform = `translate(${newX}px, ${newY}px)`
        dragRef.current.style.userSelect = "none"
      }
    },
    [isDragging, position]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    dragRef.current!.style.transition = "transform 0.2s"
  }, [])

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    } else {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  return (
    <div
      className={cn(
        "flex flex-col gap-2 pointer-events-none w-fit md:pointer-events-auto",
        className
      )}
      {...props}
      ref={dragRef}
      onMouseDown={handleMouseDown}
    >
      <p className="text-xs text-gray-600">{title}</p>
      {children}
    </div>
  )
}

const Component = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("bg-background", className)} {...props}>
    {children}
  </div>
)

FigmaComponent.Component = Component

export default FigmaComponent
