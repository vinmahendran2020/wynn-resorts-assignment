import React from 'react'
import Row from './Row'
import Image from 'next/image'

import logo from '@/icons/logo.png'
import NavBar from './NavBar'
import { useRouter } from 'next-nprogress-bar'

const Header = () => {
  const router = useRouter()
  return (
    <header className='h-30 bg-white w-full p-2 sm:p-4'>
      <Row className='items-center h-full w-full relative'>
        <Row className='md:w-32 mr-4'><Image alt="QR Code" src={logo} onClick={() => router.push('/registration/step1')}/></Row>
        <Row className='xs:absolute xs:right-0 xs:top-1/2 xs:-translate-y-1/2 sm:w-full sm:justify-center'>
          <NavBar/>
        </Row>
      </Row>
    </header>
  )
}

export default Header