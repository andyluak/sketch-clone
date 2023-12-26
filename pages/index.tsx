import { ConnectedComponentsProvider } from "@/context/connected-components-context"
import { AirVent, AlarmSmoke, AudioLines, Pencil } from "lucide-react"

import ActivePointer from "@/components/active-pointer"
import ConnectedComponents from "@/components/connected-components"
import { FigmaComponent, FigmaContainer } from "@/components/figma-component"
import Slider from "@/components/slider"

export default function Home() {
  return (
    <>
      <section className="relative space-y-4 min-h-[60%] md:flex md:flex-col">
        <ConnectedComponentsProvider
          initialMainComponent={{ point: { x: 0, y: 0 } }}
          initialChildComponents={[{ point: { x: 0, y: 0 } }]}
        >
          <ConnectedComponents />
        </ConnectedComponentsProvider>
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
      <section className="relative items-center w-full m-auto mt-12 space-y-4 md:flex md:flex-col">
        <Slider />
      </section>
    </>
  )
}

const ComponentsGroup = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:hidden">
      <div className="flex flex-col items-end gap-4">
        <FigmaContainer title="The Icon">
          <FigmaComponent>
            <div className="p-4 bg-white rounded-lg">
              <AirVent size={24} />
            </div>
          </FigmaComponent>
        </FigmaContainer>
        <FigmaContainer title="The Icon">
          <FigmaComponent className="self-start">
            <div className="p-4 bg-yellow-400 rounded-lg">
              <AlarmSmoke size={128} color="white" />
            </div>
          </FigmaComponent>
        </FigmaContainer>
        <FigmaContainer title="The Icon">
          <FigmaComponent className="self-start">
            <div className="p-4 bg-pink-300 rounded-lg">
              <AudioLines size={128} color="white" />
            </div>
          </FigmaComponent>
        </FigmaContainer>
      </div>
      <div className="flex flex-col gap-4">
        <FigmaContainer title="The Icon">
          <FigmaComponent>
            <div className="p-4 bg-green-200 rounded-lg">
              <AirVent size={84} />
            </div>
          </FigmaComponent>
        </FigmaContainer>
        <FigmaContainer title="The Icon">
          <FigmaComponent className="self-start">
            <div className="p-4 bg-blue-400 rounded-lg">
              <AlarmSmoke size={128} color="white" />
            </div>
          </FigmaComponent>
        </FigmaContainer>
        <FigmaContainer title="The Icon" className="self-start">
          <FigmaComponent>
            <div className="p-4 bg-teal-300 rounded-lg">
              <AudioLines size={128} color="white" />
            </div>
          </FigmaComponent>
        </FigmaContainer>
      </div>
    </div>
  )
}
