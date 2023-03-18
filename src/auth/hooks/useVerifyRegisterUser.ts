import { useAppDispatch } from '../../store/app/hook'
import { verifyUsernameService } from '../services/verifyUsernameService'
import { verifyEmailService } from '../services/verifyEmailService'
import {
  allowedEmail,
  allowedUsername,
  checkingEmail,
  checkingUsername,
  deniedEmail,
  deniedUsername
} from '../../store/auth/authSlice'
import type { ValidateRegisterDataResponse } from '../../store/auth/interfaces/interfaces'
import { useState } from 'react'

interface ReturnUseVerifyRegisterUser {
  verifyUsername: (username: string) => Promise<void>
  verifyEmail: (email: string) => Promise<void>
  isDataValid: boolean
  dataInvalid: () => void
  dataValid: () => void
}

export const useVerifyRegisterUser = (): ReturnUseVerifyRegisterUser => {
  const [isDataValid, setIsDataValid] = useState(false)

  const dispatch = useAppDispatch()

  const verifyUsername = async (username: string): Promise<void> => {
    if (username === '') return
    try {
      dispatch(checkingUsername())

      await verifyUsernameService(username)
      dispatch(allowedUsername())
    } catch (error) {
      const resp = error as ValidateRegisterDataResponse
      dispatch(deniedUsername(resp.msg as string))
    }
  }

  const verifyEmail = async (email: string): Promise<void> => {
    if (email === '') return
    try {
      dispatch(checkingEmail())

      await verifyEmailService(email)
      dispatch(allowedEmail())
    } catch (error) {
      const data = error as ValidateRegisterDataResponse
      console.log(data)
      dispatch(deniedEmail(data.msg as string))
    }
  }

  const dataInvalid = (): void => {
    setIsDataValid(false)
  }

  const dataValid = (): void => {
    setIsDataValid(true)
  }

  return {
    verifyUsername,
    verifyEmail,
    isDataValid,
    dataInvalid,
    dataValid
  }
}
