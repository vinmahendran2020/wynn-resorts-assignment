import React, { ReactNode } from 'react'
import cn from './utils/classnames'

interface RowProps {
  [key: string]: unknown
  children: ReactNode
  className?: string
}

const Row: React.FC<RowProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('flex flex-row', className)} {...props}>
      {children}
    </div>
  )
}

export default Row
