import cloneTreeApi from '../../apis/cloneTreeApi'
import type { AppDispatch } from '../store'
import { addHeader, creatingHeader, deleteHeader, setHeaders, updateHeader } from './headerSlice'
import type { Header, HeaderResponse, HeadersResponse } from './interfaces/interface'

export const startGetHeaders = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await cloneTreeApi.get('/header/')
      const { headers } = data as HeadersResponse
      dispatch(setHeaders(headers))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startCreateHeader = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(creatingHeader())
      const { data } = await cloneTreeApi.post('/header/create')
      const { header } = data as HeaderResponse
      dispatch(addHeader(header))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startUpdateHeader = (header: Header) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { id, headline, active } = header
      await cloneTreeApi.put(`/header/${id}`, { headline, active })
      dispatch(updateHeader(header))
    } catch (error) {
      console.log(error)
    }
  }
}

export const startDeleteHeader = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await cloneTreeApi.delete(`/header/${id}`)
      dispatch(deleteHeader(id))
    } catch (error) {
      console.log(error)
    }
  }
}
