import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { LinktreeRoutes } from '../linktree/routes/LinktreeRoutes'
import { Navigate, createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: 'auth/*',
    element: <AuthRoutes />
  },
  {
    path: '/*',
    element: <LinktreeRoutes />
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
])
