import { createSlice } from '@reduxjs/toolkit'
import type { Header } from './interfaces/interface'
import type { PayloadAction } from '@reduxjs/toolkit'

interface HeaderState {
  headers: Header[]
  loading: boolean
}

const initialState: HeaderState = {
  headers: [],
  loading: false
}

export const headerSlice = createSlice({
  name: 'headerSlice',
  initialState,
  reducers: {
    creatingHeader: (state) => {
      state.loading = true
    },
    addHeader: (state, action: PayloadAction<Header>) => {
      const { payload } = action
      state.headers.splice(0, 0, payload)
      state.loading = false
    },
    setHeaders: (state, action: PayloadAction<Header[]>) => {
      const { payload } = action
      state.headers = payload.reverse()
    },
    updateHeader: (state, action: PayloadAction<Header>) => {
      const { payload } = action
      state.headers = state.headers.map((header) => {
        if (header.id === payload.id) {
          return payload
        }
        return header
      })
    },
    deleteHeader: (state, action: PayloadAction<number>) => {
      const { payload } = action
      state.headers = state.headers.filter((header) => header.id !== payload)
    }
  }
})

export const { creatingHeader, addHeader, setHeaders, deleteHeader, updateHeader } =
  headerSlice.actions
