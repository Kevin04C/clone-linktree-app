import { useStore } from '../hooks/useStore'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  children: ReactNode
}

export const PublicRoutes = ({ children }: Props): JSX.Element => {
  const { store } = useStore()
  const user = store.auth.user
  return (user === null ? children : <Navigate to="/" />) as JSX.Element
}
