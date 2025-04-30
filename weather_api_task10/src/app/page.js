"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();

  function handleSearch() {
    console.log(city);
    setCityName(city);
    console.log("city name", cityName);
  }
  function handleDemo() {
    console.log(weatherData[0]);
  }

  useEffect(() => {
    const fetchWeatherData = async (city) => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6b0db3384a74beb18811937675047b4c`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, [cityName]);

  return (
    <div className="w-full flex flex-row p-7 gap-4 text-white">
      <div className="bg-col w-[10%] rounded-3xl p-5 flex flex-col shadow-sm">
        <div className="flex flex-col justify-center  items-center text-center gap-2">
          <Image
            src="/assets/main/bijli.svg"
            width={25}
            height={25}
            alt="bijli.svg"
          />
          <p className="text-xs">SkySense</p>
        </div>

        <div className="flex flex-col items-center gap-y-5 mt-[60%]">
          <Image src="/assets/main/1.svg" width={25} height={25} alt="1.svg" />
          <Image src="/assets/main/2.svg" width={25} height={25} alt="2.svg" />
          <Image src="/assets/main/3.svg" width={25} height={25} alt="3.svg" />
          <Image src="/assets/main/4.svg" width={25} height={25} alt="4.svg" />
          <Image src="/assets/main/5.svg" width={25} height={25} alt="5.svg" />
        </div>

        <div className="flex flex-col gap-y-5 mt-[230%] items-center">
          <Image
            src="/assets/main/quitw.svg"
            width={25}
            height={25}
            alt="quitw.svg"
          />
          <Image
            src="/assets/main/moon.png"
            width={25}
            height={25}
            alt="moon.png"
          />
        </div>
      </div>

      <div className="w-[90%]">
        <div className="flex justify-between">
          <input type="text" className="relative outline-none bg-col py-4 px-[5%] rounded-3xl shadow-sm w-[50%] text-secondery" placeholder="Search City..."/>
          <div className="flex ">
            <p>logo</p>
            <p>username</p>
            <p>arrow</p>
          </div>
        </div>
        <div>
          div 2
        </div>
      </div>
    </div>
  );
}
