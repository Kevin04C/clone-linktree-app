import type { FC, MouseEvent } from 'react'
import { useStore } from '../../hooks/useStore'
import type { User } from '../../store/auth/interfaces/interfaces'
import { IoShapesOutline, IoUnlinkSharp } from 'react-icons/io5'
import { GiClover } from 'react-icons/gi'
import { PopupUser } from './Popupuser'
import { toggled } from '../../store/ui/uiSlice'
import { LinkHeader } from './LinkHeader'
import { ShareLink } from './ShareLink'

export const Header: FC = () => {
  const { dispatch, store } = useStore()
  const { photo_url: photoUrl, username } = store.auth.user as User

  const handleShowPopup = (evt: MouseEvent<HTMLButtonElement>): void => {
    dispatch(toggled())
  }

  return (
    <header className="sticky top-0 bg-white md:rounded-full shadow ">
      <nav className="px-4 py-2 justify-between flex gap-5 items-center flex-wrap relative content-around">
        <GiClover className="text-neutral-800 mr-3" size={22} />
        <div className="w-full items-center flex gap-4 order-2 md:order-1 md:w-auto grow">
          <LinkHeader to="#" icon={<IoUnlinkSharp />} title="Links" />
          <LinkHeader to="#" icon={<IoShapesOutline />} title="Appearance" />
          <LinkHeader
            to="#"
            icon={<img src={photoUrl} alt={username} className="w-6 h-6 rounded-full" />}
            title="More"
            className="md:hidden"
          />
        </div>
        <div className="relative flex gap-4 order-1 md:order-2">
          <ShareLink />
          <div className="hidden md:relative md:block">
            <button
              className="w-10 aspect-square rounded-full cursor-pointer hover:outline hover:outline-2 hover:outline-input hover:outline-offset-[3px] overflow-hidden"
              onClick={handleShowPopup}
            >
              <img src={photoUrl} alt={username} />
            </button>
            <PopupUser />
          </div>
        </div>
      </nav>
    </header>
  )
}
