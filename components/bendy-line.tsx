import React from "react"
import { Point } from "@/context/connected-components-context"
import { createPortal } from "react-dom"

type Props = {
  mainComponentPoint: Point
  childComponentPoint: Point
}

function BendyLine({ mainComponentPoint, childComponentPoint }: Props) {
  const bendyLinesContainerRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    bendyLinesContainerRef.current = document.getElementById(
      "bendy-lines"
    ) as HTMLDivElement
  }, [])

  const lineContent = (
    <svg className="absolute top-0 left-0 hidden w-full h-full pointer-events-none md:block">
      <marker
        id="arrow"
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M 0 0 L 10 5 L 0 10 z" fill="orange" />
      </marker>

      {/* path */}
      <path
        d={[
          "M",
          mainComponentPoint.x,
          mainComponentPoint.y,
          "C",
          (mainComponentPoint.x + childComponentPoint.x) / 2,
          mainComponentPoint.y,
          (mainComponentPoint.x + childComponentPoint.x) / 2,
          childComponentPoint.y,
          childComponentPoint.x,
          childComponentPoint.y,
        ].join(" ")}
        stroke="orange"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrow)"
      />
    </svg>
  )

  if (bendyLinesContainerRef.current) {
    return createPortal(lineContent, bendyLinesContainerRef.current)
  }
}

export default BendyLine
