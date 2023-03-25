import type { FC } from 'react'
import { ButtonPopupUser } from '../components/ButtonPopupUser'
import { RiAccountBoxLine } from 'react-icons/ri'
import { ButtonLogout } from '../components/ButtonLogout'

export const MorePage: FC = () => {
  return (
    <section className="p-2">
      <div>
        <h4 className="mb-4">Account</h4>
        <div className="bg-white rounded-xl">
          <ButtonPopupUser icon={<RiAccountBoxLine size={20} />} title="Account" to="#" />
        </div>
        <div className="bg-white rounded-xl mt-4">
          <ButtonLogout />
        </div>
      </div>
    </section>
  )
}
