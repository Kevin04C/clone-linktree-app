import type { FC } from 'react'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'

interface Props {
  see: boolean
  changeSeePassword: () => void
}

export const SeePassword: FC<Props> = ({ see, changeSeePassword }) => {
  return (
    <button
      type="button"
      className="absolute right-4 top-2/4 -translate-y-2/4"
      onClick={changeSeePassword}
    >
      {!see ? <BsEyeSlashFill /> : <BsEyeFill />}
    </button>
  )
}
