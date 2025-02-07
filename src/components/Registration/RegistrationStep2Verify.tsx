/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/Button'
import Col from '@/components/Col'
import Row from '@/components/Row'
import { useFormState } from '@/hooks/storeHooks'
import { IFormInput } from '@/types'
import { useForm } from 'react-hook-form'
import OTPInput from '../OTPInput'

const RegistrationStep2Verify = ({ onBack }: { onBack: () => void }) => {

  const formState = useFormState()
  const codeSent = formState.otpMethod === 'email' ? formState.email : formState.phoneNumber
  const { handleSubmit, ...form } = useForm<IFormInput>()

  const onSubmit = (data: any) => {
    console.log("OTP Entered:", Object.values(data).join(""));
  };

  return (
    <form className="w-full flex flex-col gap-8" id='otpForm' onSubmit={handleSubmit(onSubmit)}>
      <Col className='gap-4'>
        <span className='text-medium-s3 underline underline-offset-8'>OTP Verification</span>
        <Col className='w-full h-56 gap-4 justify-evenly text-center bg-white py-4 px-8'>
          <h3 className='text-medium-s5'>Please check your {formState.otpMethod === 'email' ? 'email' : 'phone'}</h3>
          
          <p className='text-dark-gray-300 text-medium-b2'>We've sent a code to {`${codeSent}`}</p>
          <OTPInput {...form}/>
        </Col>
      </Col>

      <Row className='gap-4' >
        <Button className='basis-1/2' variant='outline' onClick={onBack}>
          Back
        </Button>
        <Button type='submit' className='basis-1/2'>
          Next
        </Button>
      </Row>
    </form>
  )
}

export default RegistrationStep2Verify