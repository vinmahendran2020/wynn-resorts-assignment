import React, { FC, HTMLAttributes } from 'react'
import cn from './utils/classnames'
import { createPortal } from 'react-dom'
import Loader from './Loader'

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  size?: number
  variant?: 'fill-blue' | 'fill-red'
}

const FullPageLoader = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) return null;

  return createPortal(
    <div className='fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-backdrop pointer-events-none'><Loader /></div>, 
    rootElement
  );
}

export default FullPageLoader
