import type { FC } from 'react'
import { Button } from '../../ui/Button'
import { IoAdd } from 'react-icons/io5'
import { useStore } from '../../hooks/useStore'
import { newLink } from '../../store/clonetree/cloneTree'

export const AddNewLink: FC = () => {
  const { dispatch } = useStore()

  const handleNewLink = (): void => {
    dispatch(newLink())
  }

  return (
    <Button
      className="flex justify-center items-center gap-1 animate__animated animate__fadeInUp animate__faster"
      handleClick={handleNewLink}
    >
      <IoAdd size={25} />
      Add Link
    </Button>
  )
}
