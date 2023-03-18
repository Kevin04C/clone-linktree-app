import { useRef } from 'react'

type callbackFunction = () => void

type ReturnUseDebounce = (callback: callbackFunction, time: number) => void

export const useDebounce = (): ReturnUseDebounce => {
  const debounceId = useRef<number | null>(null)

  const debounce = (callback: callbackFunction, time: number): void => {
    if (debounceId.current !== null) {
      clearTimeout(debounceId.current)
    }
    const id = setTimeout(() => {
      callback()
    }, time)
    debounceId.current = id
  }

  return debounce
}
