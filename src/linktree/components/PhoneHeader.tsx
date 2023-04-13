import type { FC } from 'react'

interface Props {
  headline: string
}

export const PhoneHeader: FC<Props> = ({ headline }) => {
  return <p className="text-[13px] text-center font-bold break-words">{headline}</p>
}
