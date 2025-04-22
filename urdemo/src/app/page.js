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

  console.log(data);


  const data1 = document.querySelector('input[type="text"]');

  function handleData1() {
  const data0 = document.querySelector('input[type="text"]').value;
    if(data0===""){
      alert("This field is required.")
    }else{
      setData(prevState => [...prevState, {
        id: prevState.length,
        data1: data0
      }])
      console.log("else data1",data0);
    }
  console.log("fun data1",data0);
  
  }

  function handleData2() {
  const data01 = document.querySelectorAll('input[type="text"]')[1];
    if(data01===""){
      alert("This field is required.")
    }else{
      setData(prevState => [...prevState, {
        id: prevState.length,
        data2: data01
      }])
      console.log("else data2",data01);
    }
  console.log("fun data2",data01);
  
  }

  const data2 = document.querySelectorAll('input[type="text"]')[1];

  // function handleUndo() {
  //   console.log("us",udoCount);
  //   setUdoCount(prevState => prevState - 1)
  //   if(data[`${udoCount}`].data1){
  //     data1.value = data[`${udoCount}`].data1
  //     data2.value = ""
  //   }else{
  //     data2.value = data[`${udoCount}`].data2
  //     data1.value = ""
  //   }
  //   console.log("ue",udoCount);
  // }

  function handleUndo() {
    const newIndex = udoCount - 1;
    if (newIndex >= 0) {
      setUdoCount(newIndex);
      const currentData = data[newIndex];
      if (currentData.data1) {
        input1Ref.current.value = currentData.data1;
        input2Ref.current.value = "";
      } else {
        input2Ref.current.value = currentData.data2;
        input1Ref.current.value = "";
      }
    }
  }

  function handleRedo() { 
    console.log("rs",udoCount); 
    setUdoCount(prevState => prevState + 1)
    if(data[`${udoCount}`].data1){
      data1.value = data[`${udoCount}`].data1
      data2.value = ""
    }else{
      data2.value = data[`${udoCount}`].data2
      data1.value = ""
    }
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
