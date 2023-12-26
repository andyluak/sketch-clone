import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import untypedData from "../mock-data/swiper-data.json"

const typedData = untypedData as unknown as {
  name: string
  image: string
}[]

type Props = {}

function Slider({}: Props) {
  return (
    <Tabs
      orientation="vertical"
      defaultValue="Powerful vector editing0"
      className="flex items-center justify-between w-full gap-10 px-20"
    >
      <TabsList className="flex flex-col items-start pl-0 gap-2 h-[inherit] bg-transparent">
        {typedData.map((item, i) => (
          <TabsTrigger
            key={`${item.name}${i}`}
            value={`${item.name}${i}`}
            className="p-4 text-xl tracking-wide border-0 shadow-none data-[state=active]:text-pink-900 data-[state=active]:scale-125 data-[state=active]:shadow-none origin-left"
          >
            {item.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {typedData.map((item, i) => (
        <TabsContent
          key={`${item.name}${i}`}
          value={`${item.name}${i}`}
          className="w-[600px] h-[600px] relative "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [1.2, 0.9, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Image alt="" src={`/${item.image}`} width={600} height={600} />
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default Slider
