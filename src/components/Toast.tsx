import React, { ReactNode, useEffect, useState } from 'react'

import CloseIcon from '@/icons/close.svg'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import Row from './Row'
import cn from './utils/classnames'
import { Error, Success } from '@/icons'

interface ToastProps {
  children: ReactNode
  closeTimeout?: number
  onClose?: () => void
  onShow?: () => void
  show?: boolean
  type?: 'error' | 'info' | 'success' | 'warning'
}

const Toast: React.FC<ToastProps> = ({
  children,
  onClose,
  onShow,
  show = false,
  type = 'info',
  closeTimeout = 10000,
}) => {
  const { isMobileScreen } = useBreakpoints()
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
    setTimeout(() => {
      onClose?.()
    }, 500)
  }

  useEffect(() => {
    setOpen(show)
  }, [show])

  useEffect(() => {
    if (show && onShow) {
      onShow()
    }
  }, [show, onShow])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (show && closeTimeout) {
      timer = setTimeout(() => {
        close()
      }, closeTimeout)
    }
    return () => clearTimeout(timer)
  }, [show, closeTimeout])

  const getIcon = (toastType: string) => {
    if (toastType === 'error') {
      return <Error className="text-red-500 w-4 h-4 min-w-4 min-h-4" />
    } else if (toastType === 'success') {
      return <Success className="text-green-500 w-4 h-4 min-w-4 min-h-4" />
    }
  }

  return (
    <Row
      className={cn(
        'fixed box-border shadow-lg p-4 transition-all duration-500 ease-in-out z-80 rounded-md text-regular-b2 justify-between',
        isMobileScreen ? 'w-11/12 ml-[4.15%]' : 'w-full max-w-fit min-h-fit bottom-24',
        type === 'error' && 'bg-red-100',
        type === 'success' && 'bg-green-100',
        type === 'warning' && 'bg-yellow-100',
        type === 'info' && 'bg-lightgray-200',
        open
          ? isMobileScreen
            ? 'opacity-100 bottom-[60px]'
            : 'opacity-100 right-8'
          : isMobileScreen
            ? 'opacity-0 -bottom-20'
            : 'opacity-0 -right-140',
      )}
      id="toast"
    >
      <Row className="gap-2 items-start w-full">
        <div className="py-0.5 mt-[0.5px]">{getIcon(type)}</div>
        <div className="flex-1 max-w-[400px]">{children}</div>
        <div className="cursor-pointer text-darkblue-100 p-1" onClick={close}>
          <CloseIcon className="w-3 h-3 min-w-3 min-h-3" />
        </div>
      </Row>
    </Row>
  )
}

export default Toast
