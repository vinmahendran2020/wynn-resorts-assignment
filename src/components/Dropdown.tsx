import React, {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react'

import cn from './utils/classnames'

interface DropdownProps {
  animate?: boolean
  children: ReactNode
  className?: string
  closeOnClick?: boolean
  disabled?: boolean
  hoverTimeout?: number
  isOpen?: boolean
  onClick?: () => void
  onClose?: () => void
  onOpen?: () => void
  openOnHover?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({
  animate = true,
  children,
  className = '',
  closeOnClick = false,
  disabled = false,
  hoverTimeout = 0,
  onClose,
  onClick,
  onOpen,
  openOnHover,
  isOpen,
  ...props
}) => {
  const [open, setOpen] = useState(isOpen || false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    open ? onOpen?.() : onClose?.()
  }, [open, onOpen, onClose])

  useEffect(() => {
    if (closeOnClick) {
      setOpen(false)
    }
  }, [closeOnClick])

  useEffect(() => {
    setOpen(isOpen || false)
  }, [isOpen])

  const childrenArray = Children.toArray(children).filter(isValidElement)

  if (childrenArray.length === 0) {
    return null // or some fallback UI
  }

  const handlerElement = childrenArray[0]
  const restChildren = childrenArray.slice(1)

  const handlerProps = {
    ...(disabled ? { disabled: true } : {}),
    ...(openOnHover
      ? { onMouseOver: () => setOpen(true) }
      : {
          onClick: () => {
            onClick?.()
            setOpen(!open)
          },
        }),
  }
  const handleCLick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (closeOnClick) {
      e.stopPropagation()
      setOpen(false)
    }
  }
  return (
    <div className="relative" ref={ref} {...props}>
      {cloneElement(handlerElement, handlerProps)}
      {open && (
        <div
          className={cn(
            'absolute z-50',
            open
              ? 'scale-100 opacity-100 pointer-events-auto'
              : 'scale-95 opacity-0 pointer-events-none',
            animate ? 'transition-opacity ease-in-out duration-300' : '',
            className,
          )}
          onClick={handleCLick}
        >
          {restChildren}
        </div>
      )}
    </div>
  )
}

export default Dropdown
