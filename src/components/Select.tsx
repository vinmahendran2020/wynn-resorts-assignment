import React, { SelectHTMLAttributes, useEffect, useState } from 'react'

import { ChevronDown } from '@/icons'
import cn from './utils/classnames'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: any[]
  className?: string
  containerClass?: string
  'data-testid'?: string
  disabled?: boolean
  errorMessage?: React.ReactNode
  isError?: boolean
  label?: string
  placeholder?: string
  type?: string
}

const Select = ({
      className = '',
      containerClass = '',
      disabled,
      errorMessage,
      isError,
      label = '',
      placeholder,
      children,
      onChange,
      value,
      ...props
    }: SelectProps
  ) => {
    const [isPlaceholder, setIsPlaceholder] = useState(!value)

    useEffect(() => {
      setIsPlaceholder(!value)
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value) setIsPlaceholder(false)
      onChange?.(e)
    }

    const options = children?.map((item) => {
      const props = item.props
      return { ...item, props: { ...props, className: cn('text-darkgray', props.className) } }
    })

    return (
      <div className={cn(containerClass)}>
        <div>
          {label ? (
            <label
              className={cn(
                'text-medium-b3 text-darkgray-500 peer-hover:text-blue peer-focus:text-blue transition-colors',
                disabled ? 'text-darkgray-30' : 'text-darkgray-500',
                isError &&
                'text-red-80 peer-focus:text-red-80 peer-[&:not(:placeholder-shown)]:text-red-80 hover:border-red-80',
              )}
              htmlFor="select"
            >
              {label}
            </label>
          ) : null}
          <div className={`relative ${label && 'mt-2'}`}>
            <select
              className={cn(
                'px-4 py-3 pr-8 text-regular-b2 bg-transparent rounded-sm border-1 border-lightgray-120 appearance-none focus:outline-none focus:border-blue hover:border-blue peer transition-colors',
                isPlaceholder ? 'text-darkgray-30' : 'text-darkgray',
                isError &&
                'text-red-80 border-red-80 focus:border-red-80 placeholder-red-80 hover:border-red-80 animate-shake',
                disabled && 'hover:border-lightgray-120',
                className,
              )}
              disabled={disabled}
              name="select"
              onChange={handleChange}
              value={value}
              {...props}
            >
              {placeholder && (
                <option className="hidden" value="">
                  {placeholder}
                </option>
              )}
              {options}
            </select>
          <ChevronDown className="absolute bottom-1/2 translate-y-1/2 right-2" />
          </div>
        </div>

        <div
          className={cn('text-red text-regular-b4 mt-1')}
          data-testid={`${props['data-testid']}-error`}
        >
          {isError && errorMessage}
        </div>
      </div>
    )
  }

export default Select
