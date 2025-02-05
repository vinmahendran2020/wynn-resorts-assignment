import { FC, useState } from 'react'
import Image from 'next/image'

import Dropdown from './Dropdown'
import Row from './Row'
import Panel from './Panel'
import TextField from './TextField'
import cn from './utils/classnames'
import { countriesList, Country } from '@/types/country'

interface CountrySelectorProps {
  className?: string
  onChange?: (data: Country) => void
}

const CountrySelector: FC<CountrySelectorProps> = ({
  onChange,
  className,
}) => {
  const [selected, setSelected] = useState<Country>()
  const [searchQuery, setSearchQuery] = useState('')
  const [closeDropdown, setCloseDropdown] = useState(false)
  const onClick = (data: Country) => {
    setSelected(data)
    onChange?.(data)
    setCloseDropdown(true)
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
    const { image, name } = item
    return (
      <Row
        className="py-2 px-3 cursor-pointer hover:bg-lightgray-80 rounded-lg gap-2 items-center"
        key={index}
        onClick={() => onClick(item)}
      >
        <Row className="w-full text-start items-center gap-2">
          <Image alt="falg" height={15} src={image} width={20} />
          <div className="text-left">
            <span className="text-darkgray">{name}</span>
          </div>
        </Row>
      </Row>
    )
  })

  return (
    <div className={cn('relative w-max', className)}>
      <Dropdown
        className="w-max max-h-80 overflow-y-scroll border-1 shadow-lg rounded-lg scrollbar-hide"
        closeOnClick={closeDropdown}
        disabled={false}
        onClose={() => {
          setSearchQuery('')
          setCloseDropdown(false)
        }}
      >
        <Panel className="max-w-xs sm:w-full max-h-52 rounded-lg overflow-hidden overflow-y-scroll">
          <TextField
            className="w-full"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={'Search'}
            type="text"
            name='countryName'
            value={searchQuery}
          />
          {options}
        </Panel>
      </Dropdown>
    </div>
  )
}
export default CountrySelector
