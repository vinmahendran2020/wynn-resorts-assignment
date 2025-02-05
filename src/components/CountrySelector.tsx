import Image from 'next/image'
import { FC, useRef, useState } from 'react'

import { countriesList, Country } from '@/types/country'
import Panel from './Panel'
import Row from './Row'
import TextField from './TextField'
import cn from './utils/classnames'
import useOutsideClick from '@/hooks/useOutsideEvent'

interface CountrySelectorProps {
  className?: string
  onChange?: (data: Country) => void
}

const CountrySelector: FC<CountrySelectorProps> = ({
  className,
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
        className="py-2 px-3 cursor-pointer hover:bg-lightgray-80 rounded-lg gap-2 items-center"
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
        name='countryName'
        onClick={() => setOpenDropdown(true)}
        value={selected}
      />
      <div
        className={cn(
          'absolute z-50 w-full',
          openDropDown
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-95 opacity-0 pointer-events-none',
          'transition-opacity ease-in-out duration-300',
          className,
        )}
        onClick={() => setOpenDropdown(false)}
      >
        <Panel className="w-full max-h-52 rounded-lg overflow-hidden overflow-y-scroll">
          {options}
        </Panel>
      </div>
    </div>
  )
}
export default CountrySelector
