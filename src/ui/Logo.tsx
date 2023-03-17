import { GiClover } from 'react-icons/gi'
import type { FC } from 'react'

export const Logo: FC = () => {
  return (
    <h1 className="font-semibold text-xl flex gap-2 items-center">
      CloneTree
      <GiClover className="text-green-500" />
    </h1>
  )
}
