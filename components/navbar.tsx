import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import MobileMenu from "./mobile-menu"
import { Button } from "./ui/button"

type Props = {
  className?: string
}

function Navbar({ className }: Props) {
  return (
    <header className={cn(className, "flex items-center justify-between py-2")}>
      <MobileMenu />
      <Image alt="logo" src="/logo.svg" width={40} height={40} />
      <Button variant="link" textSize="lg">
        Sign in
      </Button>
    </header>
  )
}

export default Navbar
