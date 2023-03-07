import { RouterProvider } from 'react-router-dom'
import type { FC } from 'react'
import { router } from './router/router'
import { Provider } from 'react-redux/es/exports'
import { store } from './store/store'

export const App: FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
