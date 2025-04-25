"use client";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Heaven = ({ children }) => {
  const [useCase, setUseCase] = useState(true);
  const [company, setCompany] = useState(true);

  const router = useRouter();

  function handleUseCases() {
    setCompany(true);
    setUseCase((useCase) => !useCase);
  }

  function handleCompany() {
    setUseCase(true);
    setCompany((company) => !company);
  }

  return (
    <div>
      <div className="z-1 sticky tob-0 w-full flex justify-between items-center px-10 py-6 bg-transparent">
        <div className="flex gap-2 items-center text-emerald-700 text-[20px]">
          <Image
            src="/logo.png"
            alt="homeimg"
            width={40}
            height={40}
          />
          <h1 className="font-semibold text-2xl">Haven</h1>
        </div>
        <div className="flex space-x-6">
          <button className="text-emerald-950 hover:text-emerald-700 cursor-pointer">
            How it Works
          </button>
          <button
            className="flex items-center gap-1 text-emerald-950 hover:text-emerald-700 cursor-pointer group"
            onClick={() => handleUseCases()}
          >
            Use Cases
            <MdOutlineKeyboardArrowDown className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
          <button
            className="flex items-center gap-1 text-emerald-950 hover:text-emerald-700 cursor-pointer group"
            onClick={() => handleCompany()}
          >
            Company
            <MdOutlineKeyboardArrowDown className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
        </div>
        <button
          className="bg-emerald-700 hover:bg-emerald-950 px-4 py-2 rounded-lg text-white cursor-pointer"
          onClick={() => router.push("./haven/getdemo")}
        >
          Get a Demo
        </button>
      </div>
      <div
        className={`z-4 absolute top-[10%] left-[45%] transition-all duration-500 ease-out
    ${
      useCase
        ? "opacity-0 translate-y-4 pointer-events-none"
        : "opacity-100 translate-y-0"
    }
    shadow-sm bg-white w-[30%] mx-auto rounded-3xl p-6 flex flex-col gap-y-4 text-teal-950`}
      >
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/servicers.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">For Servicers</h1>
            <p className="text-[14px]">
              Improve yields on your MSR with technology that enables your
              recapture and cross-sell strategy
            </p>
          </div>
        </div>

        {/* Subservicers */}
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/subservicers.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">For Subservicers</h1>
            <p className="text-[14px]">
              Win more servicing deals by offering your clients best-in-class
              recapture functionality.
            </p>
          </div>
        </div>

        {/* Lenders */}
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/lenders.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">For Lenders</h1>
            <p className="text-[14px]">
              Ensure your LOs focus to recapture the highest-intent leads from
              your portfolio.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`z-4 absolute top-[10%] left-[45%] transition-all duration-500 ease-out
    ${
      company
        ? "opacity-0 translate-y-4 pointer-events-none"
        : "opacity-100 translate-y-0"
    }
    shadow-sm bg-white w-[30%] mx-auto rounded-3xl p-6 flex flex-col gap-y-4 text-teal-950`}
      >
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/about.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">About Haven</h1>
            <p className="text-[14px]">
              Learn more about the team taking the stress out of homeownership.
            </p>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/Pressroom-Icon.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">Pressroom</h1>
            <p className="text-[14px]">
              Follow news of our partnerships and product.
            </p>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/Careers.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">Careers</h1>
            <p className="text-[14px]">
              Join the team making homeownership smarter, fairer, and all around
              better.
            </p>
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer hover:bg-zinc-100 p-2 rounded-lg">
          <div className="w-[20%]">
            <Image
              className="mx-auto p-2"
              src="/assets/nav/contact.png"
              alt="servicer"
              width={150}
              height={150}
            />
          </div>
          <div className="w-[80%]">
            <h1 className="font-bold">Contact</h1>
            <p className="text-[14px]">
              Reach out to our team we&apos;d be happy to answer any questions
              you may have.
            </p>
          </div>
        </div>
      </div>
      {/* space below the fixed nav */}

      <div>{children}</div>
    </div>
  );
};

export default Heaven;
