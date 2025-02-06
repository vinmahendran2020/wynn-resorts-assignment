import React, { ReactNode } from 'react'
import Radio from './Radio'

interface RadioGroupProps {
  children: ReactNode
  className?: string
  onChange?: (e: React.FormEvent<HTMLFieldSetElement>) => void
  form?: string
}

interface RadioGroupComponent extends React.FC<RadioGroupProps> {
  Option: typeof Radio;
}

const RadioGroup: RadioGroupComponent = ({
  children,
  className,
  onChange,
  form
}) => {
  return (
    <fieldset className={className} onChange={onChange} form={form}>
      {children}
    </fieldset>
  )
}

RadioGroup.Option = Radio

export default RadioGroup
