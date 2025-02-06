import { useEffect } from 'react'

import { useAppDispatch, useGeneralState } from '@/hooks/storeHooks'
import { clearToast } from '@/store/slices/generalSlice'
import Row from '../Row'
import Toast from '../Toast'

const GeneralToast = () => {
  const dispatch = useAppDispatch()
  const { show, props } = useGeneralState()
  const { type = 'info', message = '', onShow, onClose } = props || {}

  useEffect(() => {
    if (show) onShow?.()
  }, [show])

  const onToastClose = async () => {
    onClose?.()
    dispatch(clearToast())
  }

  return (
    <Toast onClose={() => onToastClose()} show={show} type={type}>
      <Row className="items-center gap-2">
        <p className="text-bold-b3">{message}</p>
      </Row>
    </Toast>
  )
}

export default GeneralToast
