import type { FC } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { HomePage } from '../pages/HomePage'
import { MorePage } from '../pages/MorePage'
import { AppareancePage } from '../pages/AppareancePage'
import { useStore } from '../../hooks/useStore'
import { useEffect } from 'react'
import { startGetLinks } from '../../store/clonetree/thunks'
import { startGetHeaders } from '../../store/header/thunks'

export const LinktreeRoutes: FC = () => {
  const { dispatch } = useStore()

  useEffect(() => {
    dispatch(startGetLinks())
    dispatch(startGetHeaders())
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="more" element={<MorePage />} />
        <Route path="appareance" element={<AppareancePage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
