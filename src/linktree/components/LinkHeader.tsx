import type { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
  to: string
  icon: JSX.Element
  title: string
  className?: string
}

export const LinkHeader: FC<Props> = ({ to, icon, title, className }) => {
  const baseClass =
    'w-full md:w-auto flex  flex-col md:flex-row justify-center items-center gap-2 md:p-2 md:rounded-md md: md:hover:bg-input transition-all grow md:grow-0 font-semibold'
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${baseClass} text-stone-900 border-b border-black md:border-none  ${
              className as string
            }`
          : `
      ${baseClass} text-stone-500 ${className as string}`
      }
    >
      {icon}
      <span className="text-[14px] md:text-base">{title}</span>
    </NavLink>
  )
}
