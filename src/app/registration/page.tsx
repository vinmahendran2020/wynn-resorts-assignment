'use client'

import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";

export default function RegistrationStep({ type }: { type: string }) {

  const router = useRouter()

  useEffect(() => {
    router.push('/registration/step1')
  }, [])

  return <></>
}
