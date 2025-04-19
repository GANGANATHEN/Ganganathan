"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation";


// import { createContext } from 'react';

// const MyContext = createContext(null);


const Mainpage = ({ children }) => {
  
    const router = useRouter();
    const data = {
        name: "John Doe",
        age: 30,
      };
    //   const dummy = JSON.stringify(data)
    // const handleClick = () => {
    //   const data = {
    //     name: "John Doe",
    //     age: 30,
    //   };
  
    //   router.push(`/about?name=${data.name}&age=${data.age}`);
    // };
  return (
    <div>
    <Link
      href={{
        pathname: '/about',
        query: {data1: JSON.stringify(data)},
      }}
    >
      About
    </Link>
    {/* <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider> */}
       {/* <button onClick={handleClick}>
      Go to Other Page with Data
    </button> */}
    </div>
  )
}

export default Mainpage
