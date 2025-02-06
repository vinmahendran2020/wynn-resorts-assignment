import Button from '@/components/Button'
import Col from '@/components/Col'
import RadioGroup from '@/components/RadioGroup'
import Row from '@/components/Row'
import { IFormInput } from '@/types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const RegistrationStep2 = () => {
  const {
    formState: { errors },
    setValue
  } = useForm<IFormInput>({})

  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const onChange = (e: React.FormEvent<HTMLFieldSetElement>) => {
    const target = e.target as HTMLInputElement;
    setSelectedValue(target.id);
  }

  return (
    <form className="w-full flex flex-col gap-8" id='otpForm' >
      <Col className='gap-4'>
        <span className='text-medium-s3 underline underline-offset-8'>OTP Verification</span>
        <Col className='w-full h-46 gap-4 text-center bg-white py-4 px-8'>
          <h3 className='text-medium-s5'>Send Code</h3>
          <p className='text-dark-gray-300 text-medium-b2'>How would you like to receive the code?</p>
          <RadioGroup onChange={onChange} className='flex justify-between mt-8'>
            <RadioGroup.Option id='phone' label='Send to Phone' name='otp_group' />
            <RadioGroup.Option id='email' label='Send to Email' name='otp_group' />
          </RadioGroup>
        </Col>
      </Col>

      <Row className='gap-4' onClick={() => {}}>
        <Button className='basis-1/2'>
          Back
        </Button>
        <Button className='basis-1/2' onClick={() => {}}>
          <input type="submit" value="Next" />
        </Button>
      </Row>
    </form>
  )
}

export default RegistrationStep2