'use client'

import Col from "@/components/Col";
import RegistrationStep1 from "./RegistrationStep1";
import RegistrationStep2 from "./RegistrationStep2";
import { useForm } from "react-hook-form";
import { IFormInput } from "@/types";

export default function Registration() {

  const form = useForm<IFormInput>({})

  console.log('form', form.getValues())

  return (
    <Col className='sm:w-150 xs:p-4 gap-6 mt-4 sm:mt-6'>
      <h1>Registration</h1>
      <p className="text-medium-b2">Please enter below information to create your account</p>
      <RegistrationStep1 {...form}/>
    </Col>
  )
}
