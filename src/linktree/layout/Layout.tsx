import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="md:p-2">{children}</div>
    </div>
  )
}
