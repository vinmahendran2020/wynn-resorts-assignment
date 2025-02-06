import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { generalReducer } from './slices/generalSlice'
import { registrationApi } from '@/services/registrationApi'
import { formReducer } from './slices/formSlice'

const rootReducer = combineReducers({
  general: generalReducer,
  form: formReducer,
  [registrationApi.reducerPath]: registrationApi.reducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(registrationApi.middleware),
    devTools: true
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']