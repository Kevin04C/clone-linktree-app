import { useState } from 'react'

export const useDelete = () => {
  const [forDelete, setForDelete] = useState(false)

  const onTooggledDelete = (): void => {
    setForDelete(!forDelete)
  }

  const activeDelete = (): void => {
    setForDelete(true)
  }

  const cancelDelete = (): void => {
    setForDelete(false)
  }

  return {
    forDelete,
    onTooggledDelete,
    activeDelete,
    cancelDelete
  }
}
