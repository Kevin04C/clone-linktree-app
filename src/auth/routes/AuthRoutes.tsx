import { Routes, Route } from 'react-router-dom'
import type { FC } from 'react'
import { LoginPage } from '../pages/LoginPage'

export const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  )
}
