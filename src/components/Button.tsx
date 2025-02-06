import { ButtonHTMLAttributes, ReactNode } from 'react'
import cn from './utils/classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  hidden?: boolean
  rounded?: string
  variant?: 'primary' | 'danger' | 'secondary' | 'transparent' | 'link' | 'plain' | 'outline' | 'premium'
}

const Button = ({
  children,
  className = '',
  hidden = false,
  rounded = 'rounded-sm',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        className,
        hidden && 'hidden',
        'flex justify-center items-center gap-2 p-2 cursor-pointer select-none [outline:none] disabled:cursor-not-allowed whitespace-nowrap',
        rounded,
        'text-medium-b2',
        variant === 'primary' &&
        'bg-green-180 hover:bg-green-120 text-white disabled:bg-darkgray-30-new disabled:text-darkgray-200 border-1 border-blue disabled:border-none',
        variant === 'danger' &&
        'bg-white hover:bg-white border-[1.6px] border-red-500 text-red-500 hover:text-red-500 hover:border-red-500 disabled:border-lightgray-120 disabled:text-darkgray-40',
        variant === 'secondary' &&
        'bg-white hover:bg-white text-blue border-1 border-blue hover:text-blue-120 hover:border-blue-120 disabled:border-lightgray-120 disabled:text-darkgray-40',
        variant === 'transparent' &&
        'bg-transparent text-blue border-1 border-blue hover:text-blue-120 hover:border-blue-120 disabled:border-lightgray-120 disabled:text-darkgray-40',
        variant === 'link' && 'text-blue hover:text-blue-120 disabled:text-darkgray-40',
        variant === 'plain' && 'text-black hover:text-blue-120 disabled:text-darkgray-40',
        variant === 'outline' &&
        'bg-white hover:bg-white border-[1.6px] border-darkgray-50 hover:text-darkgray-60 hover:border-darkgray-60 disabled:border-lightgray-120 disabled:text-darkgray-40',
              )}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
