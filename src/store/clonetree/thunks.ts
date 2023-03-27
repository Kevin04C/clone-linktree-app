import type { LinkRequest } from './interfaces/interfaces'
import type { AppDispatch } from '../store'
import { addingLink, cancelNewLink } from './cloneTreeSlice'
import CloneTreeApi from '../../apis/cloneTreeApi'

export const startAddNewLink = (linkData: LinkRequest) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(addingLink())
      const { data } = await CloneTreeApi.post('/link/add', linkData)
      console.log(data)
      dispatch(cancelNewLink())
    } catch (error) {
      console.log(error)
    }
  }
}
