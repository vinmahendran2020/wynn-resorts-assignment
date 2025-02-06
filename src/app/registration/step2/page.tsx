'use client'

import Loader from "@/components/Loader"
import RegistrationStep2SendCode from "@/components/Registration/RegistrationStep2SendCode"
import RegistrationStep2Verify from "@/components/Registration/RegistrationStep2Verify"
import { useRouter } from "next-nprogress-bar"
import { useEffect, useState, useTransition } from "react"


export default function RegistrationStep() {

  const steps = [RegistrationStep2SendCode, RegistrationStep2Verify]
  const [ isPending, startTransition] = useTransition()
  const [ step, setStep ] = useState(0)
  const router = useRouter()
  const Step = steps[step]
  console.log('Current step', step)

  const goBack = () => {
    console.log('Goback step', step)

    startTransition(() => {
      if (step === 0) {
        router.push('/registration/step1')
      } else {
        setStep(prev => prev - 1)
      }
    })
  }

  const onNext = () => {
    console.log('Next step', step)
    if (step >= steps.length - 1) {
      return
    }
    setStep(step + 1)
  }

  if(isPending) {
    return <Loader />
  }

  return (
    <Step onNext={onNext} onBack={goBack}/>
  )
}
