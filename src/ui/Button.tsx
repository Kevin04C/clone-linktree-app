import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button: FC<Props> = ({ children, className, type, disabled }) => {
  return (
    <>
      <button
        className={`w-full rounded-full bg-purple-600 text-white font-bold text-base py-3 hover:bg-purple-800 ${
          className as string
        } ${disabled === true ? 'grayscale cursor-not-allowed' : ''}`}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}
