import type { ChangeEvent, KeyboardEvent } from 'react'
import type { Header } from '../../store/header/interfaces/interface'
import { useStore } from '../../hooks/useStore'
import { startUpdateHeader } from '../../store/header/thunks'
import { useLimitWord } from './useLimitWord'
import { useState, useEffect } from 'react'

interface Props {
  header: Header
}
interface ReturnUseHeader {
  headline: string
  numberOfWord: number
  write: boolean
  activeWrite: () => void
  cancelWrite: () => void
  deleteOneWord: (evt: KeyboardEvent<HTMLInputElement>) => void
  updateHeader: () => void
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void
  tooggledActive: () => void
  isActive: 0 | 1
}

export const useHeader = ({ header }: Props): ReturnUseHeader => {
  const { dispatch } = useStore()
  const { id, headline: textHeadline, active } = header
  const [isActive, setIsActive] = useState(active)
  const { write, activeWrite, cancelWrite, text, handleText, numberOfWord, deleteWord } =
    useLimitWord({
      initialText: textHeadline ?? '',
      limit: 35
    })

  const handleChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const newText = evt.target.value
    handleText(newText)
  }

  useEffect(() => {
    dispatch(startUpdateHeader({ id, headline: text, active: isActive }))
  }, [isActive])

  useEffect(() => {
    if (numberOfWord === 0) {
      setIsActive(0)
      dispatch(startUpdateHeader({ id, headline: text, active: 0 }))
    }
  }, [numberOfWord])

  const updateHeader = (): void => {
    dispatch(startUpdateHeader({ id, headline: text, active }))
  }

  const deleteOneWord = (evt: KeyboardEvent<HTMLInputElement>): void => {
    const { key } = evt
    if (key === 'Backspace') {
      deleteWord()
    }
  }
  const tooggledActive = (): void => {
    if (numberOfWord === 0) return
    setIsActive(isActive === 0 ? 1 : 0)
  }

  return {
    handleChange,
    headline: text,
    numberOfWord,
    write,
    activeWrite,
    cancelWrite,
    deleteOneWord,
    updateHeader,
    tooggledActive,
    isActive
  }
}
