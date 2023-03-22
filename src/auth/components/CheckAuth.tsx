import { useLayoutEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { getLocalStorage } from '../../helpers/localStorage'
import { useStore } from '../../hooks/useStore'
import { startRenewToken } from '../../store/auth/thunks'
import { loadApp, logout } from '../../store/auth/authSlice'
import { LoadAppView } from '../../views/LoadAppView'

interface Props {
  children: ReactNode
}

export const CheckAuth: FC<Props> = ({ children }) => {
  const { dispatch, store } = useStore()
  const { loadingApp } = store.auth

  useLayoutEffect(() => {
    dispatch(loadApp())
    const token = getLocalStorage<string>('token')
    if (token === null) {
      dispatch(logout)
      return
    }
    dispatch(startRenewToken())
  }, [])

  if (loadingApp) {
    return <LoadAppView />
  }

  return <>{children}</>
}
