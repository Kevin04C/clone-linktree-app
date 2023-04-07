import type { FC } from 'react'
import { PhonePreview } from '../components/PhonePreview'
import { AddNewLink } from '../components/AddNewLink'
import { useStore } from '../../hooks/useStore'
import { NewLinkForm } from '../views/NewLinkForm'
import { LinksList } from '../components/LinksList'

export const HomePage: FC = () => {
  const { store } = useStore()
  const { newLink } = store.cloneTree
  return (
    <section className="mt-2 md:mt-10 relative flex w-full md:gap-8 lg:gap-0">
      <div className="w-full md:max-w-[640px] md:mx-auto">
        <div className="px-4 md:px-0 mt-8">
          {newLink ? <NewLinkForm /> : <AddNewLink />}
          <LinksList />
        </div>
      </div>
      <div className="hidden md:w-2/6 md:grid md:place-content-center">
        <PhonePreview />
      </div>
    </section>
  )
}
