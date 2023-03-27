import type { FC } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useStore } from '../../hooks/useStore'
import { cancelNewLink } from '../../store/clonetree/cloneTreeSlice'
import { Button } from '../../ui/Button'
import { useFormik } from 'formik'
import { validationNewLinkForm } from '../validations/newLinkValidations'
import { formatTitleUrl } from '../utils/formatTitleURL'
import { startAddNewLink } from '../../store/clonetree/thunks'
import { ClipLoader } from 'react-spinners'

interface NewLinkState {
  url: string
}

const initialValues: NewLinkState = {
  url: ''
}

export const NewLinkForm: FC = () => {
  const { dispatch, store } = useStore()
  const { status } = store.cloneTree
  console.log(status)

  const onSubmit = (data: NewLinkState): void => {
    const { url } = data
    const title = formatTitleUrl(url)
    dispatch(
      startAddNewLink({
        title,
        url
      })
    )
  }

  const { values, handleSubmit, handleChange, isValid } = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validationNewLinkForm,
    initialErrors: initialValues
  })

  const { url } = values
  const handleClose = (): void => {
    dispatch(cancelNewLink())
  }

  return (
    <div className="w-full rounded-2xl bg-white px-6 py-6 animate__animated animate__fadeInUp animate__faster">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Enter URL</h4>
        <button onClick={handleClose}>
          <IoCloseSharp size={20} />
        </button>
      </div>
      <form className="flex mt-5 gap-2 item-center md:gap-6" onSubmit={handleSubmit}>
        <div className="grow">
          <input
            type="text"
            placeholder="URL"
            className="w-full h-full bg-input rounded-md px-3 py-2"
            name="url"
            onChange={handleChange}
            value={url}
            autoComplete="off"
          />
        </div>
        <Button type="submit" className="p-1 basis-[90px]" disabled={!isValid}>
          {status === 'addingLink' ? <ClipLoader size={25} color="#fff" /> : 'Add'}
        </Button>
      </form>
    </div>
  )
}
