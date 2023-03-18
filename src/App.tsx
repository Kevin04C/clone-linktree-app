import { RouterProvider } from 'react-router-dom'
import type { FC } from 'react'
import { router } from './router/router'
import { Provider } from 'react-redux/es/exports'
import { store } from './store/store'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </Provider>
  )
}
