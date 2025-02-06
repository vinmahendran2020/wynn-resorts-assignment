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
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    if (isError) {
      setEmailError('email error')
    }
  }, [isError])
  
  const onChangeEmail = (value: string) => {
    setEmail(value)
    setEmailError('')
    const success = validateEmail(value)

    if (value.length === 0) {
      setEmailError('')
      return
    }

    if (success) {
      setEmailError?.('')
    } else {
      setEmailError?.('email error')
    }
  }

  return (
    <TextField
      className="w-full"
      containerClass="w-full"
      isError={!!emailError}
      register={register}
      label={'Email'}
      name='email'
      onChange={(e) => onChangeEmail(e.target.value)}
      placeholder={'Enter email address...'}
      tabIndex={1}
      type="email"
      required={required}
      pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
      value={email}
    />
  )
}

export default EmailInput
