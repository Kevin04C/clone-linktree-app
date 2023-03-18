export interface User {
  id: number
  username: string
  photo_url: string
  bio: string
  profile_title: string
}

export interface LoginForm {
  username: string
  password: string
}
export interface RegisterForm {
  username: string
  email: string
  password: string
}

export interface LoginResponse {
  ok: boolean
  user: User
  token: string
}

export interface LoginErrorResponse {
  ok: boolean
  msg: string
}

export interface ValidateRegisterDataValues {
  status: 'checking' | 'allow' | 'denied'
  msg?: string | null
}

export interface DataRegister {
  username: string
  email: string
}

export interface ValidateRegisterData {
  username: ValidateRegisterDataValues
  email: ValidateRegisterDataValues
}

export interface ValidateRegisterDataResponse {
  ok: boolean
  msg?: string
}
