"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./style.css";

const Heaven = () => {
  const router = useRouter();
  return (
    <div>
      <div className="absolute z-10 text-center top-[24%] w-full">
        <p className="font-bold text-green-800">Meet Haven</p>
        <h1 className="text-[70px] font-bold text-green-950 font-serif">
          Get the most out of <span className="block mt-[-3%]">MSR</span>
        </h1>
        <p className="text-[20px] text-green-800 my-4">
          Drive meaningful engagement via servicing — helping you understand,
          <span className="block">
            educate, and convert borrowers for mortgage & beyond.
          </span>
        </p>
        <button
          className="bg-green-800 px-[70px] mt-4 py-3 rounded-lg hover:bg-green-950 text-white text-[17px]"
          onClick={() => router.push("./haven/getdemo")}
        >
          Get a Demo
        </button>
      </div>

      {/* Image wrapper to control relative positioning */}
      <div className="relative w-full">
        <img className="w-full" src="/assets/home/home.png" alt="Description" />

        {/* Card positioned in center of image */}
        <div className="absolute bottom-[-2%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] bg-yellow-50 shadow-lg rounded-xl text-center z-20">
          <div className="mb-4 flex border-b-1 border-gray-200 p-4 justify-between">
            <div className="flex items-center">
              <Image
                width={30}
                height={30}
                src="/assets/home/h-logo.png"
                alt="Logo"
              />
              <h1 className="text-[20px] font-bold text-green-700 font-serif ml-2">
                Haven
              </h1>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <p>
            The most effective way to retain homeowners. Predict prepayment and
            deliver personalized offers that convert by making the tough
            decisions of homeownership simple and intuitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heaven;
