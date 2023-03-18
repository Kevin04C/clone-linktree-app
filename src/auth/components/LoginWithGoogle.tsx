import type { FC } from 'react'
import { useAppDispatch } from '../../store/app/hook'
import { GoogleLogin } from '@react-oauth/google'
import type { CredentialResponse } from '@react-oauth/google'
import { startLoginWithGoogle } from '../../store/auth/thunks'

export const LoginWithGoogle: FC = () => {
  const dispatch = useAppDispatch()

  const handleSuccess = (credentialResponse: CredentialResponse): void => {
    dispatch(startLoginWithGoogle(credentialResponse.credential as string))
  }

  return (
    <div className="w-full flex flex-col items-center">
      <GoogleLogin text="continue_with" locale="en" onSuccess={handleSuccess} size={'large'} />
    </div>
  )
}
