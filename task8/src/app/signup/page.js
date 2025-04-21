"use client"
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const SignUp = () => {

    const router = useRouter()

    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [showPassword1,setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false);


    //message
    const [passmessage, setPassmessage] = useState("");
    const [errormessage, setErrormessage] = useState("");
    const [error, setError] = useState("")

    const validateEmail = () => {
        console.log("i'm enter");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(useremail)) {
          setError('Please enter a valid email address');
        } else {
          setError('');
          setCorrect(true);
          console.log("i'm enter in else");
        }
    }

    // useEffect(() => {
    //     validateEmail();
    // }, [useremail]);

    function handleSignup() {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
    
      if (useremail === "" || password === "") {
        setErrormessage("Please fill in all fields");
        return;
      } else {
        setErrormessage("");
      }
    
      if (password !== retypePassword) {
        setPassmessage("Passwords do not match");
        return;
      } else {
        setPassmessage("");
      }
    
      if (userInfo.some(user => user.email.toLowerCase() === useremail.toLowerCase())) {
        setError("Email already exists");
        return;
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(useremail)) {
        setError("Please enter a valid email address");
        return;
      } else {
        setError("");
      }
      
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
          setPassmessage("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number");
          return;
        }
      userInfo.push({
        email: useremail,
        password: password,
      });
    
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      router.push('/');
    }
    

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
            onChange={(e) => setUseremail(e.target.value)}
            value={useremail} 
          />
            <p className='mb-2 text-[12px] text-red-500 px-5'>{errormessage}</p>
          <label className="text-[15px] font-bold">Password</label><br />
          
          <div className="relative">
          <input
            type={showPassword1 ? "text" : "password"}
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%]"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="button"
            aria-label={
              showPassword1 ? "Password Visible" : "Password Invisible."
            }
            className="text-black dark:text-white"
            onClick={() => {
              setShowPassword1((prev) => !prev);
            }}
          >
            {showPassword1 ? (
                <FaRegEye className='absolute right-[2%] top-[12px]'/>
            ) : (
                <FaRegEyeSlash className='absolute right-[2%] top-[12px]'/>
            )}
          </button>
            </div>


          <p className='mb-2 text-[12px] text-red-500 px-5'>{passmessage}</p>
          <label className="text-[15px] font-bold">Retype Password
            </label><br />
          <div className="relative">
          <input
            type={showPassword2 ? "text" : "password"}
            placeholder="Password"
            className="border-2 border-gray-300 rounded-md p-2 w-[100%] mb-2"
            onChange={(e) => setRetypePassword(e.target.value)}
            value={retypePassword}
          />
          <button
            type="button"
            aria-label={
              showPassword1 ? "Password Visible" : "Password Invisible."
            }
            className="text-black dark:text-white"
            onClick={() => {
              setShowPassword2((prev) => !prev);
            }}
          >
            {showPassword2 ? (
                <FaRegEye className='absolute right-[2%] top-[12px]'/>
            ) : (
                <FaRegEyeSlash className='absolute right-[2%] top-[12px]'/>
            )}
          </button>
            </div>
          <p className='mb-2 text-[12px] text-red-500 px-5'>{error}</p>
          <button className="bg-blue-500 text-white rounded-md px-4 py-1 my-3 cursor-pointer"
          onClick={() => {handleSignup()}}
          >
            SignUp
          </button>
        </div>
        <h3 className="px-5 py-5 font-bold text-[15px]">Already have account? {' '}
        <button onClick={() => router.push('/')} className="text-red-500 cursor-pointer">Login</button></h3>
      </div>

      <div className="relative">
<input
className="bg-transparent border-2 border-gray-700 dark:border-gray-200 px-3 py-2 rounded-md"
type={showPassword1 ? "text" : "password"}
name="password"
id="password"
/>

          
        </div>
    </div>
  )
}

export default SignUp