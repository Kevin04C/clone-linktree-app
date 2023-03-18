import { Navigate } from 'react-router-dom'
import { useStore } from '../hooks/useStore'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const ProtectedRoutes = ({ children }: Props): JSX.Element => {
  const { store } = useStore()
  const user = store.auth.user

  return (user !== null ? children : <Navigate to="/auth/login" />) as JSX.Element
}
