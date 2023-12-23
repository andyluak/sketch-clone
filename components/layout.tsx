import { cn } from "@/lib/utils"

import Footer from "./footer"
import Navbar from "./navbar"

type TLayout = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayout) {
  return (
    <>
      <Navbar />
      <main
        className={cn("min-h-screen bg-background font-sans antialiased p-4")}
      >
        {children}
      </main>
      <Footer className={cn("font-sans")} />
    </>
  )
}
