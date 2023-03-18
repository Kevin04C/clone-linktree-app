import { Routes, Route } from 'react-router-dom'
import type { FC } from 'react'
import { LoginPage, RegisterPage } from '../pages/'

export const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  )
}
