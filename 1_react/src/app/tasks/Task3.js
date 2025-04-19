"use client"
import React from 'react'
import { useState } from 'react';


function ChildA({onDataChange,pcount}){

  const handleClick = () => {
    onDataChange(pcount+1)
  }
  
  return(
      <div>
          <button onClick={handleClick}>Child</button>
          <p>{pcount}</p>
      </div>
  )
}

function Task2(){
    const [count, setCount] = useState(0)

  function handleDataFromChild(count){
    setCount(count)
  }
  return (
    <div>
      <button >Parent {count}</button>
      <ChildA pcount={count} onDataChange={handleDataFromChild}/>
    </div>
  )
}

export default Task2
