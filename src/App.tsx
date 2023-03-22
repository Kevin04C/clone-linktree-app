import { RouterProvider } from 'react-router-dom'
import type { FC } from 'react'
import { router } from './router/router'
import { Provider } from 'react-redux/es/exports'
import { store } from './store/store'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { CheckAuth } from './auth/components/CheckAuth'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <CheckAuth>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </CheckAuth>
    </Provider>
  )
}
