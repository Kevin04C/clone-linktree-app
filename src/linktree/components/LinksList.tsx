import type { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { LinkItem } from './LinkItem'

export const LinksList: FC = () => {
  const { store } = useStore()
  const { links } = store.cloneTree
  return (
    <section className="mt-6">
      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>
    </section>
  )
}
