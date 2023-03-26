import type { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  to: string
  title: string
  icon: JSX.Element
}

export const ButtonPopupUser: FC<Props> = ({ title, to, icon }) => {
  return (
    <>
      <Link
        to={to}
        className="text-gray-700 flex gap-4 items-center hover:bg-stone-100 px-2 py-4 rounded-xl"
      >
        {icon}
        <span className="font-normal">{title}</span>
      </Link>
    </>
  )
}
