import type { FC } from 'react'
import { ButtonPopupUser } from './ButtonPopupUser'
import { RiAccountBoxLine } from 'react-icons/ri'

export const ButtonMyAccount: FC = () => {
  return <ButtonPopupUser icon={<RiAccountBoxLine size={20} />} title="Account" to="#" />
}
