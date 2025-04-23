import Link from 'next/link'
import React from 'react'
import logo from '@/public/profile-img.png'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
      <span className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
    <Image src={logo} alt="Codebucks"className='w-full h-auto rounded-full' />
    </span>
    <span>CodeBucks</span>
    </Link>
  )
}   

export default Logo