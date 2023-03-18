import { useAppDispatch, useAppSelector } from '../store/app/hook'
import type { AppDispatch, RootState } from '../store/store'

interface ReturnUseStore {
  dispatch: AppDispatch
  store: RootState
}

export const useStore = (): ReturnUseStore => {
  const dispatch = useAppDispatch()
  const store = useAppSelector((state) => state)

  return {
    dispatch,
    store
  }
}
