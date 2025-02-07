import React, { InputHTMLAttributes } from 'react'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form'

import { IFormInput } from '@/types'
import DialCodeSelector from './CountryCodeDropDown'
import Row from './Row'
import cn from './utils/classnames'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  containerClass?: string
  'data-testid'?: string
  disabled?: boolean
  errorMessage?: React.ReactNode
  isError?: boolean
  label?: string
  name?: string
  pattern?: any
  placeholder?: string
  ref?: any
  register: UseFormRegister<any>
  required?: boolean
  type?: string
  setValue: UseFormSetValue<IFormInput>
}

const PhoneField = (
  {
    className = '',
    disabled,
    errorMessage,
    isError,
    label = 'Phone Number',
    title = '',
    placeholder = '',
    name = 'phoneNumber',
    register,
    required = true,
    type = "tel",
    setValue,
    ...props
  }: FieldProps
) => {

  const { onChange, ...registerHandler } = register(name, { required, minLength: 10 })
  return (
    <div>
      {title ? <div className="text-medium-b3 p-1">{title}</div> : null}
      {label && (
        <label
          className={cn(
            'text-medium-b3 text-darkgray-500 peer-hover:text-blue peer-focus:text-blue transition-colors',
            disabled ? 'text-darkgray-30' : 'text-darkgray-500',
            isError &&
            'text-red-80 peer-focus:text-red-80 peer-[&:not(:placeholder-shown)]:text-red-80 hover:border-red-80 peer-hover:text-red-80',
          )}
          htmlFor={name}
        >
          {label}{required && <sup className='pl-1'>*</sup>}
        </label>
      )}
      <Row
        className={cn(
          'bg-white px-4 py-3 text-regular-b2 text-darkgray rounded-sm border-1 border-lightgray-120 appearance-none focus:outline-none focus:border-blue hover:border-blue peer transition-colors',
          isError && 'border-red-80 focus:border-red-80 placeholder-red-80 hover:border-red-80 animate-shake',
          disabled && 'hover:border-lightgray-120',
          label && 'mt-1',
          className,
        )}>
        <DialCodeSelector setValue={setValue}/>
        <input
          className={'ml-4 placeholder-darkgray-30 placeholder:regular-b4 bg-transparent appearance-none focus:outline-none'}
          disabled={disabled}
          placeholder={placeholder}
          type={type}
          inputMode="numeric"
          onChange={(event) => {
            const numericValue = event.target.value.replace(/\D/g, '');
            event.target.value = numericValue;
            onChange({ target: { value: numericValue } });
          }}
          {...registerHandler}
          {...props}
        />
      </Row>
      {isError && errorMessage && (
        <div
          className={'text-red text-regular-b4 mt-1'}
          data-testid={`${props['data-testid']}-error`}
        >
          {isError && errorMessage}
        </div>
      )}
    </div>
  )
}

export default PhoneField
