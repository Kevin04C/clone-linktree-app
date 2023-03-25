import type { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const Layout: FC = () => {
  return (
    <div className="md:p-2 min-h-screen bg-input">
      <Header />
      <div className="md:p-2">
        <Outlet />
      </div>
    </div>
  )
}
