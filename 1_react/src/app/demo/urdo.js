import React from 'react'

const urdo = () => {

    const [data, setData] = useState([])
  return (
    <div>
        <div className='mt-20 px-30'>
        <input className='border-2' type='text' onChange={()=>setData()}></input> <br></br>
        <br></br>
        <input className='border-2' type='text'></input><br></br> <br></br>
        <button className='border-2 p-2'>save</button>
      </div>
    </div>
  )
}

export default urdo
