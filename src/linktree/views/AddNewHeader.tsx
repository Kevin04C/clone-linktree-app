import type { FC } from 'react'
import { startCreateHeader } from '../../store/header/thunks'
import { useStore } from '../../hooks/useStore'

export const AddNewHeader: FC = () => {
  const { dispatch } = useStore()

  const handleNewHeader = (): void => {
    dispatch(startCreateHeader())
  }

  return (
    <button
      className="flex gap-2 items-center mt-6 mb-6 bg-transparent rounded-full border border-slate-300 py-2 px-4 text-sm font-medium hover:bg-white transition-colors text-slate-700"
      onClick={handleNewHeader}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" className="mr-xs">
        <path
          fill="#000"
          fillRule="evenodd"
          d="M.5 0H0v1h16V0H.5Zm0 4-.5.5v11l.5.5h15l.5-.5v-11l-.5-.5H.5ZM1 15V5h14v10H1Z"
          clipRule="evenodd"
        />
      </svg>
      Header
    </button>
  )
}
