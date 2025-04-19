'use client'
import { useContext, useState } from 'react'
import { createContext } from 'react'
import Link from 'next/link'
 

export const ThemeContext = createContext({})

export default function ThemeProvider({ children }) {
    const [l, setl] = useState("hii g from use context")
    const [searchData, setsearchData] = useState("")
    const [data, setData] = useState("")
    function handleData(){
      setData(searchData)
      console.log("search",searchData);
      console.log("data",data); 
    }
  return (
    <div>
      <nav className="flex gap-4 border-red-300 border-2 py-3 px-2">
        <Link className="text-red-500" href="./home">Home</Link>
        <Link className="text-red-500" href="./about">About</Link>
        <input className='border-2 border-red-300' onChange={(e)=>setsearchData(e.target.value)}/>
        <button onClick={handleData} className='border-2 p-1 text-[12px]'>Search</button>
      </nav>
    <ThemeContext.Provider value={{l,data}}  >
  {children}</ThemeContext.Provider>
    </div>
  )
}

export function useSearch(){
  return useContext(ThemeContext)
}

