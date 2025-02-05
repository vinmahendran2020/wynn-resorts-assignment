import React, { RefObject, useEffect, useState } from 'react'
import TextField from './TextField'

interface EmailInputProps {
  disabled?: boolean
  email: string
  emailParam?: string
  emailRef?: RefObject<HTMLInputElement>
  errorMessage?: string
  setEmail: (email: string) => void
  setEmailValidity?: (valid: boolean) => void
}

const EmailInput: React.FC<EmailInputProps> = ({
  emailParam,
  email,
  setEmail,
  errorMessage,
  disabled = false,
  emailRef,
  setEmailValidity,
}) => {
  const [emailError, setEmailError] = useState<string>('')

  useEffect(() => {
    if (!email && !emailParam) {
      emailRef?.current?.focus()
      setEmailValidity?.(true)
    }
  }, [])

  useEffect(() => {
    emailParam && onChangeEmail(emailParam)
  }, [emailParam])

  useEffect(() => {
    errorMessage && setEmailError(errorMessage)
  }, [errorMessage])

  const onChangeEmail = (value: string) => {
    setEmail(value)
    setEmailError('')
    const success = validateEmail(value)

    if (value.length === 0) {
      setEmailError('')
      setEmailValidity?.(true)
      return
    }

    if (success) {
      setEmailValidity?.(true)
      setEmailError?.('')
    } else {
      setEmailError?.('email error')
      setEmailValidity?.(false)
    }
  }

  return (
    <TextField
      autoComplete="email"
      className="w-full"
      containerClass="w-full"
      disabled={disabled}
      errorClassName="min-h-4"
      errorMessage={emailError}
      isError={!!emailError}
      label={'email'}
      onChange={(e) => onChangeEmail(e.target.value)}
      placeholder={'email'}
      ref={emailRef}
      tabIndex={1}
      type="email"
      value={email}
    />
  )
}

export default EmailInput
