import { Button } from "@/components/ui/button"
import FigmaComponent from "@/components/figma-component"

export default function Home() {
  return (
    <section>
      <FigmaComponent
        title="The Pitch"
        className="w-full px-4 py-8 bg-white border shadow-md aspect-square"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            Sketch is where great design happens.
          </h1>
          <p>
            A Mac app for designers to create, team up,{" "}
            <span className="underline">prototype</span>, and more
          </p>
          <p>
            A Web app for everyone else to create, team up,{" "}
            <span className="underline">prototype</span>, and more
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
    </section>
  )
}
