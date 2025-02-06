import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { generalReducer } from './slices/generalSlice'

const rootReducer = combineReducers({
  general: generalReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']