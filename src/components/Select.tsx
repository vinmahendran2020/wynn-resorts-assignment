import React, { SelectHTMLAttributes, forwardRef, useEffect, useState } from 'react'

import cn from './utils/classnames'
import { ChevronDown } from '@/icons'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: any[]
  className?: string
  containerClass?: string
  'data-testid'?: string
  disabled?: boolean
  errorClassName?: string
  errorMessage?: React.ReactNode
  isError?: boolean
  label?: string
  labelClassName?: string
  placeholder?: string
  ref?: any
  type?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className = '',
      containerClass = '',
      disabled,
      errorClassName,
      errorMessage,
      isError,
      label = '',
      labelClassName = '',
      placeholder,
      children,
      onChange,
      value,
      ...props
    },
    ref,
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
        <div className="relative">
          {label ? (
            <label
              className={cn(
                labelClassName,
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
          <select
            className={cn(
              'px-4 py-3 pr-8 text-regular-b2 bg-transparent rounded-lg border-1 border-lightgray-120 appearance-none focus:outline-none focus:border-blue hover:border-blue peer transition-colors',
              isPlaceholder ? 'text-darkgray-30' : 'text-darkgray',
              isError &&
                'text-red-80 border-red-80 focus:border-red-80 placeholder-red-80 hover:border-red-80 animate-shake',
              disabled && 'hover:border-lightgray-120',
              label && 'mt-2',
              className,
            )}
            disabled={disabled}
            name="select"
            onChange={handleChange}
            ref={ref}
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

          <ChevronDown className="absolute w-3 text-icon-terciary right-3 top-11" />
        </div>

        <div
          className={cn('text-red text-regular-b4 mt-1', errorClassName)}
          data-testid={`${props['data-testid']}-error`}
        >
          {isError && errorMessage}
        </div>
      </div>
    )
  },
)

Select.displayName = 'TextField'
export default Select
