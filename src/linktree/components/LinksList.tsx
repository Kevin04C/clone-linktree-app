import type { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { LinkItem } from './LinkItem'

export const LinksList: FC = () => {
  const { store } = useStore()
  const { links } = store.cloneTree
  return (
    <section>
      <div className="mt-6 flex flex-col gap-4">
        {links.map((link) => (
          <LinkItem key={link.id} link={link} />
        ))}
      </div>
    </section>
  )
}
