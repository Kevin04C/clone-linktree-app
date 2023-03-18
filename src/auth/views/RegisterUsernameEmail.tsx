import { useEffect, useState } from 'react'
import type { FC, ChangeEvent } from 'react'
import { useStore } from '../../hooks/useStore'
import { VerifyDataUser } from '../../ui/VerifyDataUser'
import { ErrorMessageAuth } from '../components/ErrorMessageAuth'
import { useFormik } from 'formik'
import { validationUsernameAndEmail } from '../validations/validationsAuth'
import { useDebounce } from '../../hooks/useDebounce'
import { setEmailPassword } from '../../store/auth/authSlice'
import { Button } from '../../ui/Button'

interface Props {
  verifyUsername: (username: string) => void
  verifyEmail: (email: string) => void
  dataValid: () => void
}

interface RegisterValues {
  username: string
  email: string
}

const initialValues: RegisterValues = {
  username: '',
  email: ''
}

export const RegisterUsernameEmail: FC<Props> = ({ verifyEmail, verifyUsername, dataValid }) => {
  const { dispatch } = useStore()
  const debounce = useDebounce()
  const [fieldsValids, setFieldsValids] = useState(false)
  const { store } = useStore()
  const { username: usernameRegistered, email: emailRegistered } = store.auth.validateDataRegister

  const handleCreateAccount = (data: RegisterValues): void => {
    dataValid()
    dispatch(setEmailPassword(data))
  }

  const { values, setValues, handleBlur, handleSubmit } = useFormik<RegisterValues>({
    initialValues,
    onSubmit: handleCreateAccount,
    validationSchema: validationUsernameAndEmail,
    initialErrors: initialValues
  })
  const { email, username } = values

  const handleChangeUsername = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value
    })
    debounce(() => {
      verifyUsername(value)
    }, 1000)
  }
  const handleChangeEmail = (evt: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target
    setValues({
      ...values,
      [name]: value
    })
    debounce(() => {
      verifyEmail(value)
    }, 1000)
  }

  useEffect(() => {
    if (
      usernameRegistered.status === 'denied' ||
      usernameRegistered.status === 'checking' ||
      emailRegistered.status === 'denied' ||
      emailRegistered.status === 'checking'
    ) {
      setFieldsValids(false)
      return
    }
    setFieldsValids(true)
  }, [usernameRegistered, emailRegistered])

  return (
    <div>
      <h3 className="font-bold text-[30px] text-center tracking-[-1px] lg:text-left lg:text-5xl lg:tracking-[-2px] mb-12">
        Create your account
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className=" relative">
            <input
              type="text"
              placeholder="Username"
              className="mb-3 block w-full bg-[#EFF0EC] rounded-lg leading-[46px] placeholder:text-[#676B5F] px-3 border-solid border-2 border-transparent hover:border-gray-300 transition"
              name="username"
              autoComplete="off"
              value={username}
              onChange={handleChangeUsername}
              onBlur={handleBlur}
            />
            <div className="absolute right-4 top-2/4 -translate-y-2/4">
              {username !== '' && <VerifyDataUser status={usernameRegistered.status} />}
            </div>
          </div>
          {usernameRegistered.msg !== null && (
            <ErrorMessageAuth message={usernameRegistered.msg as string} />
          )}
        </div>
        <div>
          <div className="relative">
            <input
              type="text"
              placeholder="Email"
              className="relative block w-full bg-[#EFF0EC] rounded-lg leading-[46px] placeholder:text-[#676B5F] px-3 border-solid border-2 border-transparent hover:border-gray-300 transition"
              name="email"
              value={email}
              onChange={handleChangeEmail}
              onBlur={handleBlur}
            />
            <div className="absolute right-4 top-2/4 -translate-y-2/4">
              {email !== '' && <VerifyDataUser status={emailRegistered.status} />}
            </div>
          </div>
          <div>
            {emailRegistered.msg !== null && (
              <ErrorMessageAuth message={emailRegistered.msg as string} />
            )}
          </div>
        </div>
        <Button className="mt-10 mb-5 " disabled={!fieldsValids} type="submit">
          Create Account
        </Button>
      </form>
    </div>
  )
}
