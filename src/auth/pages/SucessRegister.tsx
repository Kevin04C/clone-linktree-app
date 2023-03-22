import { Logo } from '../../ui/Logo'
import { AuthLayout } from '../layout/AuthLayout'
import type { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const SucessRegister: FC = () => {
  const navigate = useNavigate()
  const { store } = useStore()
  const { email } = store.auth.dataRegister

  useEffect(() => {
    if (email === '') {
      navigate('/auth/login')
    }
  }, [email])

  return (
    <AuthLayout>
      <div className="md:flex pt-4 px-4 xl:px-0">
        <div className="w-full h-full lg:w-2/3">
          <Logo />
          <div className="lg:w-4/6 mt-20">
            <h3 className="text-3xl lg:text-5xl font-bold">Thanks for signing up</h3>

            <p className="mt-6 text-gray-500">
              To verify your accoun, click on the link sent your inbox
              <span className="block">({email})</span>
            </p>

            <Link
              to="/auth/login"
              className="mt-12 block rounded-full bg-purple-600 text-white font-bold text-base py-3 hover:bg-purple-800 text-center"
            >
              Go to sign in
            </Link>
          </div>
        </div>
        <div className="hidden h-32 lg:flex lg:items-center lg:justify-center lg:fixed lg:right-0 lg:top-0 lg:min-h-screen lg:w-1/3">
          <img
            src="/assets/image-success-register.jpg"
            alt="hola"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </AuthLayout>
  )
}
