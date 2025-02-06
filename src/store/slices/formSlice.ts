import storage from '@/storage'
import { GenderEnum, IFormInput } from '@/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Omit<IFormInput, 'consent'> = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryName: '',
  gender: GenderEnum.male,
  countryCode: '',
  otpMethod: '',
}

const formSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IFormInput>) => {
      storage.sessionStore.set('registration', JSON.stringify(action.payload))
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.phoneNumber = action.payload.phoneNumber
      state.countryName = action.payload.countryName
      state.gender = action.payload.gender
      state.countryCode = action.payload.countryCode
    },
    setOtpMethod: (state, action: PayloadAction<string>) => {
      state.otpMethod = action.payload
    }
  }
})

export const { setFormData, setOtpMethod } = formSlice.actions

export const formReducer = formSlice.reducer
