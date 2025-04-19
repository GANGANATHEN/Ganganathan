import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { FaHeart } from "react-icons/fa";

const Favourites = () => {

  const [items, setItems] = useState([]);
  // let [changeColor, setChangeColor] = useState(false);
  // const [fav, setFav] = useState()

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('favorites'));
  if (items) {
   setItems(items);
  }
}, []);
  // function handleCheck(){
  //   console.log(items)
  // }
  function handleRemove(item){
    // handleCheck()
    // setChangeColor(!changeColor);
    console.log(item)
    const existingItems = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedItems = existingItems.filter(items => items.id !== item.id);
    localStorage.setItem("favorites", JSON.stringify(updatedItems));
    setItems(updatedItems);
  }

  const navigate = useNavigate()
  return (
    <div className='py-7'>
      {/* <button onClick={()=>handleCheck()}>check</button> */}
      {items==0 ? <div>      <h1 className='text-gray-400'>You have not saved any products</h1>
        <button className='bg-red-500 text-white font-medium px-2 py-1 rounded-[7px] mt-5' onClick={()=>navigate("/Store")}>Go to store</button></div> : <div className='container--1 flex grid grid-cols-3 gap-4'>
        {items.map((item)=>
          <div key={item.id} className='box shadow rounded-xl overflow-hidden'>
                <div className='p-4'>
                  <div className='flex justify-between'>
                      <h1 className='font-bold'>{item.cardtitle}</h1>
                      <button 
                      className={"text-red-400"}
              onClick={() => handleRemove(item)}>
              <FaHeart className='text-[25px]'/>
              {/* <FaHeart className={`${changeColor ? "text-gray-400" : "text-red-400"} text-[25px]`} /> */}
                      {/* {changeColor ? <GoHeart className='text-[25px]' /> : <FaHeart className='text-[25px]'/>} */}
                      </button>
                  </div>
                  <p className='py-4 text-[14px] font-[30rem]'>{item.detail}</p>
                  {item.size.map((size)=>
                    <div key={size.id} className='flex gap-3 items-center font-medium text-[14px]'>Size :
                    <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.xs}</span>
                    <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.s}</span>
                    <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.m}</span>
                    <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.l}</span>
                    <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.xl}</span>
                    <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.xxl}</span>
                  </div>
                  )}
                  {item.color.map((color)=>
                    <h3 key={color.id} className='flex gap-3 font-medium text-[14px] py-4'>Color :
                    <span style={{ backgroundColor:color.color1}} className='bg-width rounded-md'></span>
                    <span style={{ backgroundColor:color.color2}} className='bg-width rounded-md'></span>
                    <span style={{ backgroundColor:color.color3}} className='bg-width rounded-md'></span>
                    <span style={{ backgroundColor:color.color4}} className='bg-width rounded-md'></span>
                    <span style={{ backgroundColor:color.color5}} className='bg-width rounded-md'></span>
                  </h3>
                  )}
                  
                  <h3 className='font-medium text-[14px]'>Price : &nbsp;<span className='font-normal text-[15px]'>{item.price}</span></h3>
                </div>
                <div className='flex font-bold justify-center text-gray-200 items-center bg-gray-500 h-[150px]'>
                  Image gap
                </div>
            </div>
        )}
      </div> }
    </div>
  )
}

export default Favourites
