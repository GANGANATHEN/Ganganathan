"use client"
import React,{useEffect, useState} from "react";

export default function Home() {

  const [data, setData] = useState([
    {
      id: 0,
      data1: "data1"
    },
    {
      id: 1,
      data1: "data2"
    },
    {
      id: 2,
      data2: "data3"
    }
  ])
  const [undo, setUndo] = useState("")
  // const [redo, setRedo] = useState("")

  const [udoCount, setUdoCount] = useState(data.length-1)


  useEffect(() => { 
    setUdoCount(data.length-1)
  }
  , [data])


  // console.log(data);


  function handleData1() {
    const data1 = document.querySelector('input[type="text"]').value;
    if(data1===""){
      alert("This field is required.")
    }else{
      setData(prevState => [...prevState, {
        id: prevState.length,
        data1: data1
      }])
      console.log("else data1",data1);
    }
  console.log("fun data1",data1);
  
  }

  function handleData2() {
    const data2 = document.querySelectorAll('input[type="text"]')[1].value;
    if(data2===""){
      alert("This field is required.")
    }else{
      setData(prevState => [...prevState, {
        id: prevState.length,
        data2: data2
      }])
      console.log("else data2",data2);
    }
  console.log("fun data2",data2);
  
  }

  // console.log("final",data[0]);
  // let rdo=0

  const [rdoCount, setRdoCount] = useState(0)
  let udo=data.length-1

  function handleUndo() {
    console.log("us",udoCount);
    const a = ("undo",data[`${udoCount}`].data1);
    setUdoCount(prevState => prevState - 1)
    setUndo(a)
    // const filtered = data.filter(item =>
    //     item.toLowerCase().includes(a.toLowerCase())
    //   );
    // console.log("filtered",filtered);
    
    console.log("ue",udoCount);
  }
  function handleRedo() { 
    console.log("rs",udoCount); 
    setUdoCount(prevState => prevState + 1)
    const a = ("undo",data[`${udoCount}`].data1);
    setUndo(a)
    console.log("re",udoCount); 
  }

  

  return (
    <div>
        <div className='mt-20 px-30'>
        <input className='border-2' type='text'></input> 
        <button className='border-2 px-1 mx-2' onClick={()=>handleData1()}>save</button>
         <br></br>
        <br></br>
        <input className='border-2' type='text'></input>
        <button className='border-2 px-1 mx-2' onClick={()=>handleData2()}>save</button>
        <br></br>
        <div className="flex gap-3 my-2">
          <button className='border-2 px-1 mx-2' onClick={()=>handleUndo()}>Undo</button>
          <button className='border-2 px-1 mx-2' onClick={()=>handleRedo()}>Redo</button>
        </div>
        <div className='flex gap-3 my-3'>
          {data.map((item) => (
            <div key={item.id} className='border-2 px-1 mx-2'>{item.data1}{item.data2}</div>
          ))}
        </div>
        {/* <p>undo = {redo}</p> */}
        <p>{undo}</p>
      </div>

    </div>
  );
}
