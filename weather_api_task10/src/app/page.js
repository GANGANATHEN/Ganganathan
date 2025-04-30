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
    <div className="w-full flex p-7 gap-4 text-white">
      <div className="bg-col w-[7%] rounded-3xl p-5 shadow-sm">
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

      <div className="w-[93%]">
        <div className="relative flex justify-between items-center">
          <input
            type="text"
            className=" outline-none bg-col py-3 px-[7%] rounded-3xl shadow-sm w-[50%] text-secondery"
            placeholder="Search City..."
          />
          <Image
            className="absolute top[10%] left-[2%]"
            src="/assets/user/search.svg"
            width={25}
            height={25}
            alt="up.svg"
          />
          <div className="w-[30%] flex justify-between  bg-col rounded-3xl py-3 px-4">
            <div className="flex justify-between gap-2">
              <Image
                className="img-bg rounded-4xl p-1"
                src="/assets/user/up.svg"
                width={25}
                height={25}
                alt="up.svg"
              />
              <p className="text-[14px]">username</p>
            </div>

            <Image
              src="/assets/user/d-arrow.svg"
              width={15}
              height={15}
              alt="up.svg"
            />
          </div>
        </div>
        <div className="flex justify-between w-fulln gap-7 mt-5">
          <div className="w-1/2 bg-col p-4 rounded-3xl">
            <div className="w-full flex justify-between ">
              <div className="">
                <div className="flex p-2 rounded-2xl justify-start img-bg">
                <Image
                  src="/assets/user/location.svg"
                  width={15}
                  height={15}
                  alt="up.svg"
                />
                <p>india</p>
                </div>

                <h2 className="text-[40px]">Monday</h2>
                <p className="text-[16px]">24 Dec, 2023</p>

                <h1 className="text-[64px]">26 * C</h1>
                <p>High: 27 Low: 10</p>
              </div>
              <div className="w-[50%]">2</div>
            </div>
            <div className="w-1/2 bg-col">
              <div className="w-full flex justify-between">
                <div className="w-[80%]">1</div>
                <div className="w-[20%]">2</div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mt-3 flex flex-col gap-y-2 ">
            <div className="sec-bg">div 3</div>
            <div>div 4</div>
            <div className="bg-col flex">
              <div className="">div 1</div>
              <div>div 2</div>
              <div>div 3</div>
              <div>div 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
