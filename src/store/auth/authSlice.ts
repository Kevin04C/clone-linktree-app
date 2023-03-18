import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { ValidateRegisterData, User, DataRegister } from './interfaces/interfaces'

interface AuthState {
  loadApp: boolean
  checkingCredential: boolean
  user: User | null
  error: string
  success: string
  validateDataRegister: ValidateRegisterData
  dataRegister: DataRegister
}

const initialState: AuthState = {
  checkingCredential: false,
  user: null,
  error: '',
  success: '',
  loadApp: false,
  validateDataRegister: {
    username: {
      status: 'checking',
      msg: ''
    },
    email: {
      status: 'checking',
      msg: ''
    }
  },
  dataRegister: {
    username: '',
    email: ''
  }
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    checkingCredential: (state) => {
      state.checkingCredential = true
    },

    login: (state, action: PayloadAction<User>) => {
      const { payload } = action
      state.user = payload
      state.checkingCredential = false
      state.loadApp = false
    },

    errorAuth: (state, action: PayloadAction<string>) => {
      state.loadApp = false
      state.checkingCredential = false
      state.user = null
      state.error = action.payload
      state.success = ''
    },

    logout: (state) => {
      state.loadApp = false
      state.checkingCredential = false
      state.user = null
      state.error = ''
      state.success = ''
    },

    checkingUsername: (state) => {
      state.validateDataRegister.username.status = 'checking'
    },

    allowedUsername: (state) => {
      state.validateDataRegister.username.status = 'allow'
      state.validateDataRegister.username.msg = ''
    },

    deniedUsername: (state, action: PayloadAction<string>) => {
      state.validateDataRegister.username.status = 'denied'
      state.validateDataRegister.username.msg = action.payload
    },

    checkingEmail: (state) => {
      state.validateDataRegister.email.status = 'checking'
      state.validateDataRegister.email.msg = ''
    },

    allowedEmail: (state) => {
      state.validateDataRegister.email.status = 'allow'
    },

    deniedEmail: (state, action: PayloadAction<string>) => {
      state.validateDataRegister.email.status = 'denied'
      state.validateDataRegister.email.msg = action.payload
    },

    setEmailPassword: (state, action: PayloadAction<DataRegister>) => {
      const { username, email } = action.payload
      state.dataRegister.username = username
      state.dataRegister.email = email
    },

    clearDataRegister: (state) => {
      state.dataRegister.username = ''
      state.dataRegister.email = ''
    }
  }
})

export const {
  login,
  checkingCredential,
  errorAuth,
  logout,
  checkingUsername,
  allowedUsername,
  deniedUsername,
  allowedEmail,
  deniedEmail,
  checkingEmail,
  setEmailPassword,
  clearDataRegister
} = authSlice.actions
