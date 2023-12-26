import React, { useEffect } from "react"
import {
  Point,
  useConnectedComponents,
} from "@/context/connected-components-context"
import { AirVent, Fan } from "lucide-react"

import BendyLine from "./bendy-line"
import FancyText from "./fancy-text"
import { FigmaComponent, FigmaContainer } from "./figma-component"
import { Button } from "./ui/button"

type Props = {}

function ConnectedComponents({}: Props) {
  const mainComponentRef = React.useRef<HTMLDivElement>(null)
  const childComponentRef = React.useRef<HTMLDivElement>(null)
  const secondaryChildComponentRef = React.useRef<HTMLDivElement>(null)

  const {
    mainComponent: unmanagedMainComponent,
    childComponents: unmanagedChildComponents,
    setMainComponent,
    setChildComponents,
  } = useConnectedComponents()

  const mainComponentUnmanagedRef = React.useRef(unmanagedMainComponent)
  const childComponentsUnmanagedRef = React.useRef(unmanagedChildComponents)

  function isChildToTheLeft(
    mainComponent: Point,
    childComponent: Point
  ): boolean {
    return childComponent.x < mainComponent.x
  }

  function isChildAbove(mainComponent: Point, childComponent: Point): boolean {
    return childComponent.y < mainComponent.y
  }

  useEffect(() => {
    if (!mainComponentRef.current || !childComponentRef.current) return

    const mainComponentRect = mainComponentRef.current.getBoundingClientRect()
    const childComponentRect = childComponentRef.current.getBoundingClientRect()

    const isChildToTheLeft = childComponentRect.right < mainComponentRect.left
    const isChildToTheRight = childComponentRect.left > mainComponentRect.right
    const isChildAbove = childComponentRect.bottom < mainComponentRect.top
    const isChildBelow = childComponentRect.top > mainComponentRect.bottom

    const newMainComponent = {
      point: {
        x: isChildToTheLeft
          ? mainComponentRect.left
          : isChildToTheRight
            ? mainComponentRect.right
            : mainComponentRect.left + mainComponentRect.width / 2,
        y: isChildAbove
          ? mainComponentRect.top
          : isChildBelow
            ? mainComponentRect.bottom
            : mainComponentRect.top + mainComponentRect.height / 2,
      },
    }

    const newChildComponents = [
      {
        point: {
          x: isChildToTheLeft
            ? childComponentRect.right
            : isChildToTheRight
              ? childComponentRect.left
              : childComponentRect.left + childComponentRect.width / 2,
          y: isChildAbove
            ? childComponentRect.bottom
            : isChildBelow
              ? childComponentRect.top
              : childComponentRect.top + childComponentRect.height / 2,
        },
      },
    ]

    if (
      JSON.stringify(newMainComponent) !==
      JSON.stringify(mainComponentUnmanagedRef.current)
    ) {
      setMainComponent(newMainComponent)
    }
    if (
      JSON.stringify(newChildComponents) !==
      JSON.stringify(childComponentsUnmanagedRef.current)
    ) {
      setChildComponents(newChildComponents)
    }

    // Update the refs with the new values
    mainComponentUnmanagedRef.current = newMainComponent
    childComponentsUnmanagedRef.current = newChildComponents

    if (document.getElementById("idid")) {
      document.getElementById("idid")?.remove()
    }
  }, [
    setMainComponent,
    setChildComponents,
    unmanagedMainComponent,
    unmanagedChildComponents,
  ])
  return (
    <div className="z-20">
      <FigmaContainer
        className="m-auto"
        title="The Pitch"
        dragTransition={{
          power: 0.01,
          timeConstant: 10,
        }}
        onDrag={(e, info) => {
          setMainComponent({ point: info.point })
        }}
        onDragTransitionEnd={() => {
          const bounding = mainComponentRef.current?.getBoundingClientRect()
          if (!bounding) return
          setMainComponent({
            point: {
              x: bounding.left,
              y: bounding.top + bounding.height / 2,
            },
          })
        }}
        onDragEnd={(e, info) => {
          setMainComponent({ point: info.point })
        }}
      >
        <FigmaComponent
          className="w-full px-4 py-8 bg-white border shadow-md"
          ref={mainComponentRef}
        >
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold  md:text-4xl/[48px]">
              Sketch is where great <FancyText text="design" />
              <br /> happens.{" "}
            </h1>
            <p>
              A Mac app for designers to create, team up,{" "}
              <span className="underline">prototype</span>, and more.
            </p>
            <p>
              A Web app for everyone else to create, team up,{" "}
              <span className="underline">prototype</span>, and more.
            </p>
            <p>
              A complete design platform, made by a sustainable indie company.
            </p>

            <div className="flex items-center gap-4">
              <Button size="sm" textSize="sm">
                Find out More
              </Button>
              <Button size="sm" textSize="sm" variant="link">
                See Whats New
              </Button>
            </div>
          </div>
        </FigmaComponent>
      </FigmaContainer>
      <FigmaContainer
        dragTransition={{
          power: 0.01,
          timeConstant: 10,
        }}
        onDrag={(e, info) => {
          setChildComponents([{ point: info.point }])
        }}
        onDragTransitionEnd={() => {
          const bounding = mainComponentRef.current?.getBoundingClientRect()
          if (!bounding) return
          setChildComponents([
            {
              point: {
                x: bounding.left,
                y: bounding.top + bounding.height / 2,
              },
            },
          ])
        }}
        onDragEnd={(e, info) => {
          setChildComponents([{ point: info.point }])
        }}
        className="absolute hidden md:block top-1/2 left-20"
        title="The Icon"
      >
        <FigmaComponent className="self-start" ref={childComponentRef}>
          <div className="p-4 bg-white rounded-lg">
            <AirVent size={64} />
          </div>
        </FigmaComponent>
      </FigmaContainer>
      <BendyLine
        mainComponentPoint={mainComponentUnmanagedRef.current.point}
        childComponentPoint={childComponentsUnmanagedRef.current[0].point}
      />
      <BendyLine
        mainComponentPoint={mainComponentUnmanagedRef.current.point}
        childComponentPoint={childComponentsUnmanagedRef.current[0].point}
      />
    </div>
  )
}

export default ConnectedComponents
