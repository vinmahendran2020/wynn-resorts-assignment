'use client'

import Col from "@/components/Col";
import Row from "@/components/Row";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const extractStep = (str: string): number | null => {
  const match = str.match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

export default function RegistrationLayout({ children }: { children: ReactNode }) {
  const path = usePathname()
  const step = extractStep(path)

  return (
    <Col className='sm:w-1/2 lg:w-1/3 2xl:w-1/4 xs:p-4 gap-6'>
      <Row className="justify-between items-center">
        <h1>Registration</h1>
        <p>Step {step} of 3</p>
      </Row>
      <p className="text-medium-b2">Please enter below information to create your account</p>
      {children}
    </Col>
  )
}
