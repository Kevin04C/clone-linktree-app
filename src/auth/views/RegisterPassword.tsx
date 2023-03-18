import { IoIosArrowBack } from 'react-icons/io'
import type { FC } from 'react'
import { useSeePassword } from '../hooks/useSeePassword'
import { SeePassword } from '../components/SeePassword'
import { useFormik } from 'formik'
import { validationPassword } from '../validations/validationsAuth'
import { useStore } from '../../hooks/useStore'
import { clearDataRegister } from '../../store/auth/authSlice'
import { ErrorMessageAuth } from '../components/ErrorMessageAuth'
import { Button } from '../../ui/Button'
import { startRegister } from '../../store/auth/thunks'

interface Props {
  dataInvalid: () => void
}

interface RegisterPasswordValues {
  password: string
}

const initialValues: RegisterPasswordValues = {
  password: ''
}

export const RegisterPassword: FC<Props> = ({ dataInvalid }) => {
  const { dispatch, store } = useStore()
  const { username, email } = store.auth.dataRegister
  const { handleSeePassword, seePassword, inputPasswordRef } = useSeePassword()

  const onSubmit = (data: RegisterPasswordValues): void => {
    const { password } = data
    const dataUser = { username, email, password }

    dispatch(startRegister(dataUser))
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched, isValid } =
    useFormik<RegisterPasswordValues>({
      initialValues,
      onSubmit,
      validationSchema: validationPassword,
      initialErrors: initialValues
    })
  const { password } = values

  const handleBack = (): void => {
    dataInvalid()
    dispatch(clearDataRegister())
  }

  console.log(errors)

  return (
    <div>
      <nav className="mb-2 relative -left-[14px]">
        <button
          className="flex items-center gap-1 text-purple-700 font-semibold text-lg p-3 hover:bg-zinc-200 hover:bg-opacity-80 rounded-full"
          onClick={handleBack}
        >
          <IoIosArrowBack /> Back
        </button>
      </nav>

      <div>
        <h3 className="text-3xl leading-[-2px] font-bold md:text-5xl md:leading-[-1px] mb-5">
          Enter a password
        </h3>
        <p className="text-slate-500 mb-8">
          Choose a strong password with a number to ensure your account is secure.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
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
            {errors.password !== undefined && touched.password !== undefined && (
              <ErrorMessageAuth message={errors.password} />
            )}
          </div>
          <Button type="submit" className="mt-10 mb-5" disabled={!isValid}>
            Continue
          </Button>
        </form>
      </div>
    </div>
  )
}
