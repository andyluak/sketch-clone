import React, { forwardRef, useCallback, useId } from "react"
import { motion, MotionProps, PanInfo } from "framer-motion"

import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  title: string
  className?: string
} & MotionProps & {
    onDrag?: (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo
    ) => void
  }

const FigmaContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, title, className, ...props }, ref) => {
    const dragRef = React.useRef<HTMLDivElement>(null)
    const id = useId()

    return (
      <motion.div
        drag
        onDrag={props.onDrag}
        className={cn(
          "flex flex-col gap-2 pointer-events-none w-fit md:pointer-events-auto",
          className
        )}
        {...props}
        id={id}
        ref={ref}
      >
        <p className="text-xs text-gray-600">{title}</p>
        {children}
      </motion.div>
    )
  }
)

FigmaContainer.displayName = "FigmaComponent"

type FigmaComponentProps = {
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps

const FigmaComponent = React.forwardRef<HTMLDivElement, FigmaComponentProps>(
  ({ children, className, ...props }, ref) => (
    <motion.div className={cn("bg-background", className)} {...props} ref={ref}>
      {children}
    </motion.div>
  )
)

FigmaComponent.displayName = "FigmaComponent"

export { FigmaComponent, FigmaContainer }
