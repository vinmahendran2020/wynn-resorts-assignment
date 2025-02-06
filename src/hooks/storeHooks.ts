import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppStore, RootState } from '../store/store'

export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()

export const useGeneralState = () => useAppSelector((state) => state.general)
export const useFormState = () => useAppSelector((state) => state.form)
