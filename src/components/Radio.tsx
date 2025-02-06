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
  variant = 'small',
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
      />
      <label
        className={cn(
          'ml-2 text-regular-b3 break-words whitespace-break-spaces',
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
