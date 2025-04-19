"use client"
import React,{createContext, useState} from 'react'
import Contact from './contact'
export const userText = createContext("")

const home = () => {
    const [text, setText] = useState("ddd")
  return (
    <div className='m-10'>
      <userText.Provider value={text}>
        <input className='border-2' type="text" onChange={(e)=>setText(e.target.value)}/> <br/>
        hlo home {text}
      <Contact/>
      </userText.Provider>
    </div>
  )
}

export default home
