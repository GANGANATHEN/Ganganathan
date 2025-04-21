"use client"
import React,{ useState} from 'react'
import { useRouter,redirect } from 'next/navigation'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Home() {

  const router = useRouter()

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [passmessage, setPassmessage] = useState("");
  const [showPassword, setShowPassword] = useState(false)


  function handleLogin() {
    
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    if (userDetails.email === "" || userDetails.password === "") {
      setError("Please fill in all fields");
      return;
    }else {
      setError("");
    }

    const user = userInfo.find((user) => user.email === userDetails.email && user.password === userDetails.password);
    if (!user) {
      setError("Error msg if wrong email address");
      setPassmessage("Error msg if wrong password");
      return;
    }else {
      setPassmessage("");
    }
    console.log('Login successful:', user);
    redirect('/dashboard')
  }

  return (
    <div>
      <div className="w-[40%] mx-[30%] my-[10%] rounded-md shadow-lg">
        <h1 className="text-center py-3 font-bold ">LOGIN</h1>
        <div className="border-y-2 border-gray-300 p-5">
          <label className="text-[15px] font-bold">Email Address</label><br />
          <input
            type="email"
            placeholder="email@example.com"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%] caret-pink-500"
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            value={userDetails.email}
          />
            <p className='mb-2 text-[12px] text-red-500 px-5'>{error}</p>
          <label className="text-[15px] font-bold">Password</label><br />
            <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%]"
            onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
            value={userDetails.password}
          />
            <button
              type="button"
              aria-label={
              showPassword ? "Password Visible" : "Password Invisible."
              }
              className="text-black dark:text-white "
              onClick={() => {
              setShowPassword((prev) => !prev);
                        }}
               >
              {showPassword ? (
                <FaRegEye className='absolute right-[2%] top-[12px]'/>
                 ) : (
                   <FaRegEyeSlash className='absolute right-[2%] top-[12px]'/>
                  )}
              </button>
            </div>
            <p className='mb-2 text-[12px] text-red-500 px-5'>{passmessage}</p>
          <button className="bg-blue-500 text-white rounded-md px-4 py-1 my-3 cursor-pointer"
            onClick={() =>handleLogin()}
          >
            Login
          </button>
        </div>
        <h3 className="px-5 py-5 font-bold text-[15px]">New around here? {' '}
        <button onClick={() => router.push('/signup')} className="text-red-500 cursor-pointer">Sign up</button></h3>
      </div>

      <div className="text-center">
        <p className="text-[12px] text-gray-500">By signing up, you agree to our <span className="text-blue-500 cursor-pointer">Terms of Service</span> and <span className="text-blue-500 cursor-pointer">Privacy Policy</span></p>
        <p className="text-[12px] text-gray-500">© 2025 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}
