import Col from '@/components/Col'
import CountrySelector from '@/components/CountrySelector'
import EmailInput from '@/components/EmailInput'
import PhoneField from '@/components/PhoneField'
import Row from '@/components/Row'
import Select from '@/components/Select'
import TextField from '@/components/TextField'
import cn from '@/components/utils/classnames'
import { IFormInput } from '@/types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

type Props = {}

const Registration = ({ }: Props) => {

  const [state, setState] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({})

  const onSuccess = (data: IFormInput) => {
    console.log(data)
  }

  const onInvalid = (data: any) => {
    console.log(data)
    const keys = Object.keys(data)
  }

  return (
    <Col className='w-1/2 '>
      <h1>Registration</h1>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSuccess, onInvalid)}>
        <Col className='gap-4'>
          <span className='text-medium-b1 underline'>Personal Info</span>
          <Col className='gap-4'>
            <Row className='gap-4'>
              <TextField
                className="w-full"
                containerClass="w-full"
                label={'First Name'}
                name={'firstName'}
                register={register}
                placeholder={'Enter first name...'}
                tabIndex={1}
                type="text"
                required={true}
              />
              <TextField
                className="w-full"
                containerClass="w-full"
                label={'Last Name'}
                name={'lastName'}
                register={register}
                placeholder={'Enter last name...'}
                tabIndex={1}
                type="text"
                required={true}
              />
            </Row>
  
            <Select
              className="w-full bg-white"
              containerClass="flex-1"
              enterKeyHint="next"
              label="Gender"
              name="gender"
              placeholder="Select gender..."
              tabIndex={5}
            >
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </Select>
  
            <CountrySelector />
          </Col>
        </Col>

        <Col className='gap-4'>
          <span className='text-medium-b1 underline'>Contact Details</span>
          <Col className='gap-4'>
            <EmailInput />
            <PhoneField
              register={register}
              name='phoneNumber'
              pattern="[0-9]"
            />
          </Col>
        </Col>
      </form>
    </Col>
  )
}

export default Registration