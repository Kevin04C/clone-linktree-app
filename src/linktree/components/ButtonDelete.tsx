import { AiOutlineDelete } from 'react-icons/ai'
import type { FC } from 'react'

interface Props {
  onCLick: () => void
  isActive: boolean
}

export const ButtonDelete: FC<Props> = ({ isActive, onCLick }) => {
  return (
    <button
      className={`p-1 rounded-md ${
        isActive ? 'bg-purple-800 text-white hover:bg-purple-900' : 'text-slate-400'
      }`}
      onClick={onCLick}
    >
      <AiOutlineDelete size={20} className="text-inherit" />
    </button>
  )
}
