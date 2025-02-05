import { Country } from '@/types/country'
import { ChangeEvent, FC, ReactNode } from 'react'
import DialCodeSelector from './CountryCodeDropDown'
import TextField from './TextField'
import { UseFormRegister } from 'react-hook-form'

interface PhoneFieldProps {
  className?: string
  containerClass?: string
  'data-testid'?: string
  disabled?: boolean
  errorClassName?: string
  errorMessage?: ReactNode
  isError?: boolean
  label?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onCodeChange?: (code: Country) => void
  pattern?: string
  phoneExample?: string
  placeholder?: string
  value?: string
  name: string
  register?: UseFormRegister<any>
}
const PhoneField: FC<PhoneFieldProps> = ({
  className = '',
  containerClass = 'w-full flex flex-col',
  disabled = false,
  errorClassName,
  onChange,
  onCodeChange,
  value = '',
  isError,
  phoneExample,
  label = '',
  name,
  ...props
}) => {
  return (
    <div className="flex items-center gap-2">
      <DialCodeSelector onChange={onCodeChange} />
      <TextField
        autoFocus
        className={className}
        containerClass={containerClass}
        disabled={disabled}
        errorClassName={errorClassName}
        errorMessage={'Invalid phone number'}
        isError={isError}
        label={label}
        name={name}
        onChange={onChange}
        type="tel"
        register={props.register}
        value={value}
        {...props}
      />
    </div>
  )
}

export default PhoneField
