import { useLayoutEffect, useState, useRef } from 'react'
import type { MutableRefObject } from 'react'

interface ReturnUseSeePassword {
  seePassword: boolean
  handleSeePassword: () => void
  inputPasswordRef: MutableRefObject<HTMLInputElement | null>
}

export const useSeePassword = (): ReturnUseSeePassword => {
  const [seePassword, setSeePassword] = useState(false)
  const inputPasswordRef = useRef<HTMLInputElement | null>(null)
  const [firstRender, setFirstRender] = useState(true)

  const handleSeePassword = (): void => {
    setSeePassword(!seePassword)
  }

  useLayoutEffect(() => {
    if (firstRender) {
      setFirstRender(false)
      return
    }
    if (!seePassword) {
      inputPasswordRef.current?.setAttribute('type', 'password')
      return
    }
    inputPasswordRef.current?.setAttribute('type', 'text')
  }, [seePassword])

  return {
    inputPasswordRef,
    seePassword,
    handleSeePassword
  }
}
