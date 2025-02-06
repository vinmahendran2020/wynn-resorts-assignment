import React, { ForwardRefRenderFunction, ReactNode, forwardRef, useState } from 'react'
import cn from './utils/classnames'
import { CheckIcon } from '@/icons'
import { UseFormRegister } from 'react-hook-form'

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  id: string
  isError?: boolean
  label?: ReactNode
  labelClassName?: string
  name?: string
  register: UseFormRegister<any>
  required?: boolean
}

const Checkbox = (
  {
    disabled = false,
    id,
    name = 'consent',
    label,
    labelClassName,
    required = true,
    isError,
    register
  }: CheckboxProps
) => {
  const [isChecked, setIsChecked] = useState(false);

  const { onChange, ...registerHandler } = register(name, { required })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked(event.target.checked);
    onChange(event);
  };
  return (
    <div className="relative flex items-center gap-1">
      <div className="relative flex items-center">
        <input
          checked={isChecked}
          className={cn(
            `w-[18px] h-[18px] shrink-0 rounded-sm cursor-pointer appearance-none 
            border-1 hover:disabled:border-1 
            disabled:cursor-not-allowed 
            border-darkgray-40 hover:disabled:border-darkgray-40 
            bg-white disabled:bg-lightgray-80 
            transition-all duration-300 ease-in-out peer`,
            isError
              ? 'border-red-80 hover:border-red-80 checked:bg-red-80 checked:border-red-80 animate-shake'
              : 'hover:border-green-180 hover:border-2 checked:bg-green-180 checked:disabled:bg-lightgray-700 checked:border-green-180 checked:disabled:border-lightgray-700',
          )}
          disabled={disabled}
          id={id}
          {...registerHandler}
          onChange={handleChange}
          type="checkbox"
        />
        <div className="absolute left-[1px] top-[1px] h-4 w-4 text-white pointer-events-none hidden peer-checked:block">
          <CheckIcon />
        </div>
      </div>
      <label
        className={cn(
          'nested-link ml-2 text-regular-b3 ',
          disabled
            ? 'cursor-not-allowed text-lightgray-700'
            : 'cursor-pointer  peer-hover:text-blue hover:text-blue',
          isError ? 'text-red-80 animate-shake hover:text-red-80' : 'text-darkgray',
          labelClassName,
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
