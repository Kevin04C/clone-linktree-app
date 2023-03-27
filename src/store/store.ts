import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { uiSlice } from './ui/uiSlice'
import { clonTreeSlice } from './clonetree/cloneTreeSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cloneTree: clonTreeSlice.reducer,
    ui: uiSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
