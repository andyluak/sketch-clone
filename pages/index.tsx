import Image from "next/image"
import {
  AirVent,
  AlarmSmoke,
  AudioLines,
  Pencil,
  TextCursor,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import ActivePointer from "@/components/active-pointer"
import FigmaComponent from "@/components/figma-component"

export default function Home() {
  return (
    <section className="space-y-4 md:flex md:flex-col">
      <FigmaComponent className="m-auto" title="The Pitch">
        <FigmaComponent.Component className="w-full px-4 py-8 bg-white border shadow-md">
          <div className="flex flex-col gap-6">
            <h1 className="text-xl font-bold line-clamp-2 md:text-4xl/[48px]">
              Sketch is where great <br /> design happens.
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
        </FigmaComponent.Component>
      </FigmaComponent>
      <ActivePointer
        className="top-6"
        Component={
          <div className="flex items-center  gap-2 z-[9999] will-change-transform  rounded-full px-2 text-pink-900">
            <Pencil size={20} />
            <p className="px-2 bg-pink-200 rounded-full text-gray-950">
              Designer
            </p>
          </div>
        }
      />
      <ComponentsGroup />
    </section>
  )
}

const ComponentsGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:hidden">
      <div className="flex flex-col items-end gap-4">
        <FigmaComponent title="The Icon">
          <FigmaComponent.Component>
            <div className="p-4 bg-white rounded-lg">
              <AirVent size={24} />
            </div>
          </FigmaComponent.Component>
        </FigmaComponent>
        <FigmaComponent title="The Icon">
          <FigmaComponent.Component className="self-start">
            <div className="p-4 bg-yellow-400 rounded-lg">
              <AlarmSmoke size={128} color="white" />
            </div>
          </FigmaComponent.Component>
        </FigmaComponent>
        <FigmaComponent title="The Icon">
          <FigmaComponent.Component className="self-start">
            <div className="p-4 bg-pink-300 rounded-lg">
              <AudioLines size={128} color="white" />
            </div>
          </FigmaComponent.Component>
        </FigmaComponent>
      </div>
      <div className="flex flex-col gap-4">
        <FigmaComponent title="The Icon">
          <FigmaComponent.Component>
            <div className="p-4 bg-green-200 rounded-lg">
              <AirVent size={84} />
            </div>
          </FigmaComponent.Component>
        </FigmaComponent>
        <FigmaComponent title="The Icon">
          <FigmaComponent.Component className="self-start">
            <div className="p-4 bg-blue-400 rounded-lg">
              <AlarmSmoke size={128} color="white" />
            </div>
          </FigmaComponent.Component>
        </FigmaComponent>
        <FigmaComponent title="The Icon" className="self-start">
          <FigmaComponent.Component>
            <div className="p-4 bg-teal-300 rounded-lg">
              <AudioLines size={128} color="white" />
            </div>
          </FigmaComponent.Component>
        </FigmaComponent>
      </div>
    </div>
  )
}
