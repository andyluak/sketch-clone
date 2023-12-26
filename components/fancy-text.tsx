import React from "react"

type Props = {
  text: string
} & React.SVGProps<SVGSVGElement>

function FancyText({ text }: Props) {
  return (
    <span className="relative text-red-400">
      <span className="font-fancy">{text}</span>
    </span>
  )
}

export default FancyText
