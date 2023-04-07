import type { FC } from 'react'
import { ButtonSecondary } from './ButtonSecondary'
import { Button } from '../../ui/Button'
import { IoCloseOutline } from 'react-icons/io5'

interface Props {
  handleDelete: () => void
  handleCancelDelete: () => void
  isActive: boolean
}

export const DeleteOptions: FC<Props> = ({ handleDelete, handleCancelDelete, isActive }) => {
  return (
    <div
      className={`bg-white overflow-hidden rounded-b-2xl ${
        !isActive ? 'h-[0px]' : 'h-[160px]'
      } transition-all duration-500 ease-in-out`}
    >
      <div className="bg-stone-300 py-2 relative">
        <h4 className="text-center font-semibold">Delete</h4>
        <button className="absolute top-1/2 -translate-y-1/2 right-5" onClick={handleCancelDelete}>
          <IoCloseOutline size={25} />
        </button>
      </div>
      <h3 className="text-center my-3">Delete this forever?</h3>
      <div className="flex gap-4 p-2 mb-2">
        <ButtonSecondary className="w-[auto] grow" handleClick={handleCancelDelete}>
          Cancel
        </ButtonSecondary>
        <Button className="w-[auto] grow" handleClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  )
}
