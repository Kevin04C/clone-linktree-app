import { BsCheckCircle } from 'react-icons/bs'
import { VscError } from 'react-icons/vsc'
import type { FC } from 'react'
import { ClipLoader } from 'react-spinners'
import type { ValidateRegisterDataValues } from '../store/auth/interfaces/interfaces'

type Props = Pick<ValidateRegisterDataValues, 'status'>

export const VerifyDataUser: FC<Props> = ({ status }) => {
  if (status === 'checking') {
    return <ClipLoader color="#36d7b7" size={20} className="m-0 p-0" />
  }

  return (
    <>
      {status === 'allow' ? (
        <BsCheckCircle className="text-green-500" />
      ) : (
        <VscError className="text-red-500" />
      )}
    </>
  )
}
