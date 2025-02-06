import { FC, useEffect, useRef, useState } from 'react'

import useOutsideClick from '@/hooks/useOutsideEvent'
import { ChevronDown } from '@/icons'
import { IFormInput } from '@/types'
import { countriesList, Country } from '@/types/country'
import Image from 'next/image'
import { UseFormSetValue } from 'react-hook-form'
import Panel from './Panel'
import Row from './Row'
import TextField from './TextField'
import cn from './utils/classnames'

export const DEFAULT_COUNTRY_NAME = /United States/i

interface DialCodeSelectorProps {
  className?: string
  setValue: UseFormSetValue<IFormInput>
}

const DialCodeSelector: FC<DialCodeSelectorProps> = ({ className, setValue }) => {

  const selectedCountry = countriesList.find((item) => DEFAULT_COUNTRY_NAME.test(item.name))
  const [selected, setSelected] = useState<Country>(selectedCountry || countriesList[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropDown, setOpenDropdown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setValue('countryCode', selected.phone?.[0])
  }, [selected])

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
        className="py-2 px-3 cursor-pointer hover:bg-lightgray-80 rounded-sm gap-2 items-center"
        key={index}
        onClick={() => setSelected(item)}
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

  useOutsideClick({
    handler: () => setOpenDropdown(false),
    ref,
  })

  return (
    <div className={cn('relative w-max', className)} onClick={() => setOpenDropdown((prev) => !prev)} ref={ref}>
      <Row className="w-max gap-2 items-center justify-between transition-colors rounded-sm cursor-pointer">
        <Image alt="falg" width={25} height={25} src={selected.image}  />
        <ChevronDown />
        <div
          className="text-regular-b2 text-darkgray">{selected.phone?.[0]}</div>
      </Row>
      <div
        className={cn(
          'absolute z-50 w-96',
          openDropDown ? 'scale-100 opacity-100 pointer-events-auto' : 'hidden',
          className,
        )}
        onClick={(e) => {
          e.stopPropagation()
          setOpenDropdown(false)
        }}
      >
        <Panel className="max-w-xs sm:w-full max-h-52 rounded-sm overflow-hidden overflow-y-scroll">
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
      </div>
    </div>
  )
}
export default DialCodeSelector
