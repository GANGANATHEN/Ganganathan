"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./style.css";

const Heaven = () => {
  const router = useRouter();
  return (
    <div className="z-2">
      <div className="absolute z-10 text-center top-[24%] w-full ">
        <p className="text-xl font-bold text-emerald-700">Meet Haven</p>
        <h1 className="text-[70px] font-bold text-emerald-950 font-serif">
          Get the most out of <span className="block mt-[-3%]">MSR</span>
        </h1>
        <p className="text-[20px] text-emerald-950 my-4">
          Drive meaningful engagement via servicing — helping you understand,
          <span className="block">
            educate, and convert borrowers for mortgage & beyond.
          </span>
        </p>
        <button
          className="bg-emerald-700 hover:bg-emerald-950  px-[70px] mt-4 py-3 rounded-lg text-white text-[17px]"
          onClick={() => router.push("./haven/getdemo")}
        >
          Get a Demo
        </button>
      </div>

      <div className="relative w-full">
        <img className="w-full" src="/assets/home/home.png" alt="Description" />

        <div className="absolute bottom-[-115%] p-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] bg-gray-50 shadow-lg rounded-xl z-20">
          <div className="mb-4 flex border-b-1 border-gray-300 p-4 justify-between">
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
          <h1 className="text-teal-950 pl-[5%] mt-[3%] text-[40px] font-serif">
            Good morning,Amanda!
          </h1>
          <p className="text-teal-950 pl-[5%]">
            Continue where you left off building your roadmap
          </p>
          <div className="px-[5%] pt-7 pb-[5%] card-container grid grid-cols-3 gap-4 text-teal-950">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h1 className="font-bold text-2xl">Home finance overview</h1>
              <p className="py-4 text-[13px]">
                You&apos;ve paid down{" "}
                <span className="text-teal-300">$14,636</span> of your mortgage
                and own approximately <span className="text-teal-300">27%</span>{" "}
                of your home
              </p>
              <div className="flex gap-3 justify-between border-1 border-gray-300 p-4 rounded-xl w-full">
                <div className="w-[50%]">
                  <p className="text-[12px]">Home equity ⓘ</p>
                  <p className="text-xl font-bold">$85,000</p>
                  <p className="text-[10px] text-gray-400">
                    Updated 5 days ago
                  </p>
                </div>
                <div className="w-[50%] flex items-center gap-3">
                  <button className="bg-teal-50 font-bold text-teal-300 px-3 py-1 rounded-lg">
                    ↑ $534
                  </button>
                  <p className="text-gray-400 font-bold">&gt;</p>
                </div>
              </div>
              <div className="my-3 flex gap-3 justify-between border-1 border-gray-300 p-4 rounded-xl w-full">
                <div className="w-[50%]">
                  <p className="text-[12px]">Home equity</p>
                  <p className="text-xl font-bold">$465,000</p>
                  <p className="text-[10px] text-gray-400">
                    Updated 5 days ago
                  </p>
                </div>
                <div className="w-[50%] flex items-center gap-3">
                  <button className="bg-teal-50 font-bold text-teal-300 px-3 py-1 rounded-lg">
                    ↑$1,000
                  </button>
                  <p className="text-gray-400 font-bold">&gt;</p>
                </div>
              </div>
              <div className="flex gap-3 justify-between border-1 border-gray-300 p-4 rounded-xl w-full">
                <div className="w-[50%]">
                  <h1 className="text-[12px]">Home equity</h1>
                  <p className="text-xl font-bold">$380,000</p>
                  <p className="text-[10px] text-gray-400">
                    Updated 5 days ago
                  </p>
                </div>
                <div className="w-[50%] flex items-center gap-3">
                  <button className="bg-teal-50 font-bold text-teal-300 px-3 py-1 rounded-lg">
                    ↓ $1.027
                  </button>
                  <p className="text-gray-400 font-bold">&gt;</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-7">
              <p className="font-bold text-[20px] letter-gap-0.5">
                You have $68,000 in available home equity to put towards your
                goals.
              </p>
              <p className="text-[15px] py-3">
                What home improvements are on your to do list?
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="w-fill rounded-4xl hover:bg-teal-500 bg-teal-400 px-5 py-1 text-[15px] text-white">
                  Solar panel
                </button>
                <button className="border-1 border-dashed rounded-4xl px-5 py-1 text-[15px]">
                  Home office
                </button>
                <button className="border-1 border-dashed rounded-4xl px-5 py-1 text-[15px]">
                  Garage
                </button>
                <button className="border-1 border-dashed rounded-4xl px-5 py-1 text-[15px]">
                  Kitchen updates
                </button>
                <button className="border-1 border-dashed rounded-4xl px-5 py-1 text-[15px]">
                  Bathroom updates
                </button>
                <button className="w-fill rounded-4xl hover:bg-teal-500 bg-teal-400 px-5 py-1 text-[15px] text-white">
                  New roof
                </button>
                <button className="border-1 border-dashed rounded-4xl px-5 py-1 text-[15px]">
                  Landscaping
                </button>
                <button className="border-1 border-dashed rounded-4xl px-5 py-1 text-[15px]">
                  Other
                </button>
              </div>
              <button className="w-full mt-[20%] rounded-lg bg-teal-950 text-white py-3 px-10">
                Add goals details
              </button>
            </div>

            <div className="card3">
              <div className="bg-white shadow-lg rounded-xl p-4">
                <h1 className="text-2xl font-bold">Home Co. Mortgage</h1>
                <p className="text-[13px]">
                  To manage your payments, see statements, or update your info
                  continue to Home Co.
                </p>
                <div className="flex gap-4 border-1 border-gray-300 p-4 rounded-xl w-full my-6">
                  <p className="text-[12px] bg-teal-300 rounded-4xl text-white p-3">
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
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                      />
                    </svg>
                  </p>
                  <div>
                    <p className="text-sm font-bold">Loan *9905</p>
                    <p className="text-[12px] text-gray-400">
                      Monthly payment:{" "}
                      <span className="text-teal-300">$380,000</span>
                    </p>
                  </div>
                </div>
                <button className="w-full rounded-lg bg-teal-950 text-white py-3 px-10">
                  Monthly payment: $380,000
                </button>
                <button className="w-full border-2 rounded-lg border-teal-950 text-teal-950 my-3 py-3 px-10">
                  Manage my mortgage
                </button>
              </div>
              <p className="px-3 text-teal-950 py-5">
                Review home finance topics
              </p>
              <div className="flex gap-4 bg-white p-4 rounded-xl w-full my-3 shadow-lg items-center">
                <p className="text-[12px] bg-emerald-200 rounded-lg text-teal-950 p-2">
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
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                    />
                  </svg>
                </p>
                <div>
                  <p className="text-[15px]">Simulate home value changes</p>
                  <p className="text-[12px] text-gray-400">
                    Current estimate:{" "}
                    <span className="text-teal-300">$456,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[55%] px-[5%]">
        <div className="flex justify-between text-center w-full">
          <h1 className="text-emerald-700 text-[3rem] font-bold w-1/3">
            1.4M+{" "}
            <span className="text-emerald-950 block text-[15px] font-normal">
              homeowners
            </span>
          </h1>
          <div className="w-1/3">
            <h1 className=" text-emerald-700 text-[3rem] font-bold border-x-1 border-gray-200">
              11%{" "}
            </h1>
            <span className="text-emerald-950 block text-[15px] font-normal">
              high-intent leads generated
            </span>
          </div>
          <h1 className="w-1/3 text-emerald-700 text-[3rem] font-bold">
            11+{" "}
            <span className="text-emerald-950 block text-[15px] font-normal">
              offer types
            </span>
          </h1>
        </div>
      </div>
      <section>
        <div className="mt-[10%] px-[5%]">
          <h1 className="text-center text-[3rem] text-teal-950 font-bold leading-none">
            The most effective way to
            <span className="block">retain homeowners</span>
          </h1>
          <p className="text-center text-teal-950 text-[25px] py-6">
            Predict prepayment and deliver personalized offers that convert by{" "}
            <span className="block">
              making the tough decisions of homeownership simple and intuitive.
            </span>
          </p>

          <div className="grid grid-cols-3 gap-4 mt-[5%]">
            <div className="group bg-teal-900 text-white p-7 rounded-2xl cursor-pointer relative overflow-hidden">
              <h1 className="text-3xl font-bold pb-4">For Servicers</h1>
              <p className="max-w-sm text-[17px] lg:text-[18px] transition-all duration-200 ease-in-out lg:translate-y-4 group-hover:translate-y-0 lg:opacity-0 group-hover:opacity-100">
                Improve yields on your MSR with technology that enables your
                recapture and cross-sell strategy.
              </p>
              <Image
                className="w-full mx-auto"
                src="/assets/home/servicer.png"
                alt="servicer"
                width={200}
                height={200}
              />
              <button
                className="mt-[25%] text-white rounded-4xl py-2 px-4
               transform transition-all duration-300
               group-hover:scale-110
                group-hover:translate-x-2  group-hover:bg-teal-400 font-bold"
              >
                Servicers &gt;
              </button>
            </div>

            <div className="group bg-teal-900 text-white p-7 rounded-2xl cursor-pointer relative overflow-hidden">
              <h1 className="text-3xl font-bold pb-4">For Subservicers</h1>
              <p className="max-w-sm text-[17px] lg:text-[18px] transition-all duration-200 ease-in-out lg:translate-y-4 group-hover:translate-y-0 lg:opacity-0 group-hover:opacity-100">
                Win more servicing deals by offering your clients best-in-class
                recapture functionality.
              </p>
              <Image
                className="w-full mx-auto"
                src="/assets/home/subservicer.png"
                alt="subservicer"
                width={300}
                height={300}
              />
              <button
                className="mt-4 text-white rounded-4xl py-2 px-4
               transform transition-all duration-300
               group-hover:scale-110
                group-hover:translate-x-2  group-hover:bg-teal-400 font-bold"
              >
                Subservicers &gt;
              </button>
            </div>
            <div className="group bg-teal-900 text-white p-7 rounded-2xl cursor-pointer relative overflow-hidden">
              <h1 className="text-3xl font-bold pb-4">For Lenders</h1>
              <p className="max-w-sm text-[17px] lg:text-[18px] transition-all duration-200 ease-in-out lg:translate-y-4 group-hover:translate-y-0 lg:opacity-0 group-hover:opacity-100">
                Ensure your LOs focus to recapture the highest-intent leads from
                your portfolio.
              </p>
              <Image
                className="w-full mx-auto"
                src="/assets/home/lender.png"
                alt="lender"
                width={300}
                height={300}
              />
              <button
                className="mt-[30%] text-white rounded-4xl py-2 px-4
               transform transition-all duration-300
               group-hover:scale-110
                group-hover:translate-x-2  group-hover:bg-teal-400 font-bold"
              >
                Lenders &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[10%] px-[5%]">
          <h1 className="text-center text-[3rem] text-teal-950 font-bold leading-none">
            Generate value with your
            <span className="block"> borrowers through an all-in-one</span> hub
            for home finances
          </h1>
        </div>

        <div className="mt-[5%] px-[5%] ">
          <div className="w-100% flex gap-7 items-center bg-purple-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/home/servicer.png"
              alt="servicer"
              width={200}
              height={200}
            />
            <div className="w-1/2">
              <h1 className="text-teal-950 text-5xl font-bold">
                Understand <span className="block">borrower intent</span>
              </h1>
              <p className="text-teal-950 py-4">
                Anticipate your borrowers&apos; future plans ahead of{" "}
                <span className="block">
                  anyone else with modules that help borrowers
                </span>{" "}
                build a plan for their homes and their futures.
              </p>
            </div>
          </div>
          <div className="w-100% flex gap-7 items-center bg-teal-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/home/servicer.png"
              alt="servicer"
              width={200}
              height={200}
            />
            <div className="w-1/2">
              <h1 className="text-teal-950 text-5xl font-bold">
                Educate<span className="block">homeowners to</span> drive
                engagement
              </h1>
              <p className="text-teal-950 py-4">
                Empower your customers to make sense of their{" "}
                <span className="block">
                  home finances, drawing them in outside of just
                </span>{" "}
                making payments.
              </p>
            </div>
          </div>
          <div className="w-100% flex gap-7 items-center bg-sky-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/home/servicer.png"
              alt="servicer"
              width={200}
              height={200}
            />
            <div className="w-1/2">
              <h1 className="text-teal-950 text-5xl font-bold">
                Present
                <span className="block">personalized offers</span>
              </h1>
              <p className="text-teal-950 py-4">
                Turn payment portals into a digital marketing
                <span className="block">
                  channel that presents personalized offers in the
                </span>
                right place at the right time.
              </p>
            </div>
          </div>
          <div className="w-100% flex gap-7 items-center bg-pink-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/home/servicer.png"
              alt="servicer"
              width={200}
              height={200}
            />
            <div className="w-1/2">
              <h1 className="text-teal-950 text-5xl font-bold">
                Fully white-labeled
              </h1>
              <p className="text-teal-950 py-4">
                Advance your strategy, brand, and look and feel.
                <span className="block">
                  Have multiple brands? We support that too.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[5%] px-[5%]">
        <div>
          <h1 className="text-center text-[3rem] text-teal-950 font-bold">
            We&apos;re on a mission to make life{" "}
            <span className="block">simpler for homeowners</span>
          </h1>
          <div className="w-full flex mt-[5%] gap-7">
            <div
              className="w-1/2 text-center bg-neutral-50 shadow-sm rounded-xl p-7 text-centergroup relative cursor-pointer
    transform transition-transform duration-600
    hover:-translate-y-[10px] hover:opacity-70"
            >
              <Image
                className="w-1/2 mx-auto"
                src="/assets/home/home-d.png"
                alt="servicer"
                width={200}
                height={200}
              />
              <h1 className="text-teal-950 text-3xl font-bold py-4">
                bg-neutral-50
              </h1>
              <p className="text-[15px]">
                Haven was founded on the premise that{" "}
                <span className="block">
                  homeownership shouldn&apos;t be complicated or
                </span>{" "}
                stressful. Meet our team.
              </p>
            </div>
            <div className="w-1/2 bg-neutral-50 shadow-sm rounded-xl p-7 text-center">
              <Image
                className="w-1/2 mx-auto"
                src="/assets/home/customers.png"
                alt="servicer"
                width={200}
                height={200}
              />
              <h1 className="text-teal-950 text-3xl font-bold py-4">
                Hear from our customers
              </h1>
              <p className="text-[15px]">
                We work with mortgage companies, helping{" "}
                <span className="block">
                  them connect with their customers more
                </span>{" "}
                deeply than ever before.
              </p>
            </div>
          </div>
          <div className="absolute w-full flex mt-[2%] gap-7 bg-neutral-50 p-5 shadow-sm rounded-2xl">
            <div className="w-1/2 pl-[7%]">
              <h1 className="text-3xl text-teal-950 font-bold">
                See our latest insights
              </h1>
              <p className="text-teal-950 text-xl py-4">
                We&apos;re busy creating content to help you <span className="block">implement our technology
                with clarity — and to</span> good effect.
              </p>
            </div>
          </div>
          <Image
              className="relative bottom-[-50%] right-[-15%] mx-auto"
              src="/assets/home/Phone.png"
              alt="servicer"
              width={200}
              height={200}
            />
        </div>
      </section>
      <div className="mt-[10%]">
        <h1>dummy</h1>
      </div>
    </div>
  );
};

export default Heaven;
