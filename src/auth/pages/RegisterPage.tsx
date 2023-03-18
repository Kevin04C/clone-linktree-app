import { AuthLayout } from '../layout/AuthLayout'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../ui/Logo'
import { useVerifyRegisterUser } from '../hooks/useVerifyRegisterUser'
import { RegisterUsernameEmail } from '../views/RegisterUsernameEmail'
import { RegisterPassword } from '../views/RegisterPassword'

export const RegisterPage: FC = () => {
  const { verifyEmail, verifyUsername, dataInvalid, dataValid, isDataValid } =
    useVerifyRegisterUser()

  return (
    <AuthLayout>
      <div className="md:flex pt-4 px-4 xl:px-0">
        <div className="w-full h-full lg:w-2/3">
          <Logo />
          <div className="md:w-[600px] mx-auto mt-20 px-2">
            {!isDataValid ? (
              <RegisterUsernameEmail
                verifyEmail={verifyEmail}
                verifyUsername={verifyUsername}
                dataValid={dataValid}
              />
            ) : (
              <RegisterPassword dataInvalid={dataInvalid} />
            )}

            <div className="w-full flex justify-center items-center mt-8">
              <div>
                <p>
                  Already have an account?{' '}
                  <Link to={'/auth/login'} className="underline text-purple-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative h-32 items-center justify-center lg:flex lg:fixed lg:right-0 lg:top-0 lg:min-h-screen lg:w-1/3">
          <img
            src="/assets/image-register.png"
            alt="image-login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </AuthLayout>
  )
}
