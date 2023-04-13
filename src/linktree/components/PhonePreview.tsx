import type { FC } from 'react'
import { useMemo } from 'react'
import { useStore } from '../../hooks/useStore'
import type { User } from '../../store/auth/interfaces/interfaces'
import { PhoneLink } from './PhoneLink'
import { PhoneHeader } from './PhoneHeader'

export const PhonePreview: FC = () => {
  const { store } = useStore()
  const { photo_url: photoUrl, username } = store.auth.user as User
  const { links } = store.cloneTree
  const { headers } = store.headers

  const linksActive = useMemo(() => links.filter((link) => link.active === 1), [links])
  const headersActive = useMemo(() => headers.filter((header) => header.active === 1), [headers])

  return (
    <div className="overflow-hidden rounded-[40px]">
      <div className="w-[250px] aspect-[9/16] overflow-y-scroll border-[5px] border-black bg-neutral-900 text-white  scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900 scrollbar-rounded-md">
        <div className="p-2 mt-4">
          <div className="w-full flex flex-col items-center">
            <img src={photoUrl} alt={username} className="w-14 rounded-full" />
            <h3 className="mt-3 font-bold text-[14px]">@{username}</h3>
          </div>
          <section className="w-full mt-6 flex flex-col gap-4 mb-2">
            {headersActive.map(({ id, headline }) => (
              <PhoneHeader key={id} headline={headline} />
            ))}
          </section>
          <section className="flex flex-col gap-2">
            {linksActive.map(({ id, title, url }) => (
              <PhoneLink key={id} title={title} url={url} />
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
