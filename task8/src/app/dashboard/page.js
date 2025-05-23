"use client"
import React, { useEffect,useState } from 'react'
import { useRouter} from 'next/navigation'

const Dashboard = () => {

    const router = useRouter()

    // const [loginData, setLoginData] = useState({})
    const userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];

    
    // useEffect(() => {
    //     // setLoginData(userInfo);
    //     console.log(userInfo);
    // }, []);
    

  return (
    <div>
        <div className='bg-gray-100 w-[40%] mx-[30%] my-[10%] rounded-md shadow-lg 
        border-2 border-gray-300'>
            <h1 className='text-center py-3 font-bold border-b-2 border-gray-300'>DASHBOARD</h1>
            <div className='p-5'>
                {/* <h3>User Email </h3>
                <h3>User Password </h3> */}
                {userInfo.map((item, index) => (
                    <div key={index} className='border-b-2 border-gray-300 py-2'>
                        <h3>User Email {item.email}</h3>
                        <h3>User Password {item.password}</h3>
                    </div>
                ))}

                <button className="bg-blue-500 text-white rounded-md px-4 py-1 my-3"
                onClick={() => router.push('/')}
                >
                    Logout
                </button>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
