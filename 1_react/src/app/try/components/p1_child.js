import React from 'react'

const p1_child = (props) => {
  return (
    <div>
      {data.map((dat,index)=>(
        <div key={index}>
            <h1>{props.dat.name}</h1>
        </div>
      ))}
      child
    </div>
  )
}

export default p1_child
