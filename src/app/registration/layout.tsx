'use client'

import Col from "@/components/Col";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {

  return (
    <Col className='sm:w-150 xs:p-4 gap-6 mt-4 sm:mt-6'>
      <h1>Registration</h1>
      <p className="text-medium-b2">Please enter below information to create your account</p>
      {children}
    </Col>
  )
}
