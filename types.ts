export type Navigation = {
  name: string
  children: {
    link: {
      name: string
      url: string
    }
    children: any[]
  }[]
}
