import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Image from 'next/image'
import { SunIcon } from '@/project files/Icons'

const Header = () => {
  return (
    <div className='w-full p-4 px-10 flex items-center justify-between z-50'>
      <Logo />
      <nav className='w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
        <Link href="/" className='mr-2'>Home</Link>
        <Link href="/about" className='mr-2'>About</Link>
        <Link href="/contact" className='mr-2'>Contact</Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className='flex items-center justify-center'>
        <a href="http://example.com" className='mr-4'> <Image src="/svgs/linkedin.svg" alt="LinkedIn" width={20} height={20} className='hover:scale-125 transition-all ease duration-200'/></a>
        <a href="http://example.com"  className='mr-4'><Image src="/svgs/twitter.svg" alt="twitter" width={20} height={20} className='hover:scale-125 transition-all ease duration-200'/></a>
        <a href="http://example.com" className='mr-4'><Image src="/svgs/github.svg" alt="github" width={20} height={20} className='hover:scale-125 transition-all ease duration-200'/></a>
        <a href="http://example.com" className='mr-4'><Image src="/svgs/dribbble.svg" alt="dribbble" width={20} height={20} className='hover:scale-125 transition-all ease duration-200'/></a>
      </div>
    </div>
  )
}

export default Header