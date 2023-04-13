import type { FC } from 'react'

interface Props {
  url: string
  title: string
}

export const PhoneLink: FC<Props> = ({ title, url }) => {
  return (
    <a
      href={url}
      className="block rounded-md bg-neutral-800 py-[8px] w-full text-[10px] font-medium text-center cursor-pointer hover:scale-[1.05] transition-transform"
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  )
}
