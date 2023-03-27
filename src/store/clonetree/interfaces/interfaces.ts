export interface Link {
  id: number
  title: string
  url: string
  active: boolean
}

export interface LinkRequest {
  title: string
  url: string
}
