import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"

import Footer from "./footer"
import Navbar from "./navbar"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type TLayout = {
  children: React.ReactNode
}

export default function Layout({ children }: TLayout) {
  return (
    <>
      <Navbar className={cn("font-sans", fontSans.variable)} />
      <main
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </main>
      <Footer className={cn("font-sans", fontSans.variable)} />
    </>
  )
}
