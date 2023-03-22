import type { FC } from 'react'
import { BsShare } from 'react-icons/bs'

export const ShareLink: FC = () => {
  return (
    <div className="relative">
      <button className="flex items-center gap-2 py-2 px-3 rounded-full border border-slate-400 hover:border-transparent hover:bg-slate-100 transition duration-75">
        <BsShare />
        <span className="font-semibold">Share</span>
      </button>
    </div>
  )
}
