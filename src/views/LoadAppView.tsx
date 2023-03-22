import type { FC } from 'react'
import { Logo } from '../ui/Logo'

export const LoadAppView: FC = () => {
  return (
    <div className="h-screen grid place-content-center">
      <Logo />
    </div>
  )
}
