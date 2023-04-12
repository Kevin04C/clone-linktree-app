import type { FC } from 'react'
import { useStore } from '../../hooks/useStore'
import { HeaderItem } from './HeaderItem'

export const HeaderList: FC = () => {
  const { store } = useStore()
  const { headers } = store.headers
  return (
    <section className="mt-6">
      <ul className="flex flex-col gap-4">
        {headers?.map((header) => (
          <HeaderItem key={header.id} header={header} />
        ))}
      </ul>
    </section>
  )
}
