import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GeneralState = {
  show: boolean
  props: Record<string, any>
}

const initialState: GeneralState = {
  show: false,
  props: {}
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setToast: (state, action: PayloadAction<GeneralState>) => {
      state.show = action.payload.show
      state.props = action.payload.props
    },
    clearToast: (state) => {
      state.show = false
      state.props = {}
    }
  }
})

export const { setToast, clearToast } = generalSlice.actions

export const generalReducer = generalSlice.reducer
