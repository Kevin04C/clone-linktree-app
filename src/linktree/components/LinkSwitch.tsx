import type { FC } from 'react'
import type { Link } from '../../store/clonetree/interfaces/interfaces'

interface Props {
  active: 1 | 0
  toggleSwicth: () => void
  updateLink: (link: Link) => void
  valuesLink: Link
}

export const LinkSwitch: FC<Props> = ({ active, toggleSwicth, updateLink, valuesLink }) => {
  const handleToggleded = (): void => {
    toggleSwicth()
    console.log(valuesLink)
    // updateLink(valuesLink)
  }
  return (
    <button
      className={`w-[34px] h-[20px] bg-gray-500 rounded-full p-[2px] ${
        active === 0 ? 'bg-gray-500' : 'bg-green-700'
      }`}
      onClick={handleToggleded}
    >
      <span
        className={`block w-2/4 h-full bg-white rounded-full transition-all duration-200 ${
          active === 0 ? 'translate-x-0' : 'translate-x-full'
        }`}
      ></span>
    </button>
  )
}
