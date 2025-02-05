import React, { ReactNode, forwardRef } from 'react'
import cn from './utils/classnames'

interface ColProps {
  [key: string]: unknown
  children: ReactNode
  className?: string
}

const Col: React.FC<ColProps> = forwardRef<HTMLDivElement, ColProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col', className)} ref={ref} {...props}>
        {children as ReactNode}
      </div>
    )
  },
)
Col.displayName = 'Col'

export default Col
