import React,{useState} from 'react'
import './style.css'

const task7 = () => {

    const [text, setText] = useState("")
    const [color, setColor] = useState("bg-red-300")
    const [alert, setAlert] = useState("")
    const [logic, setLogic] = useState(false)
    const [data, setData] = useState([])

    function handleData(list){
        if(text===""){
            setAlert("This field is required.")
        }else{
            setAlert("")
            setData(prevState => [...prevState, {
                id: prevState.length,
                text: text,
                color:color
            }])
            setText("")
        }
    }

    function handleCancel(){
        setLogic(false)
        setText("")
    }

    function handleDelete(){
        console.log(text);
        setData(data.filter(item => item.id !== id))
        setLogic(false)
        setText("")
    }

    const [id, setId] = useState("")
    
    function handleTouch(list,a){
        setId(a)
        console.log("id",id);
        setLogic(true)
        setText(list.text)
        setColor(list.color)
    }

    function handleEdit(){
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, text: text, color: color } : item
        );
        setData(updatedData) 
    }

  return (
    <div className='flex justify-center mt-20'>
      <div className='p-4 shadow-2xl shadow-gray-400 w-[35%] rounded-2xl bg-gray-100'>
        <input className='px-3 border-2 text-gray-500 disabled:text-gray-500 h-10 rounded-lg border-gray-300 focus:ring-gray-500  focus:border-gray-500'
                placeholder='Input' type="text"  value={text}
                onChange={(e)=>setText(e.target.value)}
                 />
        {logic ? "" : <button className='bg-sky-500 h-10 ml-3 text-white hover:bg-sky-700 px-4 rounded-lg'
                onClick={()=>handleData()}>Save</button>}
        
        <p className='text-red-700'>{alert}</p>
        <div className='flex gap-3 my-3'>
            <button onClick={()=>setColor("bg-gray-700")} className='hover:scale-110 color-width bg-gray-700'></button>
            <button onClick={()=>setColor("bg-violet-700")} className='hover:scale-110 color-width bg-violet-700'></button>
            <button onClick={()=>setColor("bg-green-400")} className='hover:scale-110 color-width bg-green-400'></button>
            <button onClick={()=>setColor("bg-sky-600")} className='hover:scale-110 color-width bg-sky-600'></button>
            <button onClick={()=>setColor("bg-green-700")} className='hover:scale-110 color-width bg-green-700'></button>
            <button onClick={()=>setColor("bg-gray-500")} className='hover:scale-110 color-width bg-gray-500'></button>
            <button onClick={()=>setColor("bg-red-500")} className='hover:scale-110 color-width bg-red-500'></button>
            <button onClick={()=>setColor("bg-yellow-500")} className='hover:scale-110 color-width bg-yellow-500'></button>
            <button onClick={()=>setColor("bg-red-800")} className='hover:scale-110 color-width bg-red-800'></button>
            <button onClick={()=>setColor("bg-orange-400")} className='hover:scale-110 color-width bg-orange-400'></button>
            <button onClick={()=>setColor("bg-pink-300")} className='hover:scale-110 color-width bg-pink-300'></button>
            <button onClick={()=>setColor("bg-lime-700")} className='hover:scale-110 color-width bg-lime-700'></button>
        </div>
        {/* <button className={`${color} text-white rounded-[24px] px-3`}>{data}</button> */}
        <div className='inline-block my-3'>
            {data.map((list)=>(
                <button key={list.id}  className={`${list.color} m-1 text-white rounded-[24px] px-3`}
                    onClick={()=>handleTouch(list,list.id)}
                >{list.text}</button>
            ))}
        </div>
        { logic ? <div className='flex justify-end gap-3'>
            <button className='text-yellow-400 px-2 rounded-lg border-2 border-yellow-400'
                onClick={()=>handleCancel()}
            >Cancel</button>
            <button className='text-red-600 px-2 rounded-lg border-2 border-red-600'
                onClick={()=>handleDelete()}
            >Delete</button>
            <button className='text-blue-600 px-2 rounded-lg border-2 border-blue-600'
                onClick={()=>handleEdit()}
            >Edit</button>
        </div> : "" }
        
      </div>
    </div>
  )
}

export default task7
