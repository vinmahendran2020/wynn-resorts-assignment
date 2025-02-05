import React, { InputHTMLAttributes, forwardRef } from 'react'
import { UseFormRegister } from 'react-hook-form'

import cn from './utils/classnames'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  containerClass?: string
  'data-testid'?: string
  disabled?: boolean
  errorClassName?: string
  errorMessage?: React.ReactNode
  isError?: boolean
  label?: string
  labelClassName?: string
  name: string
  pattern?: any
  placeholder?: string
  ref?: any
  register?: UseFormRegister<any>
  required?: boolean
  type?: string
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      autoFocus,
      className = '',
      containerClass = '',
      disabled,
      errorClassName,
      errorMessage,
      labelClassName = '',
      isError,
      label = '',
      title = '',
      placeholder = '',
      type = 'text',
      name = 'text-input',
      register,
      required = false,
      pattern,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn('relative', containerClass)}>
        {title ? <div className="text-medium-b3 p-1">{title}</div> : null}
        {label && (
          <label
            className={cn(
              labelClassName,
              'text-medium-b3 text-darkgray-500 peer-hover:text-blue peer-focus:text-blue transition-colors',
              disabled ? 'text-darkgray-30' : 'text-darkgray-500',
              isError &&
                'text-red-80 peer-focus:text-red-80 peer-[&:not(:placeholder-shown)]:text-red-80 hover:border-red-80 peer-hover:text-red-80',
            )}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          autoFocus={autoFocus}
          className={cn(
            'px-4 py-3 text-regular-b2 text-darkgray placeholder-darkgray-30 placeholder:regular-b4 bg-transparent rounded-lg border-1 border-lightgray-120 appearance-none focus:outline-none focus:border-blue hover:border-blue peer transition-colors',
            isError &&
              'border-red-80 focus:border-red-80 placeholder-red-80 hover:border-red-80 animate-shake',
            disabled && 'hover:border-lightgray-120',
            label && 'mt-1',
            className,
          )}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          ref={ref}
          type={type}
          {...register?.(name, { required, pattern })}
          {...props}
        />
        {isError && errorMessage && (
          <div
            className={cn('text-red text-regular-b4 mt-1', errorClassName)}
            data-testid={`${props['data-testid']}-error`}
          >
            {isError && errorMessage}
          </div>
        )}
      </div>
    )
  },
)

TextField.displayName = 'TextField'
export default TextField
