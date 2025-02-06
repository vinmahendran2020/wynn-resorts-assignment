import React, { RefObject, useEffect, useState } from 'react'
import TextField from './TextField'
import { UseFormRegister } from 'react-hook-form'

interface EmailInputProps {
  register?: UseFormRegister<any>
  required?: boolean
  isError?: boolean
}

const EmailInput: React.FC<EmailInputProps> = ({
  register,
  required = true,
  isError
}) => {
  const [emailError, setEmailError] = useState<string | undefined>(isError ? 'email error' : undefined)

  useEffect(() => {
    if (isError) {
      setEmailError('email error')
    }
  }, [isError])

  return (
    <TextField
      className="w-full"
      containerClass="w-full"
      isError={!!emailError}
      register={register}
      label={'Email'}
      name='email'
      placeholder={'Enter email address...'}
      tabIndex={1}
      type="email"
      required={required}
      pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
    />
  )
}

export default EmailInput
