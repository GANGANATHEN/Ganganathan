"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("Thousand Lights");
  const [weatherData, setWeatherData] = useState();
  const [weatherDataList, setWeatherDataList] = useState([]);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const numbers = ["Australia", "Japan"];
  const allData = [];

  useEffect(() => {
    const fetchWeatherData = async () => {
      for (const city of numbers) {
        try {
          const url = `https://api.weatherapi.com/v1/forecast.json?key=fbd09534ac13463aad5115428250205&q=${city}&days=5&aqi=no&alerts=no`;
          const response = await fetch(url);
          const data = await response.json();
          allData.push({ data });
        } catch (error) {
          console.log(`Error fetching for ${city}:`, error);
        }
        // console.log("i'm still alive");
      }
      setWeatherDataList(allData);
      console.log(allData);
      
    };

    fetchWeatherData();
  }, []);

  function handleSearch() {
    const input1 = document.querySelector("input");
    // console.log(city);
    setCityName(city);
    // console.log("city name", cityName);
    setCity("");
    input1.value = "";
  }


  function handleDemo() {
    console.log("current cityName", weatherData.location.name);
    console.log("feature", new Date(1746256500).getUTCDay());
  }
  function handleTheme() {
    console.log("yes i'm handleTheme");
  }
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=fbd09534ac13463aad5115428250205&q=${cityName}&days=7&aqi=no&alerts=no`;
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
      <div className="bg-col flex flex-col rounded-4xl shadow-sm justify-between">
        <div className="border-gradient border-gradient-gray only-bottom flex flex-col  p-7  items-center text-center gap-2">
          <Image
            className="mt-6"
            src="/assets/main/menu.svg"
            width={18}
            height={12}
            alt="bijli.svg"
          />
        </div>

        <div className="icon-col pt-7 flex flex-col items-center gap-y-7 ">
          <Link href="/">
            <Image
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
              alt="4.svg"
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
        {/* demo button  */}
        {/* <button
          className="z-1 border-1 bg-red-700"
          onClick={() => handleDemo()}
        >
          demo
        </button> */}
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
              alt="search.svg"
              onClick={() => handleSearch()}
            />

            {/* theme change  */}

            <label
              className="inline-flex items-center cursor-pointer"
              onClick={() => handleTheme()}
            >
              <input type="checkbox" value="" className="sr-only peer" />

              <div className="relative w-20 h-10 bg-col peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[5px] secondary-btn after:rounded-full after:h-9 after:w-9 after:transition-all after:shadow-sm">
                <Image
                  className="absolute bottom-[25%] left-[60%]"
                  src="/assets/user/moon.svg"
                  width={20}
                  height={20}
                  alt="up.svg"
                />
                <Image
                  className="absolute bottom-[25%] left-[20%]"
                  src="/assets/user/sun.svg"
                  width={20}
                  height={20}
                  alt="up.svg"
                />
              </div>
            </label>

            {/* user profile */}

            <div className="flex justify-between gap-x-5">
              <Image
                src="/assets/user/profile.svg"
                width={55}
                height={55}
                alt="profile.svg"
              />
              <Image
                className="cursor-pointer"
                src="/assets/user/arrow.svg"
                width={15}
                height={15}
                alt="arrow.svg"
              />
            </div>
          </div>
        </div>

        {/* main weather data  */}
        <div className="w-full flex gap-x-6">
          <div className="w-[40%]  flex flex-col gap-y-4 mt-4">
            {/* show location and cloud  */}
            <div className="bg-col rounded-3xl shadow-sm p-5 ">
              <div className="flex justify-between text-[18px]">
                <div className="flex gap-x-3 items-center">
                  <Image
                    src="/assets/user/location.svg"
                    width={20}
                    height={20}
                    alt="location"
                  />
                  <span>
                    {weatherData ? `${weatherData.location.name},` : ""}
                  </span>
                  <span>
                    {weatherData ? `${weatherData.location.country}` : ""}
                  </span>
                </div>
                <div className="flex gap-x-3 items-center">
                  <p>* C</p>
                  <Image
                    className="cursor-pointer"
                    src="/assets/user/w-arrow.svg"
                    width={20}
                    height={20}
                    alt="white arrow"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <div className="text-[36px]">
                  <h1>
                    {weatherData
                      ? weekday[
                          `${new Date(
                            weatherData.forecast.forecastday[0].date
                          ).getUTCDay()}`
                        ]
                      : "04 Aug,2024"}{" "}
                    <span className="block text-[16px]">
                      {weatherData
                        ? `${weatherData.forecast.forecastday[0].date}`
                        : "04 Aug,2024"}{" "}
                    </span>
                  </h1>
                </div>
                <div className="flex items-center text-center justify-center">
                  <Image
                    src="/assets/user/Rain cloud.svg"
                    width={100}
                    height={100}
                    alt="Rain Cloud"
                  />
                </div>
                <div className="flex flex-col gap-y-7">
                  <h1 className="text-[40px]">
                    {weatherData ? `${weatherData.current.temp_c}` : "0"}
                    °C{" "}
                    <span className="block t-col text-[24px]">
                      /
                      {weatherData ? `${weatherData.current.feelslike_c}` : "0"}
                      °C
                    </span>
                  </h1>
                  <p className="text-[20px]">
                    {weatherData
                      ? `${weatherData.current.condition.text}`
                      : "Heavy Rain"}{" "}
                    <span className="block text-[16px] t-col">
                      Feels like{" "}
                      {weatherData ? `${weatherData.current.cloud}` : "0"}°
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* other Countries  */}
            <div className="bg-col rounded-3xl shadow-sm p-5 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <p className="text-[24px]">Others Countries</p>
                <div className="text-[16px] flex gap-x-4 items-center">
                  <p>See All</p>
                  <Image
                    className="cursor-pointer"
                    src="/assets/user/w-arrow.svg"
                    width={16}
                    height={16}
                    alt="white arrow"
                  />
                </div>
              </div>
              {weatherDataList.map((item, index) => (
                <div
                  key={index}
                  className="secondary p-3 rounded-2xl flex justify-between"
                >
                  <div>
                    <p className="t-col text-[14px]">
                      {item.data.location.country}
                    </p>
                    <h1 className="text-[24px]">{item.data.location.name}</h1>
                    <p className="text-[14px]">
                      {item.data.current.condition.text}
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/assets/user/o-sun.svg"
                      width={70}
                      height={70}
                      alt="original sun"
                    />
                  </div>
                  <div>
                    <h1 className="text-[24px]">
                      {item.data.current.temp_c}°{" "}
                      <span className="t-col text-[18px]">
                        /{item.data.current.feelslike_c}°
                      </span>{" "}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[60%] flex flex-col gap-y-4">
            {/* Today’s Highlight    */}
            <div className="w-full bg-col p-5 rounded-3xl mt-4">
              <h1>Today’s Highlight</h1>
              <div className="w-full grid grid-cols-4 gap-4 mt-3">
                <div className="secondary p-3 rounded-2xl flex flex-col items-end">
                  <div className="flex gap-x-4 ">
                    <Image
                      src="/assets/user/wind.svg"
                      width={20}
                      height={20}
                      alt="wind"
                    />
                    <p className="text-[16px]">Wind Status</p>
                  </div>
                  <p className="text-[24px]">
                    {weatherData ? `${weatherData.current.wind_kph}` : "0"}{" "}
                    <span className="text-[14px]">km/h</span>
                  </p>
                  <p className="text-[14px]">
                    {weatherData
                      ? `${weatherData.forecast.forecastday[0].date}`
                      : "00.00 AM"}
                  </p>
                </div>
                <div className="secondary p-3 rounded-2xl flex flex-col items-end">
                  <div className="flex gap-x-4 ">
                    <Image
                      src="/assets/user/water.svg"
                      width={20}
                      height={20}
                      alt="wind"
                    />
                    <p className="text-[16px]">Humidity</p>
                  </div>
                  <p className="text-[24px]">
                    {weatherData ? `${weatherData.current.humidity}` : "0"}{" "}
                    <span className="text-[14px]">%</span>
                  </p>
                  <p className="text-[14px]">Humidity is good</p>
                </div>
                <div className="col-span-2 secondary p-3 rounded-2xl gap-x-7 flex justify-between items-center">
                  <Image
                    src="/assets/user/sunrise.svg"
                    width={70}
                    height={70}
                    alt="wind"
                  />
                  <p className="text-[16px]">
                    Sunrise{" "}
                    <span className="block text-[24px]">
                      {weatherData
                        ? `${weatherData.forecast.forecastday[0].astro.sunrise}`
                        : "00.00 AM"}
                    </span>
                  </p>
                </div>
                <div className="secondary p-3 rounded-2xl flex flex-col items-end">
                  <div className="flex gap-x-4 ">
                    <Image
                      src="/assets/user/uv.svg"
                      width={20}
                      height={20}
                      alt="wind"
                    />
                    <p className="text-[16px]">UV Index</p>
                  </div>
                  <p className="text-[24px]">
                    {weatherData ? `${weatherData.current.uv}` : "0"}{" "}
                    <span className="text-[14px]">UV</span>
                  </p>
                  <p className="text-[14px]">Moderate UV</p>
                </div>
                <div className="secondary p-3 rounded-2xl flex flex-col items-end">
                  <div className="flex gap-x-4 ">
                    <Image
                      src="/assets/user/eye.svg"
                      width={20}
                      height={20}
                      alt="wind"
                    />
                    <p className="text-[16px]">Visibility</p>
                  </div>
                  <p className="text-[24px]">
                    {weatherData ? `${weatherData.current.vis_km}` : "0"}{" "}
                    <span className="text-[14px]">km</span>
                  </p>
                  <p className="text-[14px]">
                    {weatherData
                      ? `${weatherData.forecast.forecastday[0].date}`
                      : "00.00 AM"}
                  </p>
                </div>
                <div className="col-span-2 secondary p-3 rounded-2xl flex justify-between items-center">
                  <Image
                    src="/assets/user/sunset.svg"
                    width={70}
                    height={70}
                    alt="wind"
                  />
                  <p className="text-[16px]">
                    Sunset{" "}
                    <span className="block text-[24px]">
                      {weatherData
                        ? `${weatherData.forecast.forecastday[0].astro.sunset}`
                        : "00.00 PM"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* 7 day forecast  */}
            <div className="bg-col rounded-3xl p-5">
              <h1 className="text-[24px]">5 Day Forecast</h1>

              {/* <div
                id="controls-carousel"
                class="relative w-full"
                data-carousel="static"
              > */}
                <div class="relative overflow-hidden rounded-lg md:h-56">
                  <div className="gap-x-5 flex mt-3">
                    {weatherData
                      ? weatherData.forecast.forecastday.map((data, index) => (
                          <div
                            key={index}
                            className="secondary flex flex-col gap-y-5 p-3 rounded-2xl items-center"
                          >
                            <p className="text-[14px] p-3 border-gradient border-gradient-gray only-bottom">
                              {weekday[`${new Date(data.date).getUTCDay()}`]}
                            </p>
                            <Image
                              src="/assets/user/Rain cloud.svg"
                              width={50}
                              height={50}
                              alt="Rain cloud"
                            />
                            <p className="text-[18px]">{data.day.maxtemp_c}°</p>
                          </div>
                        ))
                      : "loading...."}
                  </div>
                </div>
                {/* <button
                  type="button"
                  class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span class="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span class="sr-only">Next</span>
                  </span>
                </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
