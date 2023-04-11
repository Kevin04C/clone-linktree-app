import type { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import type { Link } from '../../store/clonetree/interfaces/interfaces'
import type { ValidationError } from 'yup'
import { validationUseLink } from '../validations/validationUseLink'
import { useStore } from '../../hooks/useStore'
import { startUpdateLink } from '../../store/clonetree/thunks'

interface Props extends Link {}

export type ErrorValuesType = Record<keyof Omit<Link, 'id'>, string>

interface ReturnUseLink {
  valuesLink: Link
  setValuesLink: (newValues: Link) => void
  updateLink: (link: Link) => void
  toggleActive: () => void
  changeValues: (evt: ChangeEvent<HTMLInputElement>) => void
  errorValues: ErrorValuesType
  error: boolean
}

export const useLink = ({ id, title, url, active }: Props): ReturnUseLink => {
  const { dispatch } = useStore()
  const [valuesLink, setValuesLink] = useState<Link>({ id, title, url, active })
  const [error, setError] = useState(false)
  const [errorValues, setErrorValues] = useState<ErrorValuesType>({
    url: '',
    active: '',
    title: ''
  })

  const validationValues = async (): Promise<void> => {
    try {
      await validationUseLink.validate(valuesLink)
      setError(false)
      setErrorValues({ url: '', active: '', title: '' })
    } catch (error) {
      setError(true)
      const { path, message } = error as ValidationError
      setErrorValues({
        ...errorValues,
        [path as string]: message
      })
    }
  }

  useEffect(() => {
    validationValues()
  }, [valuesLink])

  useEffect(() => {
    updateLink(valuesLink)
  }, [valuesLink.active])

  const toggleActive = (): void => {
    const newState: Link = {
      ...valuesLink,
      active: valuesLink.active === 0 ? 1 : 0
    }
    setValuesLink(newState)
  }

  const updateLink = (link: Link): void => {
    if (!error) {
      const { id, title, url, active } = link
      dispatch(startUpdateLink(id, { title, url, active }))
    }
  }

  const changeValues = (evt: ChangeEvent<HTMLInputElement>): void => {
    const name = evt.target.name
    const value = evt.target.value

    setValuesLink({
      ...valuesLink,
      [name]: value
    })
  }

  return {
    valuesLink,
    setValuesLink,
    updateLink,
    toggleActive,
    changeValues,
    errorValues,
    error
  }
}
