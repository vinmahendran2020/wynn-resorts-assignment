import { FC, useState } from 'react'

import Image from 'next/image'
import { countriesList, Country } from '@/types/country'
import Row from './Row'
import Dropdown from './Dropdown'
import cn from './utils/classnames'
import Panel from './Panel'
import TextField from './TextField'

export const DEFAULT_COUNTRY_NAME = /United States/i

interface DialCodeSelectorProps {
  className?: string
  onChange?: (data: Country) => void
}

const DialCodeSelector: FC<DialCodeSelectorProps> = ({ onChange, className }) => {

  const selectedCountry = countriesList.find((item) => DEFAULT_COUNTRY_NAME.test(item.name))
  const [selected, setSelected] = useState<Country>(selectedCountry || countriesList[0])
  const [searchQuery, setSearchQuery] = useState('')

  const onClick = (data: Country) => {
    setSelected(data)
    onChange?.(data)
  }

  const filteredCountries = countriesList.filter((item) => {
    const query = searchQuery?.toLowerCase()
    return (
      item?.name?.toLowerCase()?.includes(query) ||
      item?.phone?.some((phone) => phone.includes(query))
    )
  })

  const items = filteredCountries.length > 0 ? filteredCountries : countriesList
  const options = items.map((item, index) => {
    const { image, name, phone } = item
    return (
      <Row
        className="py-2 px-3 cursor-pointer hover:bg-lightgray-80 rounded-lg gap-2 items-center"
        key={index}
        onClick={() => onClick(item)}
      >
        <Row className="w-full text-start items-center gap-2">
          <Image alt="falg" height={15} src={image} width={20} />
          <div className="text-left">
            <span className="text-darkgray-60">{name}</span>
            <span className="text-darkgray-60">{phone?.[0]}</span>
          </div>
        </Row>
      </Row>
    )
  })

  return (
    <div className={cn('relative w-max', className)}>
      <Dropdown
        className="w-max max-h-80 overflow-y-scroll border-1 shadow-lg rounded-lg scrollbar-hide"
        disabled={false}
        onClose={() => setSearchQuery('')}
      >
        <Row className="w-max py-2 px-3 mt-1 h-[37px] gap-2 items-center justify-between border-1 border-lightgray-120 focus:border-blue hover:border-blue transition-colors rounded-lg cursor-pointer">
          <Image alt="falg" height={15} src={selected.image} width={20} />
          <div className="text-regular-b2 text-darkgray">{selected.phone?.[0]}</div>
        </Row>
        <Panel className="max-w-xs sm:w-full max-h-52 rounded-lg overflow-hidden overflow-y-scroll">
          <TextField
            className="w-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={'Search'}
            type="text"
            name="countryCode"
            value={searchQuery}
          />
          {options}
        </Panel>
      </Dropdown>
    </div>
  )
}
export default DialCodeSelector
