import type { FC, ChangeEvent } from 'react'
import { useState, useId } from 'react'
import { CiEdit } from 'react-icons/ci'
import type { ErrorValuesType } from '../../auth/hooks/useLink'
import type { Link } from '../../store/clonetree/interfaces/interfaces'

interface Props {
  title: string
  changeValues: (evt: ChangeEvent<HTMLInputElement>) => void
  name: string
  updateLink: (link: Link) => void
  errorValues: ErrorValuesType
  valuesLink: Link
}

export const LinkInputEditable: FC<Props> = ({
  title,
  changeValues,
  name,
  updateLink,
  errorValues,
  valuesLink
}) => {
  const [edit, setEdit] = useState(false)
  const id = useId()

  const handleEdit = (): void => {
    setEdit(true)
  }
  const handleCloseEdit = (): void => {
    setEdit(false)
    updateLink(valuesLink)
  }

  return (
    <div className="w-full">
      <p
        className={`flex items-center gap-2 text-[16px] font-medium cursor-pointer ${
          edit ? 'hidden' : ''
        }`}
      >
        {title}
        <button onClick={handleEdit}>
          <label htmlFor={id}>
            <CiEdit size={20} />
          </label>
        </button>
      </p>
      <input
        type="text"
        id={id}
        name={name}
        className={`block w-full border-none outline-none font-medium ${!edit ? 'hidden' : ''}`}
        value={title}
        onBlur={handleCloseEdit}
        onChange={changeValues}
      />
      {errorValues[name] !== '' && (
        <div className="bg-red-600 py-[2px] px-[4px] text-white rounded-sm relative mt-4">
          <div className="w-[0] h-[0] border-b-[10px] border-b-red-600 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent absolute -top-[8px] left-1"></div>
          <p className="text-sm">{errorValues[name]}</p>
        </div>
      )}
    </div>
  )
}
