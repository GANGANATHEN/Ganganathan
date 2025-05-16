"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants/index.jsx";
import "../globals.css";
// import react-icons start
import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { IoIosNotificationsOutline } from "react-icons/io";
// import react-icons end

const Dashboard = ({ children }) => {
  const [sidbarControll, setsidbarControll] = useState(true);
  console.log(sidbarControll);

  const [active, setActive] = useState("")

  return (
    <div lang="en">
      {/* navbar and sidebar contents */}
      <section className="flex">
        {/* sidebar */}
        <section
          className={`sticky top-0 z-50 h-screen bg-white border border-gray-100 flex flex-col gap-y-3 pb-4 transition-all duration-700 ease-in-out ${
            sidbarControll ? "w-[20%]" : "w-[5%] items-center"
          }`}
        >
          <Link href="/dashboard" className="flex gap-3 px-[10%] py-[5%] mt-2">
            <Image src="/logo/image.png" width={30} height={30} alt="logo" />
            {sidbarControll && <p className="font-bold text-2xl">Mantis</p>}
          </Link>
          {/* className={`${sidbarControll ? null : "flex flex-col gap-y-2"}`} */}

          {navLinks.map((data, index) => (
            <div key={index.id} >
              {data.p ? (
                <p className={`text-stone-400 text-[12px] px-[10%] ${sidbarControll ? "mb-4" : null}`}>
                {sidbarControll ? `${data.p}` : null}  
                </p>
              ) : null}
              <Link
                href={data.link}
                target={
                  data.link === "/login" || data.link === "/register" || data.link === "https://codedthemes.gitbook.io/mantis"
                    ? "_blank"
                    : "_self"
                }
                className={`flex items-center hover:bg-blue-100 hover:text-blue-500 
                ${sidbarControll ? "gap-3 text-[16px] px-[10%]" : "justify-center text-[25px] mt-2 p-1 rounded-lg"}
                ${active === data.link_p && data.link_p !== "Login" && data.link_p !== "Register" && data.link_p !== "Documentation" ? `bg-blue-100 text-blue-500 ${sidbarControll ? "border-r-2 border-blue-500" :""}` :""}`}
                onClick={()=>setActive(data.link_p)}
              >
                {data.icon}
                {sidbarControll && <p className="py-2">{data.link_p}</p>}
              </Link>
            </div>
          ))}
        </section>

        {/* navbar and main contents */}
        <section
          className={
            sidbarControll ? "w-[80%] flex flex-col" : "w-[95%] flex flex-col"
          }
        >
          {/* navbar */}
          <div className="sticky top-0 z-50 bg-white border-1 border-l-0 border-gray-100 px-[2%] py-[1%] flex justify-between items-center">
            <div className="flex gap-x-4">
              <button
                className={`text-[16px] cursor-pointer p-2 rounded-sm hover:bg-gray-200 ${sidbarControll ? "" : "bg-gray-200"}`}
                onClick={() => setsidbarControll((prev) => !prev)}
              >
                {sidbarControll ? (
                  <AiOutlineMenuFold />
                ) : (
                  <AiOutlineMenuUnfold />
                )}
              </button>
              <input
                type="text"
                placeholder="Ctrl + K"
                className="border text-[14px] border-gray-300 focus:border-blue-300 rounded-sm focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-300 hover:ring-offset-blue-300 hover:focus:ring-offset-blue-300 outline-none"
                required
              />
            </div>
            <div className="flex gap-x-5 items-center relative">
              <SiGithub />
              <IoIosNotificationsOutline className="text-[20px]" />
              <p className="absolute bottom-3 left-[25%] p-1 text-[7px] text-white font-bold rounded-[50%] bg-blue-500">
                2
              </p>
              <div className="flex gap-x-2 ">
                <Image
                  src="/profile/1.svg"
                  width={20}
                  height={20}
                  alt="profile"
                />
                <p>John Doe</p>
              </div>
            </div>
          </div>
          {/* main contents */}
          <div className="h-screen px-[5%] py-[2%] bg-gray-50 overflow-y-auto">
  
            {children}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
