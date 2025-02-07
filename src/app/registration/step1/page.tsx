'use client'

import FullPageLoader from "@/components/FullPageLoader";
import { useAppDispatch } from "@/hooks/storeHooks";
import { usePostUserRegistrationMutation } from "@/services/registrationApi";
import storage from "@/storage";
import { setFormData } from "@/store/slices/formSlice";
import { setToast } from "@/store/slices/generalSlice";
import { IFormInput, ToastType } from "@/types";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import RegistrationStep1 from "../../../components/Registration/RegistrationStep1";

export default function RegistrationStep() {

  const [postUserRegistration, { isLoading, isSuccess, isError }] = usePostUserRegistrationMutation();
  const dispatch = useAppDispatch()
  const form = useForm<IFormInput>({})
  const router = useRouter()

  const onSuccess = async (data: IFormInput) => {
    dispatch(setFormData(data))
    await postUserRegistration(data);
  }

  useEffect(() => {
    const formData = storage.sessionStore.get('registration')
    if (formData) {
      form.reset({
        ...JSON.parse(formData)
      })
    }
  }, [])

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToast({ show: true, props: { type: ToastType.success, message: 'Registration done' } }))
      router.push('/registration/step2')
    }
  }, [isSuccess])

  useEffect(() => {
    dispatch(setToast({ show: true, props: { type: ToastType.error, message: 'Registration failed' } }))
  }, [isError])

  if (isLoading) {
    return <FullPageLoader />
  }

  return <RegistrationStep1 {...form} onSuccess={onSuccess} />

}
