'use client'

import Col from "@/components/Col";
import { ReactNode } from "react";

export default function RegistrationLayout({ children }: { children: ReactNode }) {

  return (
    <Col className='sm:w-1/2 lg:w-1/3 2xl:w-1/4 xs:p-4 gap-6'>
      <h1>Registration</h1>
      <p className="text-medium-b2">Please enter below information to create your account</p>
      {children}
    </Col>
  )
}
