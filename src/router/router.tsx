import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { LinktreeRoutes } from '../linktree/routes/LinktreeRoutes'
import { Navigate, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import { PublicRoutes } from './PublicRoutes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="auth/*"
        element={
          <PublicRoutes>
            <AuthRoutes />
          </PublicRoutes>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoutes>
            <LinktreeRoutes />
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
)
