import type { FC, MouseEvent } from 'react'
import { useStore } from '../../hooks/useStore'
import { logout } from '../../store/auth/authSlice'
import { CiLogout } from 'react-icons/ci'

export const ButtonLogout: FC = () => {
  const { dispatch } = useStore()

  const handleLogout = (evt: MouseEvent<HTMLButtonElement>): void => {
    dispatch(logout())
    localStorage.removeItem('token')
  }

  return (
    <button
      className="w-full text-gray-700 flex gap-4 items-center hover:bg-stone-100 px-2 py-4 rounded-xl"
      onClick={handleLogout}
    >
      <CiLogout />
      Sign out
    </button>
  )
}
