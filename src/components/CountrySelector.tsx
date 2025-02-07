import Image from 'next/image'
import { FC, useRef, useState } from 'react'

import useOutsideClick from '@/hooks/useOutsideEvent'
import { ChevronDown } from '@/icons'
import { countriesList } from '@/types/country'
import { UseFormRegister } from 'react-hook-form'
import Panel from './Panel'
import Row from './Row'
import TextField from './TextField'
import cn from './utils/classnames'

interface CountrySelectorProps {
  className?: string
  register?: UseFormRegister<any>
  isError?: boolean
}

const CountrySelector: FC<CountrySelectorProps> = ({
  className,
  register,
  isError
}) => {
  const [selected, setSelected] = useState<string>()
  const [openDropDown, setOpenDropdown] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const filteredCountries = countriesList.filter((item) => {
    const query = selected?.toLowerCase() || ''
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
        className="py-2 px-3 cursor-pointer hover:bg-lightgray-80 rounded-sm gap-2 items-center"
        key={index}
        onClick={() => setSelected(item.name)}
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

  useOutsideClick({
    handler: () => setOpenDropdown(false),
    ref,
  })

  return (
    <div ref={ref} className={cn('relative w-full', className)}>
      <TextField
        className="w-full"
        onChange={(e) => setSelected(e.target.value)}
        label={'Your Residence Country'}
        placeholder={'Select residence country...'}
        type="text"
        name="countryName"
        isError={isError}
        register={register}
        required={true}
        onClick={() => setOpenDropdown(true)}
        value={selected}
      />
      <ChevronDown className="absolute right-2 bottom-1/4 translate-y-1/4" />
      <div
        className={cn(
          'absolute z-50 w-full',
          openDropDown
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-95 opacity-0 pointer-events-none',
          className,
        )}
        onClick={() => setOpenDropdown(false)}
      >
        <Panel className="w-full max-h-52 rounded-sm overflow-hidden overflow-y-scroll">
          {options}
        </Panel>
      </div>
    </div>
  )
}
export default CountrySelector
