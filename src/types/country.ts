import countries from '@/components/utils/countries.json'

type Timezones = {
  [key: string]: string | undefined
}

type IsoCodes = {
  'alpha-2': string
  'alpha-3': string
  numeric: string
}

export type Country = {
  emoji: string
  image: string
  iso: IsoCodes
  name: string
  phone: string[]
  phoneLength: number
  region: string
  timezones: Timezones
}

export type State = {
  code: string
  name: string
}

export type Countries = Country[]
export type States = State[]

export const countriesList = countries as unknown as Countries