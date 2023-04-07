export interface Link {
  id: number
  title: string
  url: string
  active: 1 | 0
}

export interface LinkRequest {
  title: string
  url: string
}

export interface LinksUser {
  ok: boolean
  links: Link[]
}

export interface LinkResponse {
  ok: boolean
  link: Link
}
