import React, { FC, useState } from "react"

export type Point = {
  x: number
  y: number
}

type Component = {
  point: Point
}

type ContextType = {
  mainComponent: Component
  childComponents: Component[]
  setMainComponent: (component: Component) => void
  setChildComponents: (components: Component[]) => void
}

const ConnectedComponentsContext = React.createContext<ContextType | undefined>(
  undefined
)

type ProviderProps = {
  initialMainComponent: Component
  initialChildComponents: Component[]
  children: React.ReactNode
}

export const ConnectedComponentsProvider: FC<ProviderProps> = ({
  initialMainComponent,
  initialChildComponents,
  children,
}) => {
  const [mainComponent, setMainComponent] = useState(initialMainComponent)
  const [childComponents, setChildComponents] = useState(initialChildComponents)

  return (
    <ConnectedComponentsContext.Provider
      value={{
        mainComponent,
        childComponents,
        setMainComponent,
        setChildComponents,
      }}
    >
      {children}
    </ConnectedComponentsContext.Provider>
  )
}

export const useConnectedComponents = () => {
  const context = React.useContext(ConnectedComponentsContext)
  if (context === undefined) {
    throw new Error(
      "useConnectedComponents must be used within a ConnectedComponentsProvider"
    )
  }
  return context
}

export default ConnectedComponentsContext
