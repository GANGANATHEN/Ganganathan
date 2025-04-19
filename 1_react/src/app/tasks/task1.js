import React from 'react'


function ChildA({isTrue}){
    return(
        <div>
            <p>para1</p>
            {isTrue && <p>para 2</p>}
        </div>
    )
}

const task1 = () => {
  return (
    <div>
      parent
      {/* <ChildA {...para} isTrue={true}/> */}
      {/* <ChildA isTrue={true}/> */}
      <ChildA isTrue={false}/>
    </div>
  )
}

export default task1
