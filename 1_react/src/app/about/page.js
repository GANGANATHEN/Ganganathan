"use client"
import React from 'react'
import { useSearchParams } from "next/navigation";
// import { useContext } from 'react';

const About = () => {
  // const data = useContext(MyContext);
  const searchParams = useSearchParams();
  const nam = searchParams.get("name");
  console.log(nam);
  
  // const age = searchParams.get("age");
  return (
    // <div>
    //     {data && (
    //       <>
    //         <p>Name: {data.name}</p>
    //         <p>Age: {data.age}</p>
    //       </>
    //     )}
    //   </div>
    <div>
    <h1>Other Page</h1>
    <p>Name: {nam}</p>
    {/* <p>{data.message}</p> */}
    {/* <p>Age: {age}</p> */}
  </div>
  )
}

export default About
