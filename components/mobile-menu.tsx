import React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import untypedNavigationData from "../mock-data/navbar-items.json"
import { Navigation } from "../types"
import { Button } from "./ui/button"

const typedNavigationData = untypedNavigationData as unknown as Navigation[]

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu size={32} />
        </Button>
      </SheetTrigger>
      <SheetContent
        hideClose
        side="left"
        className={cn(
          "overflow-auto border-0 bg-gradient-to-b from-pink-400 to-teal-400 pb-0 pl-4 pr-0 pt-0 text-white"
        )}
      >
        <div className="w-[calc(100%+1px)] bg-gray-900 p-4">
          <div className="flex items-center justify-between">
            <SheetClose>
              <Button variant="ghost" size="sm" className="px-0">
                <X size={32} />
              </Button>
            </SheetClose>
            <Button variant="ghost" textSize="lg">
              Sign in
            </Button>
          </div>
          <div className="relative">
            <ul className="flex flex-col items-start justify-center gap-8 mt-8">
              {typedNavigationData.map((item) => (
                <li
                  key={item.name}
                  className="w-full pb-8 border-b border-b-gray-700"
                >
                  <span className="text-xs tracking-tight text-gray-400 uppercase">
                    {item.name}
                  </span>
                  {item.children && (
                    <ul className="flex flex-col items-start justify-center gap-2 mt-2 tracking-wide text-gray-200">
                      {item.children.map((child) => (
                        <li key={child.link.name}>
                          <Link href={child.link.url}>{child.link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="sticky bottom-0 w-full px-2 py-10 text-black bg-gradient-to-b from-transparent to-gray-900 to-[33%]">
              <Button
                className="w-full"
                variant="outline"
                textSize="sm"
                size="sm"
              >
                Get Started For Free
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
