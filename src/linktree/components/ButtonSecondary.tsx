import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  handleClick?: () => void
}

export const ButtonSecondary: FC<Props> = ({ children, className, type, handleClick }) => {
  return (
    <>
      <button
        className={`w-full rounded-full border-[2px] border-stone-100 text-stone-800 font-bold text-base py-3 hover:bg-slate-100 ${
          className as string
        }`}
        type={type}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  )
}
