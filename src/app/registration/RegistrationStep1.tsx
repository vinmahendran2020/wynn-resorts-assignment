import Button from '@/components/Button'
import Checkbox from '@/components/Checkbox'
import Col from '@/components/Col'
import CountrySelector from '@/components/CountrySelector'
import EmailInput from '@/components/EmailInput'
import PhoneField from '@/components/PhoneField'
import Row from '@/components/Row'
import Select from '@/components/Select'
import TextField from '@/components/TextField'
import { IFormInput } from '@/types'

import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

type Props = {
  register: any;
  handleSubmit: (onValid: SubmitHandler<IFormInput>, onInvalid?: SubmitErrorHandler<IFormInput>) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  formState: {
    errors: any;
  };
  setValue: any;
}

const RegistrationStep1 = ({
  register,
  handleSubmit,
  formState: { errors },
  setValue
}: Props) => {

  const onSuccess = (data: IFormInput) => {
    console.log('bye', data)
  }

  const onInvalid = (data: any) => {
    console.log('hi', errors)
    const keys = Object.keys(data)
  }

  return (
    <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit(onSuccess, onInvalid)}>
      <Col className='gap-4'>
        <span className='text-medium-s3 underline underline-offset-8'>Personal Info</span>
        <Col className='gap-4'>
          <Row className='gap-4 xs:flex-col'>
            <TextField
              className="w-full"
              containerClass="w-full"
              label={'First Name'}
              isError={!!errors.firstName}
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
              isError={!!errors.lastName}
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

          <CountrySelector
            register={register}
            isError={!!errors.countryName}
          />
        </Col>
      </Col>

      <Col className='gap-4'>
        <span className='text-medium-s3 underline underline-offset-8'>Contact Details</span>
        <Col className='gap-4'>
          <EmailInput
            register={register}
            required={true}
            isError={!!errors.email}
          />
          <PhoneField
            register={register}
            isError={!!errors.phoneNumber}
            setValue={setValue}
          />
        </Col>
      </Col>

      <Checkbox
        id="terms"
        isError={!!errors.consent}
        register={register}
        label={<div>I agree to the <a href='javascript::void'>terms and conditions</a> and <a href='javascript::void'>privacy policy</a>.</div>}
      />
      <Button className='sm:w-1/3'>
        <input type="submit" value="Submit" />
      </Button>
    </form>
  )
}

export default RegistrationStep1