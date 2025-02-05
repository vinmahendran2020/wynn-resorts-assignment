import React, { RefObject, useEffect, useState } from 'react'
import TextField from './TextField'

interface EmailInputProps {
  disabled?: boolean
}

const EmailInput: React.FC<EmailInputProps> = ({
  disabled = false,
}) => {
  const [emailError, setEmailError] = useState<string>('')
  const [email, setEmail] = useState<string>('')

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
      disabled={disabled}
      errorMessage={emailError}
      isError={!!emailError}
      label={'Email'}
      name='email'
      onChange={(e) => onChangeEmail(e.target.value)}
      placeholder={'Enter email address...'}
      tabIndex={1}
      type="email"
      value={email}
    />
  )
}

export default EmailInput
