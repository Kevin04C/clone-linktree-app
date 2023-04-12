import { useState, useEffect } from 'react'
interface Props {
  initialText: string
  limit: number
}

export interface ReturnUseLimitWord {
  activeWrite: () => void
  cancelWrite: () => void
  handleText: (newText: string) => void
  write: boolean
  numberOfWord: number
  text: string
  deleteWord: () => void
}

export const useLimitWord = ({ initialText, limit }: Props): ReturnUseLimitWord => {
  const [text, setText] = useState(initialText)
  const [numberOfWord, setNumberOfWord] = useState(0)
  const [write, setWrite] = useState(false)

  const handleText = (newText: string): void => {
    if (numberOfWord < limit) {
      setText(newText)
    }
  }

  useEffect(() => {
    const quantity = text?.length
    setNumberOfWord(quantity)
  }, [text])

  const activeWrite = (): void => {
    setWrite(true)
  }

  const cancelWrite = (): void => {
    setWrite(false)
  }

  const deleteWord = (): void => {
    if (numberOfWord < limit) return
    const state: string = structuredClone(text)
    const newState = state.slice(0, -1)
    setText(newState)
  }

  return {
    activeWrite,
    cancelWrite,
    handleText,
    write,
    numberOfWord,
    text,
    deleteWord
  }
}
