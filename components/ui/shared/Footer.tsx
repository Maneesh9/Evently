import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='boreder-t'>
      <div className='flex-center wrapper flex-bottom flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href="/">
          <Image 
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
          />
        </Link>
        <p>2025 all rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer