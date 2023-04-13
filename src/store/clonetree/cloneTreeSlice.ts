import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Link } from './interfaces/interfaces'

interface CloneTreeState {
  newLink: boolean
  links: Link[]
  status: 'addingLink' | 'loadingLinks' | null
  activeLink: Link | null
}

const initialState: CloneTreeState = {
  newLink: false,
  links: [],
  status: null,
  activeLink: null
}

export const clonTreeSlice = createSlice({
  name: 'clonTreeSlice',
  initialState,
  reducers: {
    newLink: (state) => {
      state.newLink = true
    },
    cancelNewLink: (state) => {
      state.newLink = false
    },
    addingLink: (state) => {
      state.status = 'addingLink'
    },
    addNewLink: (state, action: PayloadAction<Link>) => {
      const { payload } = action
      state.links.push(payload)
      state.status = null
    },
    setLinks: (state, action: PayloadAction<Link[]>) => {
      const { payload } = action
      state.links = payload
    },
    updateLink: (state, action: PayloadAction<Link>) => {
      const { payload } = action
      state.links = state.links.map((link) => {
        if (Number(link.id) === Number(payload.id)) {
          console.log('entre')
          return payload
        }
        return link
      })
    },
    deleteLink: (state, action: PayloadAction<number>) => {
      const { payload } = action
      state.links = state.links.filter((link) => link.id !== payload)
    }
  }
})

export const { newLink, cancelNewLink, addNewLink, addingLink, setLinks, updateLink, deleteLink } =
  clonTreeSlice.actions
