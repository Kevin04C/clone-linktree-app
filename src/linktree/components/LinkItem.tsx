import type { FC } from 'react'
import type { Link } from '../../store/clonetree/interfaces/interfaces'
import { AiOutlineDelete } from 'react-icons/ai'
import { LinkSwitch } from './LinkSwitch'
import { LinkInputEditable } from './LinkInputEditable'
import { useLink } from '../../auth/hooks/useLink'
import { useStore } from '../../hooks/useStore'
import { DeleteOptions } from './DeleteOptions'
import { startDeleteLink } from '../../store/clonetree/thunks'
import { useDelete } from '../hooks/useDelete'

interface Props {
  link: Link
}

export const LinkItem: FC<Props> = ({ link }) => {
  const { dispatch } = useStore()
  const { valuesLink, updateLink, toggleActive, changeValues, errorValues } = useLink({
    ...link
  })
  const { forDelete, onTooggledDelete, cancelDelete } = useDelete()

  const handleDelete = (): void => {
    const { id } = link
    dispatch(startDeleteLink(id))
  }

  const { title, url, active } = valuesLink

  return (
    <article className="bg-white w-full rounded-2xl shadow-sm">
      <div className="py-4 px-6">
        <div className="flex justify-between items-center">
          <div>
            <div className="mb-1">
              <LinkInputEditable
                title={title}
                changeValues={changeValues}
                name="title"
                updateLink={updateLink}
                errorValues={errorValues}
                valuesLink={valuesLink}
              />
            </div>
            <div>
              <LinkInputEditable
                title={url}
                changeValues={changeValues}
                name="url"
                updateLink={updateLink}
                errorValues={errorValues}
                valuesLink={valuesLink}
              />
            </div>
          </div>
          <LinkSwitch active={active} toggleSwicth={toggleActive} />
        </div>
        <div className="flex justify-end mt-3">
          <button
            className={`p-1 rounded-md ${
              forDelete ? 'bg-purple-800 text-white hover:bg-purple-900' : 'text-slate-400'
            }`}
            onClick={onTooggledDelete}
          >
            <AiOutlineDelete size={20} className="text-inherit" />
          </button>
        </div>
      </div>
      <DeleteOptions
        isActive={forDelete}
        handleDelete={handleDelete}
        handleCancelDelete={cancelDelete}
      />
    </article>
  )
}
