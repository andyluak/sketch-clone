import type { AppProps } from "next/app"

import Layout from "@/components/layout"

import "@/styles/globals.css"

import {
  Permanent_Marker as FontFancy,
  Inter as FontSans,
} from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontFancy = FontFancy({
  subsets: ["latin"],
  variable: "--font-fancy",
  weight: "400",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-fancy: ${fontFancy.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
