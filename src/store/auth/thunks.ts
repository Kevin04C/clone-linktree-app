import CloneTreeApi from '../../apis/cloneTreeApi'
import {
  checkingCredential,
  clearDataRegister,
  errorAuth,
  login,
  logout,
  registerSuccess
} from './authSlice'
import type {
  LoginForm,
  AuthErrorResponse,
  LoginResponse,
  RegisterForm
} from './interfaces/interfaces'
import type { AppDispatch } from '../store'
import type { AxiosError } from 'axios'
import { saveLocalStorage } from '../../helpers/localStorage'

export const startLogin = (form: LoginForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(checkingCredential())
      const { data } = await CloneTreeApi.post('/user/', form)
      const { user, token } = data as LoginResponse
      dispatch(login(user))
      saveLocalStorage<string>('token', token)
      dispatch(clearDataRegister())
    } catch (error: unknown) {
      const { response } = error as AxiosError
      const { msg } = response?.data as AuthErrorResponse
      dispatch(errorAuth(msg))
    }
  }
}

export const startLoginWithGoogle = (credential: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(checkingCredential())
      const { data } = await CloneTreeApi.post('user/auth-google', { credential })
      const { user, token } = data as LoginResponse
      dispatch(login(user))
      saveLocalStorage<string>('token', token)
    } catch (error) {
      const { response } = error as AxiosError
      const { msg } = response?.data as AuthErrorResponse
      dispatch(errorAuth(msg))
    }
  }
}

export const startRegister = (form: RegisterForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(checkingCredential())
      await CloneTreeApi.post('/user/register', form)
      dispatch(registerSuccess())
    } catch (error) {
      const { response } = error as AxiosError
      const { msg } = response?.data as AuthErrorResponse
      dispatch(errorAuth(msg))
    }
  }
}

export const startRenewToken = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await CloneTreeApi.get('/user/renew')
      const { token, user } = data as LoginResponse
      saveLocalStorage('token', token)
      dispatch(login(user))
    } catch (error) {
      dispatch(logout())
    }
  }
}
