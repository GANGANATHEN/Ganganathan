"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState();

  function handleSearch() {
    const input1 = document.querySelector("input");
    console.log(city);
    setCityName(city);
    console.log("city name", cityName);
    setCity("");
    input1.value = "";
  }
  function handleDemo() {
    console.log(weatherData[0]);
  }
  function handleTheme() {
    console.log("yes i'm handleTheme");
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
    <section className="w-full flex p-7 gap-4 text-white">
      {/* side bar */}
      <div className="bg-col flex flex-col rounded-4xl shadow-sm ">
        <div className="flex flex-col  p-7  items-center text-center gap-2">
          <Image
            className="mt-6"
            src="/assets/main/menu.svg"
            width={18}
            height={12}
            alt="bijli.svg"
          />
        </div>

        <div className="icon-col border-gradient border-gradient-gray only-top pt-7 flex flex-col items-center gap-y-7 ">
          <Link href="/">
            <Image
              clas
              src="/assets/main/1.svg"
              width={20}
              height={20}
              alt="1.svg"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/main/2.svg"
              width={20}
              height={20}
              alt="2.svg"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/main/3.svg"
              width={20}
              height={20}
              alt="3.svg"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/main/4.svg"
              width={20}
              height={20}
              alt="5.svg"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/main/5.svg"
              width={20}
              height={20}
              alt="5.svg"
            />
          </Link>
        </div>

        <div className="mt-[300%] p-7 border-gradient border-gradient-gray only-top flex flex-col items-center">
          <Link href="/">
            <Image
              className="mb-6"
              src="/assets/main/6.svg"
              width={20}
              height={20}
              alt="5.svg"
            />
          </Link>
        </div>
      </div>

      {/* main contents */}
      <div className="w-[90%]">
        {/* main top-bar contents */}
        <div className="flex justify-between items-center">
         {/* user name  */}
          <div className="w-[50%]">
            <h1 className="text-[18px]">
              Hi, Kajal{" "}
              <span className="block text-[24px] font-semibold">
                Good Morning
              </span>
            </h1>
          </div>
          {/* search and user profile  */}
          <div className="flex justify-between gap-x-7 items-center relative">
            {/* search bar  */}
            <input
              type="text"
              name={city}
              className=" outline-none bg-col py-3 pl-[15%] rounded-3xl shadow-sm text-secondery"
              placeholder="Search City..."
              onChange={(e) => setCity(e.target.value)}
            />
            <Image
              className="absolute bottom-3 left-[5%] cursor-pointer active:text-white"
              src="/assets/user/search.svg"
              width={25}
              height={25}
              alt="up.svg"
              onClick={() => handleSearch()}
            />

            {/* theme change  */}

            <label
              className="inline-flex items-center cursor-pointer"
              onClick={() => handleTheme()}
            >
              <input type="checkbox" value="" class="sr-only peer" />

              <div className="relative w-20 h-10 bg-red-100 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[7px] after:bg-white  after:border after:rounded-full after:h-9 after:w-9 after:transition-all dark:border-gray-600 peer-checked:bg-blue-100 dark:peer-checked:bg-blue-100">
                <Image
                  className="absolute bottom-[25%] left-[60%]"
                  src="/assets/user/moon.svg"
                  width={20}
                  height={20}
                  alt="up.svg"
                  onClick={() => handleSearch()}
                />
                <Image
                  className="absolute bottom-[25%] left-[20%]"
                  src="/assets/user/sun.svg"
                  width={20}
                  height={20}
                  alt="up.svg"
                  onClick={() => handleSearch()}
                />
              </div>
            </label>

              {/* user profile */}

            <div className="flex justify-between gap-x-5">
              <Image
                src="/assets/user/profile.svg"
                width={55}
                height={55}
                alt="up.svg"
                onClick={() => handleSearch()}
              />
              <Image
              className="cursor-pointer"
                src="/assets/user/arrow.svg"
                width={15}
                height={15}
                alt="up.svg"
                onClick={() => handleSearch()}
              />
            </div>
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
    </section>
  );
}
