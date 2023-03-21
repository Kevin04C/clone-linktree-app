import { Routes, Route, Navigate } from 'react-router-dom'
import type { FC } from 'react'
import { LoginPage, RegisterPage, SucessRegister } from '../pages/'

export const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register">
        <Route index element={<RegisterPage />} />
        <Route path="confirmation" element={<SucessRegister />} />
      </Route>
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
