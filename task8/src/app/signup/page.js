"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const SignUp = () => {

    const router = useRouter()

  return (
    <div>
      <div className="w-[40%] mx-[30%] my-[10%] rounded-md shadow-lg">
        <h1 className="text-center py-3 font-bold">SIGN UP</h1>
        <div className="border-y-2 border-gray-300 p-5">
          <label className="text-[15px] font-bold">Email Address</label><br />
          <input
            type="email"
            placeholder="email@example.com"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%]"
          />
            <p className='mb-2 text-[12px] text-red-500 px-5'>Error msg if didn&apos;t pass the validation</p>
          <label className="text-[15px] font-bold">Password</label><br />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%]"
          />
          <p className='mb-2 text-[12px] text-red-500 px-5'>Error msg if didn&apos;t pass the validation or different password</p>
          <label className="text-[15px] font-bold">Retype Password
            </label><br />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%] mb-2"
          /><br />
          <button className="bg-blue-500 text-white rounded-md px-4 py-1 my-3">
            SignUp
          </button>
        </div>
        <h3 className="px-5 py-3 font-bold text-[15px]">Already have account? {' '}
        <button onClick={() => router.push('/')} className="text-red-500">Login</button></h3>
      </div>
    </div>
  )
}

export default SignUp
