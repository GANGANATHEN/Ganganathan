import React, { useState, useEffect } from 'react';
import { store } from "./Data/index";
import "./style.css";
import { GoHeart } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { useStore } from './Data/store';

const Store = ({ search }) => {
  const [data, setData] = useState(store);
  const [favorites, setFavorites] = useState(() => {
    const jsonValue = localStorage.getItem('favorites');
    return jsonValue ? JSON.parse(jsonValue) : [];
  });

  const { sharedState } = useStore();

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (!sharedState || sharedState.trim() === "") {
      setData(store);
    } else {
      const filtered = store.filter(item =>
        item.cardtitle.toLowerCase().includes(sharedState.toLowerCase())
      );
      console.log("filter data",filtered);
      
      setData(filtered);
    }
  }, [sharedState]);

  const handleFav = (item) => {
    const alreadyFav = favorites.some(fav => fav.id === item.id);
    const updatedFavorites = alreadyFav
      ? favorites.filter(fav => fav.id !== item.id)
      : [...favorites, item];

    setFavorites(updatedFavorites);
  };

  return (
    <div className='container--1 flex grid grid-cols-3 gap-4 p-4'>
      {data.map((item) => (
        <div key={item.id} className='box shadow rounded-xl overflow-hidden'>
          <div className='p-4'>
            <div className='flex justify-between'>
              <h1 className='font-bold'>{item.cardtitle}</h1>
              <button onClick={() => handleFav(item)} className="text-red-400">
                {favorites.some(fav => fav.id === item.id)
                  ? <FaHeart className='text-[25px]' />
                  : <GoHeart className='text-[25px]' />}
              </button>
            </div>

            <p className='py-4 text-[14px] font-[30rem]'>{item.detail}</p>

            {item.size.map((size, index) => (
              <div key={index} className='flex gap-3 items-center font-medium text-[14px]'>
                Size:
                <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.xs}</span>
                <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.s}</span>
                <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.m}</span>
                <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.l}</span>
                <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.xl}</span>
                <span className='bg-gray-800 text-white font-bold py-0.8 px-1 rounded-md'>{size.xxl}</span>
              </div>
            ))}

            {item.color.map((color, index) => (
              <h3 key={index} className='flex gap-3 font-medium text-[14px] py-4'>
                Color:
                <span style={{ backgroundColor: color.color1 }} className='bg-width rounded-md w-6 h-6'></span>
                <span style={{ backgroundColor: color.color2 }} className='bg-width rounded-md w-6 h-6'></span>
                <span style={{ backgroundColor: color.color3 }} className='bg-width rounded-md w-6 h-6'></span>
                <span style={{ backgroundColor: color.color4 }} className='bg-width rounded-md w-6 h-6'></span>
                <span style={{ backgroundColor: color.color5 }} className='bg-width rounded-md w-6 h-6'></span>
              </h3>
            ))}

            <h3 className='font-medium text-[14px]'>
              Price: <span className='font-normal text-[15px]'>{item.price}</span>
            </h3>
          </div>

          <div className='flex font-bold justify-center text-gray-200 items-center bg-gray-500 h-[150px]'>
            Image gap
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
