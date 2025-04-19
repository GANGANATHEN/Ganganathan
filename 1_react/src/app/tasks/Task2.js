"use client"
import React from 'react'
import { useState } from 'react';


function ChildA({handleClick,count}){
  
  return(
      <div>
          <button onClick={handleClick}>Child {count}</button>
          {/* <p>{count}</p> */}
          {/* <Task2 count={pcount} /> */}
      </div>
  )
}

function Task2(){
    const [ccount, setCcount] = useState(0)
    const [data, setData] = useState(0)

  function handleDataFromChild(){
    setData(data+1)
  }
  return (
    <div>
      <button onClick={()=>setCcount(ccount+1)}>Parent {data}</button>
      <ChildA count={ccount} handleClick={handleDataFromChild}/>
    </div>
  )
}

export default Task2
