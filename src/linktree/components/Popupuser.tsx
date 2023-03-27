import type { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import type { User } from '../../store/auth/interfaces/interfaces'
import { ButtonLogout } from './ButtonLogout'
import { ButtonMyAccount } from './ButtonMyAccount'

export const PopupUser: FC = () => {
  const { store } = useStore()
  const { photo_url: photoUrl, username } = store.auth.user as User
  const { showPopupUser } = store.ui

  return (
    <aside
      className={`w-[300px] absolute bg-white rounded-lg right-0 top-12 shadow-sm animate__animated ${
        showPopupUser
          ? 'opacity-100 pointer-events-auto animate__fadeIn animate__faster -z-20'
          : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="p-3">
        <div className="flex gap-5 items-center">
          <figure className="w-14 aspect-square rounded-full overflow-hidden">
            <img src={photoUrl} alt={username} />
          </figure>
          <div>
            <h4 className="font-semibold">@{username}</h4>
            <p className="text-xs text-stone-400">linktr.ee/randomuser24</p>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-gray-500 font-semibold mb-2">Account</h3>
          <ButtonMyAccount />
        </div>
        <div className="mt-1">
          <ButtonLogout />
        </div>
      </div>
    </aside>
  )
}
