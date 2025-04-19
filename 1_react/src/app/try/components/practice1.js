import React from 'react'
import P1_child from './p1_child'

const practice1 = () => {
  
  const data = [
    {
      name:"a",
      address:"aa",
      place:"aaa"
    },
    {
      name:"b",
      address:"bb",
      place:"bbb"
    },
    {
      name:"c",
      address:"cc",
      place:"ccc"
    },
  ]
  return (
    <div>
    hi
      <P1_child info={data}/>
    </div>
  )
}

export default practice1
