"use client"
import React,{useState} from 'react'
import { useRouter,redirect } from 'next/navigation'

export default function Home() {

  const router = useRouter()

  const [userDetails, setUserDetails] = useState([])

  function handleLogin() {
    console.log('Login button clicked');
    redirect('/dashboard')
  }

  return (
    <div>
      <div className="w-[40%] mx-[30%] my-[10%] rounded-md shadow-lg">
        <h1 className="text-center py-3 font-bold">LOGIN</h1>
        <div className="border-y-2 border-gray-300 p-5">
          <label className="text-[15px] font-bold">Email Address</label><br />
          <input
            type="email"
            placeholder="email@example.com"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%]"
          />
            <p className='mb-2 text-[12px] text-red-500 px-5'>Error msg if wrong email address</p>
          <label className="text-[15px] font-bold">Password</label><br />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%]"
          />
            <p className='mb-2 text-[12px] text-red-500 px-5'>Error msg if wrong password</p>
          <button className="bg-blue-500 text-white rounded-md px-4 py-1 my-3"
            onClick={() =>handleLogin()}
          >
            Login
          </button>
        </div>
        <h3 className="px-5 py-5 font-bold text-[15px]">New around here? {' '}
        <button onClick={() => router.push('/signup')} className="text-red-500">Sign up</button></h3>
      </div>
    </div>
  );
}
