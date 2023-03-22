import { createSlice } from '@reduxjs/toolkit'

interface UiState {
  showPopupUser: boolean
}

const initialState: UiState = {
  showPopupUser: false
}

export const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    toggled: (state) => {
      state.showPopupUser = !state.showPopupUser
    }
  }
})

export const { toggled } = uiSlice.actions
