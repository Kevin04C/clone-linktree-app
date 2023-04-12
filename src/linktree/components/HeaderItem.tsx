import type { FC } from 'react'
import type { Header } from '../../store/header/interfaces/interface'
import { ButtonDelete } from './ButtonDelete'
import { CiEdit } from 'react-icons/ci'
import { DeleteOptions } from './DeleteOptions'
import { useDelete } from '../hooks/useDelete'
import { LinkSwitch } from './LinkSwitch'
import { useStore } from '../../hooks/useStore'
import { startDeleteHeader } from '../../store/header/thunks'
import { useHeader } from '../hooks/useHeader'

interface Props {
  header: Header
}

export const HeaderItem: FC<Props> = ({ header }) => {
  const { dispatch } = useStore()
  const { id } = header
  const {
    deleteOneWord,
    updateHeader,
    handleChange,
    activeWrite,
    cancelWrite,
    numberOfWord,
    write,
    headline,
    isActive,
    tooggledActive
  } = useHeader({
    header
  })
  const { forDelete, cancelDelete, onTooggledDelete } = useDelete()

  const handleDelete = (): void => {
    dispatch(startDeleteHeader(id))
  }

  return (
    <article className="bg-white rounded-2xl">
      <div className="py-4 px-6 mt-4">
        <div>
          <div className="flex mb-4">
            <div className="mx-auto flex justify-center w-full">
              <label
                className={`mx-auto font-semibold text-gray-500 text-[15px] gap-2 ${
                  write ? 'hidden' : 'flex'
                }`}
                htmlFor="headline"
                onClick={activeWrite}
              >
                <p className="text-center">
                  {numberOfWord === 0 ? 'Headline Title' : <>{headline}</>}
                </p>{' '}
                <CiEdit size={20} />
              </label>

              <input
                type="text"
                className={`w-full text-center ${write ? 'block' : 'hidden'} outline-none`}
                onBlur={() => {
                  cancelWrite()
                  updateHeader()
                }}
                value={headline}
                onChange={handleChange}
                id="headline"
                onKeyDown={deleteOneWord}
              />
            </div>

            <LinkSwitch active={isActive} toggleSwicth={tooggledActive} />
          </div>
          <div>
            <span className="text-sm font-medium text-slate-700">{numberOfWord}/35</span>
          </div>
          <div className="flex justify-end">
            <ButtonDelete isActive={forDelete} onCLick={onTooggledDelete} />
          </div>
        </div>
      </div>
      <DeleteOptions
        handleCancelDelete={cancelDelete}
        handleDelete={handleDelete}
        isActive={forDelete}
      />
    </article>
  )
}
