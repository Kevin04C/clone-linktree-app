import type { FC, ReactNode } from 'react'
import { Header } from '../components/Header'

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="md:p-2">{children}</div>
    </div>
  )
}
