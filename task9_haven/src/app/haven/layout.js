"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Heaven = ({ children }) => {
  const router = useRouter();
  return (
    <div>
      <div className="z-2 fixed w-full flex justify-between items-center px-10 py-6 bg-transparent">
        <div className="flex gap-2 items-center text-green-800 text-[20px]">
          <Image
            src="/assets/home/h-logo.png"
            alt="homeimg"
            width={40}
            height={40}
          />
          <h1 className="font-semibold text-2xl">Haven</h1>
        </div>
        <div className="flex space-x-6">
          <button>How it Works</button>
          <button className="flex items-center gap-1">
            Use Cases
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <button className="flex items-center gap-1">
            Company
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <button
          className="bg-green-800 px-4 py-2 rounded-lg hover:bg-green-950 text-white"
          onClick={() => router.push("./haven/getdemo")}
        >
          Get a Demo
        </button>
      </div>

      {/* space below the fixed nav */}
      <div>{children}</div>
    </div>
  );
};

export default Heaven;
