export interface Header {
  id: number
  headline: string
  active: 1 | 0
}

export interface HeaderRequest {
  headline?: string
  active: 1 | 0
}

export interface HeaderResponse {
  ok: boolean
  header: Header
}

export interface HeadersResponse {
  ok: boolean
  headers: Header[]
}
