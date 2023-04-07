import type { Link, LinkRequest, LinkResponse, LinksUser } from './interfaces/interfaces'
import type { AppDispatch } from '../store'
import {
  addNewLink,
  addingLink,
  cancelNewLink,
  deleteLink,
  setLinks,
  updateLink
} from './cloneTreeSlice'
import CloneTreeApi from '../../apis/cloneTreeApi'

// type StateFunctionType = () => RootState

export const startAddNewLink = (linkData: LinkRequest) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(addingLink())
      const data = (await CloneTreeApi.post('/link/add', linkData)).data as LinkResponse
      dispatch(addNewLink(data.link))
      dispatch(cancelNewLink())
    } catch (error) {
      console.log(error)
    }
  }
}

export const startGetLinks = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const data: LinksUser = (await CloneTreeApi.get('/link/')).data
      dispatch(setLinks(data.links))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startUpdateLink = (id: number, linkValues: Omit<Link, 'id'>) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { link } = (await CloneTreeApi.put(`/link/${id}`, linkValues)).data as LinkResponse
      dispatch(updateLink(link))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeleteLink = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await CloneTreeApi.delete(`/link/${id}`)
      dispatch(deleteLink(id))
    } catch (error) {
      console.log(error)
    }
  }
}
