import type { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  to: string
  icon: JSX.Element
  title: string
  className?: string
}

export const LinkHeader: FC<Props> = ({ to, icon, title, className }) => {
  return (
    <Link
      to={to}
      className={`
      w-full md:w-auto flex  flex-col md:flex-row justify-center items-center gap-2 md:p-2 rounded-md text-stone-600 hover:bg-input transition-all grow md:grow-0 ${
        className as string
      }`}
    >
      {icon}
      <span className="font-semibold text-[14px] md:text-base">{title}</span>
    </Link>
  )
}
