import { FC, ReactNode } from 'react'

import cn from './utils/classnames'

type PanelVariant = 'dark' | 'light'

interface PanelProps {
  children: ReactNode
  className?: string
  variant?: PanelVariant
}

const Panel: FC<PanelProps> = ({ children, className = '', variant = 'light', ...props }) => {
  const bgColor = variant === 'light' ? 'bg-white' : 'bg-darkgray'

  return (
    <div className={cn('p-2 xl:p-3 2xl:p-4 shadow-2xl rounded-lg', bgColor, className)} {...props}>
      {children}
    </div>
  )
}

export default Panel
