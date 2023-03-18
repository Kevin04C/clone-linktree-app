import type { FC } from 'react'

interface Props {
  message: string
}

export const ErrorMessageAuth: FC<Props> = ({ message }) => {
  return (
    <div className="mt-2">
      <p className="text-sm text-red-500">{message}</p>
    </div>
  )
}
