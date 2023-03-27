import type { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import type { User } from '../../store/auth/interfaces/interfaces'

export const PhonePreview: FC = () => {
  const { store } = useStore()
  const { photo_url: photoUrl, username } = store.auth.user as User

  return (
    <div className="w-[250px] aspect-[9/16] border-[5px] border-black rounded-[40px] bg-neutral-900 text-white">
      <div className="p-2 mt-4">
        <div className="w-full flex flex-col items-center">
          <img src={photoUrl} alt={username} className="w-14 rounded-full" />
          <h3 className="mt-3 font-bold text-[14px]">@{username}</h3>
        </div>
      </div>
    </div>
  )
}
