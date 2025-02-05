export default interface Breakpoints {
  xs: { min: string, max: string },
  sm: string,
  md: string,
  lg: string,
  xl: string,
  '2xl': string,
  '3xl': string,
  '4xl': string,
}

export enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export interface IFormInput {
  firstName: string
  gender: GenderEnum
}