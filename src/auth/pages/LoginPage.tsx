import type { FC } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { SeePassword } from '../components/SeePassword'
import { useSeePassword } from '../hooks/useSeePassword'
import { Link } from 'react-router-dom'
import { LoginWithGoogle } from '../components/LoginWithGoogle'
import { useFormik } from 'formik'
import { validationSchemaLogin } from '../validations/validationsAuth'
import { startLogin } from '../../store/auth/thunks'
import { useStore } from '../../hooks/useStore'
import { Logo } from '../../ui/Logo'
import { Button } from '../../ui/Button'
import { ErrorMessageAuth } from '../components/ErrorMessageAuth'
interface LoginValues {
  username: string
  password: string
}

const initialValues: LoginValues = {
  username: '',
  password: ''
}

export const LoginPage: FC = () => {
  const { dispatch, store } = useStore()
  const { error } = store.auth
  const onSubmit = (data: LoginValues): void | Promise<void> => {
    dispatch(startLogin(data))
  }

  const { values, handleSubmit, handleChange, handleBlur, isValid } = useFormik<LoginValues>({
    initialValues,
    onSubmit,
    validationSchema: validationSchemaLogin,
    initialErrors: initialValues
  })
  const { username, password } = values

  const { handleSeePassword, seePassword, inputPasswordRef } = useSeePassword()

  return (
    <AuthLayout>
      <div className="md:flex pt-4 px-4 xl:px-0">
        <div className="w-full h-full lg:w-2/3">
          <Logo />
          <div className="md:w-[600px] mx-auto mt-20 px-2">
            <h3 className="font-bold text-[30px] text-center tracking-[-1px] lg:text-left lg:text-5xl lg:tracking-[-2px] mb-12">
              Log in to your Clonetree
            </h3>
            <form onSubmit={handleSubmit} className="w-full ">
              <input
                type="text"
                placeholder="Username"
                className="mb-3 block w-full bg-input rounded-lg leading-[46px] placeholder:text-[#676B5F] px-3 border-solid border-2 border-transparent hover:border-gray-300 transition"
                name="username"
                value={username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Password"
                  className="relative block w-full bg-input rounded-lg leading-[46px] placeholder:text-[#676B5F] px-3 border-solid border-2 border-transparent hover:border-gray-300 transition"
                  ref={inputPasswordRef}
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <SeePassword see={seePassword} changeSeePassword={handleSeePassword} />
              </div>
              {error !== null && <ErrorMessageAuth message={error} />}
              <Button className="mt-8 mb-5" type="submit" disabled={!isValid}>
                Log in
              </Button>
              <LoginWithGoogle />
            </form>
            <div className="flex flex-col gap-7 items-center mt-8">
              <div>
                <Link to={'#'} className="underline text-purple-500">
                  Forgot Password
                </Link>
              </div>
              <div>
                <p>
                  Don not have an account{' '}
                  <Link to={'/auth/register'} className="underline text-purple-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden relative h-32 items-center justify-center lg:flex lg:fixed lg:right-0 lg:top-0 lg:min-h-screen lg:w-1/3">
          <img
            src="/assets/image-login.png"
            alt="image-login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </AuthLayout>
  )
}
