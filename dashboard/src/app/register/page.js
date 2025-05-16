import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Register = () => {
  return (
    <div className='h-screen'>
      <section>
      <Link href="/dashboard" className="flex gap-3 px-[10%] py-[5%]">
                <Image src="/logo/image.png" width={30} height={25} alt="logo" />
                <p className="font-bold text-2xl">Mantis</p>
              </Link>
      </section>
    </div>
  )
}

export default Register
