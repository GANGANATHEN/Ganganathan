"use client"
import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
// import Store from './Store';
import { useStore } from './Data/store';
// import {store} from "./Data"


const Main = () => {

  

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const [list, setlist] = useState(["apple", "banana", "cherry"])
  const filteredList = list.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // const [data, setData] = useState(Store);
  
  const [searchData, setSearchData] = useState("")

  const { sharedState, setSharedState } = useStore();
  
  const [active, setActive] = useState("")
  const [check, setcheck] = useState({
    about:"About",
    home:"Home",
    store:"Store",
    favorite:"Favourites"
  })
  
  function handleData(){
    setSharedState(searchData)
    console.log(sharedState)
  }

  return (
    <div>
    
      <nav className='d-flex justify-between px-10 items-center py-3 bg-black'>
        <div className='flex justify-between text-white items-center'>
          <h3 className={`${
                active === check.home ? "text-white" : "text-gray-400"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Home")}><Link to="/Home">Home</Link></h3>
          <h3 className={`${
                active === check.about ? "text-white" : "text-gray-400"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("About")} ><Link to="/About">About</Link></h3>
          <h3 className={`${
                active === check.store ? "text-white" : "text-gray-400"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Store")}><Link to="/Store" >Store</Link></h3>
          <h3 className={`${
                active === check.favorite ? "text-white" : "text-gray-400"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Favourites")}><Link to="/Favourite">Favourite</Link></h3>
          <div className={`${
                active === check.store ? "visible" : "invisible"
              } flex justify-between gap-3`}>
            <input className='bg-white rounded-lg transform focus:outline-blue-300 text-black px-4' placeholder='Search....' type='text'
              value={searchData} onChange={(e)=>setSearchData(e.target.value)} ></input>
            <button className='bg-gray-700 px-3 py-2 border-2 hover:text-blue-300 active:text-blue-500 duration-200 text-blue-400 rounded-md ocus:outline-none focus:ring-blue-200'
              onClick={()=>{handleData()}}>Search</button>         
          </div>
        </div>
      </nav>
      <div className='px-5 py-5'>
        <Outlet />
        <div>
      
    </div>
    {/* <div>
    <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <ul>
            {filteredList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
    </div> */}
        {/* <div >
        <Store search={searchData}/>
        </div> */}
      </div>
    </div>
  )
}

export default Main
