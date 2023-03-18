import CloneTreeApi from '../../apis/cloneTreeApi'
import type { AxiosError } from 'axios'
import type { ValidateRegisterDataResponse } from '../../store/auth/interfaces/interfaces'

export const verifyEmailService = async (email: string): Promise<ValidateRegisterDataResponse> => {
  try {
    const { data } = await CloneTreeApi.post('/user/verify-email', { email })
    return data as ValidateRegisterDataResponse
  } catch (error) {
    const { response } = error as AxiosError
    const data = response?.data as ValidateRegisterDataResponse
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw data
  }
}
