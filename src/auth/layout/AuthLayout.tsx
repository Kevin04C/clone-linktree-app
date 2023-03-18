import type { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto h-full">{children}</div>
    </div>
  )
}
