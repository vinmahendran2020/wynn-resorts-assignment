import { userI } from "@/types/users"
import axios from "axios"

const BASE_URL = 'http://localhost:3000'
const REGISTER_USER = '/api/registration'

export const postUserRegistration = async (formData: userI) => {

  try {
    const response = await axios.post(`${BASE_URL}${REGISTER_USER}`, formData, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
    return response.data
  } catch (err) {
    throw new Error(err.message)
  }
}