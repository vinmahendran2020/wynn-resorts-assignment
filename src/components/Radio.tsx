import React, { ChangeEvent, ReactNode } from 'react'
import cn from './utils/classnames'

interface RadioProps {
  checked?: boolean
  disabled?: boolean
  id: string
  label: ReactNode
  name?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  variant?: 'big' | 'small'
}

const Radio: React.FC<RadioProps> = ({
  checked,
  disabled = false,
  id,
  label,
  name,
  onChange,
}) => {
  const onCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    onChange?.(e)
  }

  return (
    <div className='flex items-center'>
      <input
        checked={checked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={onCheck}
        type="radio"
        className='appearance-none w-[16px] h-[16px] border-2 border-green-180 rounded-2xl outline-none  checked:bg-green-180'
      />
      <label
        className={cn(
          'ml-2 text-regular-b1 sm:text-medium-b2 break-words whitespace-break-spaces',
          disabled
            ? 'cursor-not-allowed text-darkgray-40'
            : 'cursor-pointer text-black peer-hover:text-blue hover:text-blue',
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  )
}

export default Radio
