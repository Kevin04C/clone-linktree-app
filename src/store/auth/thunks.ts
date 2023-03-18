import CloneTreeApi from '../../apis/cloneTreeApi'
import { checkingCredential, errorAuth, login } from './authSlice'
import type {
  LoginForm,
  LoginErrorResponse,
  LoginResponse,
  RegisterForm
} from './interfaces/interfaces'
import type { AppDispatch } from '../store'
import type { AxiosError } from 'axios'
import { saveLocalStorage } from '../../helpers/localStorage'

export const startLogin = (form: LoginForm) => {
  return async (dispacth: AppDispatch) => {
    try {
      dispacth(checkingCredential())
      const { data } = await CloneTreeApi.post('/user/', form)
      const { user, token } = data as LoginResponse
      dispacth(login(user))
      saveLocalStorage<string>('token', token)
    } catch (error: unknown) {
      const { response } = error as AxiosError
      const { msg } = response?.data as LoginErrorResponse
      dispacth(errorAuth(msg))
    }
  }
}

export const startLoginWithGoogle = (credential: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await CloneTreeApi.post('user/auth-google', { credential })
      const { user, token } = data as LoginResponse
      dispatch(login(user))
      saveLocalStorage<string>('token', token)
    } catch (error) {
      console.log(error)
    }
  }
}

export const startRegister = (form: RegisterForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await CloneTreeApi.post('/user/register', form)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
}
