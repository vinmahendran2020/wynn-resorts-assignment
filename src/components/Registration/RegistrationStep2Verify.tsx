import Button from '@/components/Button'
import Col from '@/components/Col'
import RadioGroup from '@/components/RadioGroup'
import Row from '@/components/Row'
import { useFormState } from '@/hooks/storeHooks'

const RegistrationStep2Verify = ({ onBack, onNext }: { onBack: () => void, onNext: () => void }) => {

  const form = useFormState()
  const onChange = (e: React.FormEvent<HTMLFieldSetElement>) => {
    const target = e.target as HTMLInputElement;
  }

  return (
    <form className="w-full flex flex-col gap-8" id='otpForm' >
      <Col className='gap-4'>
        <span className='text-medium-s3 underline underline-offset-8'>OTP Verification</span>
        <Col className='w-full h-46 gap-4 text-center bg-white py-4 px-8'>
          <h3 className='text-medium-s5'>Please check your {form.otpMethod === 'email' ? 'email' : 'phone'}</h3>
          <p className='text-dark-gray-300 text-medium-b2'>We've sent a code to {form.email}</p>
          <RadioGroup onChange={() => {}} className='flex justify-between mt-8'>
            <RadioGroup.Option id='phone' label='Send to Phone' name='otp_group' />
            <RadioGroup.Option id='email' label='Send to Email' name='otp_group' />
          </RadioGroup>
        </Col>
      </Col>

      <Row className='gap-4' >
        <Button className='basis-1/2' variant='outline' onClick={onBack}>
          Back
        </Button>
        <Button className='basis-1/2' onClick={onNext}>
          <input type="submit" value="Next" />
        </Button>
      </Row>
    </form>
  )
}

export default RegistrationStep2Verify