import React from 'react'
import Row from './Row'
import Image from 'next/image'

import logo from '@/icons/logo.png'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='h-30 bg-white w-full p-2 sm:p-4'>
      <Row className='justify-between items-center h-full w-full'>
        <Image alt="QR Code" src={logo} />
      </Row>
    </header>
  )
}

export default Header