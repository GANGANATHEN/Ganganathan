'use client'
import React,{useEffect} from 'react'
import { useRouter } from 'next/navigation'
import {useSearch} from "../theme-provider"

const About = () => {
  const router = useRouter();
  const {l,data} = useSearch();
  
  useEffect(() => {
    console.log("data",data);
    console.log(l);
  });

  return (
    <div>
      <span className='text-blue-400'>search data = {' '}
      {data} {' '}</span>
      About page{' '}
      <span className='text-blue-400'>normal Data {l}{' '}</span>
      <br/>
      <button className="text-red-300" onClick={()=>router.push("/about/details")}>Details</button>{' '}
      <button className="text-red-300" onClick={()=>router.push("/about/product")}>Product</button>
    </div>
  )
}

export default About
