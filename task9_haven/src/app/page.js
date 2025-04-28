"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const [useCase, setUseCase] = useState(true);
  const [company, setCompany] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollY > sectionTop - windowHeight + 100) {
          setShowAlert(true);
          window.removeEventListener('scroll', handleScroll);
          setTimeout(() => {
            console.log("Section is in view");     
          }, 30);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const router = useRouter();

  function handleUseCases() {
    setCompany(true);
    setUseCase((useCase) => !useCase);
  }

  function handleCompany() {
    setUseCase(true);
    setCompany((company) => !company);
  }

  useEffect(() => {
    function handleClick() {
      setUseCase(true);
      setCompany(true);
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div>
      <section ref={sectionRef}>
        <div className="z-1 relative w-full">
          <div className="z-1 w-full flex justify-between items-center px-10 py-6 bg-transparent">
            <div className="flex gap-2 items-center text-emerald-700 text-[20px] cursor-pointer">
              <Image src="/logo.png" alt="homeimg" width={30} height={30} />
              <h1 className="font-semibold text-2xl">Haven</h1>
            </div>
            <div className="flex space-x-6">
              <button
                className="text-emerald-950 hover:text-emerald-700 cursor-pointer"
                title="How it works"
              >
                How it Works
              </button>
              <button
                // ref={useCaseRef}
                title="Use Cases"
                className="flex items-center gap-1 text-emerald-950 hover:text-emerald-700 cursor-pointer group"
                onClick={() => handleUseCases()}
              >
                Use Cases
                <MdOutlineKeyboardArrowDown className="transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>
              <button
                // ref={companyRef}
                title="Company"
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
            className={`z-4 absolute top-[70%] left-[45%] transition-all duration-500 ease-out
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
                  Win more servicing deals by offering your clients
                  best-in-class recapture functionality.
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
                  Ensure your LOs focus to recapture the highest-intent leads
                  from your portfolio.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`z-4 absolute top-[70%] left-[55%] transition-all duration-500 ease-out
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
                  Learn more about the team taking the stress out of
                  homeownership.
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
                  Join the team making homeownership smarter, fairer, and all
                  around better.
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
                  Reach out to our team we&apos;d be happy to answer any
                  questions you may have.
                </p>
              </div>
            </div>
          </div>
          {/* space below the fixed nav */}

          <div className="fadeInUp-animation z-2 text-center top-[160px] w-full">
            <p className="text-xl font-bold text-emerald-700">Meet Haven</p>
            <h1 className="text-[70px] font-bold text-emerald-950 font-serif">
              Get the most out of <span className="block mt-[-3%]">MSR</span>
            </h1>
            <p className="text-[20px] text-emerald-950 my-4">
              Drive meaningful engagement via servicing — helping you
              understand,
              <span className="block">
                educate, and convert borrowers for mortgage & beyond.
              </span>
            </p>
            <button
              className="cursor-pointer bg-emerald-700 border-1 border-teal-700 hover:bg-emerald-950  px-[70px] mt-4 py-3 rounded-lg text-white text-[17px]"
              onClick={() => router.push("./haven/getdemo")}
            >
              Get a Demo
            </button>
          </div>
        </div>

        <div className="w-full absolute top-0 left-0 z-0 shadow-sm bg-no-repeat">
          <img
            className="w-full relative bg-no-repeat"
            src="/assets/home/home.png"
            alt="Description"
          />
          <div className="img-blur z-1 absolute h-[140px] bottom-[0%] w-full bg-gradient-to-t from-pearl border-b-1"></div>
          <div className="animated-text absolute z-2 bottom-[-120%] p-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] bg-gray-50 shadow-lg rounded-xl">
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
                  <span className="text-teal-300">$14,636</span> of your
                  mortgage and own approximately{" "}
                  <span className="text-teal-300">27%</span> of your home
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
      </section>

      <section ref={sectionRef}>
        <div className="mt-[100%] px-[5%]">
          <div className="fadeInUp-animation flex justify-between text-center w-full">
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
            <div
              title="Servicers"
              className="group fadeInUp-animation bg-teal-900 text-white p-7 rounded-2xl cursor-pointer relative overflow-hidden"
            >
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
                className="cursor-pointer mt-[25%] text-white rounded-4xl py-2 px-4
               transform transition-all duration-300
               group-hover:scale-110
                group-hover:translate-x-2  group-hover:bg-teal-400 font-bold"
              >
                Servicers &gt;
              </button>
            </div>

            <div
              title="Subservicers"
              className="group animated-text bg-teal-900 text-white p-7 rounded-2xl cursor-pointer relative overflow-hidden"
            >
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
                className="cursor-pointer mt-4 text-white rounded-4xl py-2 px-4
               transform transition-all duration-300
               group-hover:scale-110
                group-hover:translate-x-2  group-hover:bg-teal-400 font-bold"
              >
                Subservicers &gt;
              </button>
            </div>
            <div
              title="Lenders"
              className="group fadeInUp-animation bg-teal-900 text-white p-7 rounded-2xl cursor-pointer relative overflow-hidden"
            >
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
                className="cursor-pointer mt-[30%] text-white rounded-4xl py-2 px-4
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

        <div className="relative mt-[5%] px-[5%] ">
          <div className="sticky top-0 h-screen flex gap-7 items-center justify-center bg-purple-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/stiky/1.png"
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
          <div className="sticky top-0 h-screen flex gap-7 items-center justify-center bg-teal-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/stiky/2.png"
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
          <div className="sticky top-0 h-screen flex gap-7 items-center justify-center bg-sky-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/stiky/3.png"
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
          <div className="sticky top-0 h-screen flex gap-7 items-center justify-center bg-pink-50 rounded-3xl p-20">
            <Image
              className="w-1/2 mx-auto"
              src="/assets/stiky/4.png"
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

      <section>
        <div className="mt-[5%] px-[5%]">
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
          <div className="absolute w-[90%] flex mt-[2%] gap-7 bg-neutral-50 p-[5%] shadow-sm rounded-2xl">
            <div className="w-1/2 pl-[3%]">
              <h1 className="text-3xl text-teal-950 font-bold">
                See our latest insights
              </h1>
              <p className="text-teal-950 text-xl py-4">
                We&apos;re busy creating content to help you{" "}
                <span className="block">
                  implement our technology with clarity — and to
                </span>{" "}
                good effect.
              </p>
            </div>
          </div>
          <Image
            className="relative top-[-20%] left-[25%] transform -translate-x-1/2 -translate-y-[-25%] mx-auto"
            src="/assets/home/Phone.png"
            alt="servicer"
            width={250}
            height={250}
          />
        </div>
      </section>

      <section>
        <div className="w-[90%] mt-[15%] text-white mx-[5%] flex gap-7 bg-teal-800 shadow-sm items-center rounded-3xl p-20">
          <div className="w-[50%]">
            <p className="text-teal-300">Integration</p>
            <h1 className="text-4xl font-bold py-5">
              Haven integrates into{" "}
              <span className="block">your existing servicing</span> experience
            </h1>
            <p className="text-[17px] lg:text-[19px]">
              Whether you service in-house or use a subservicer, launch deeper
              engagement with your borrowers in weeks (not months) with a
              platform that integrates into your existing servicing stack.
            </p>
            <button
              title="See how it works"
              className="cursor-pointer my-5 font-bold hover:bg-teal-400 transition-all duration-500 rounded-full translate-y-[-1px] hover:px-4 py-2"
            >
              See how it works &gt;{" "}
            </button>
          </div>
          <div className="w-[50%]">
            <Image
              className="mx-auto"
              src="/assets/home/home.svg"
              alt="servicer"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="bg-teal-900 mt-[10%] py-[5%]">
        <div className="p-[5%] w-[90%] mx-[5%] border-1 border-teal-700 text-white flex flex-col gap-7 items-center justify-center rounded-3xl">
          <h1 className="text-[3rem] font-bold">
            Unlock a new chapter — make{" "}
            <span className="block">home ownership make sense</span>
          </h1>
          <button
            className="bg-emerald-700 cursor-pointer border-2 border-emerald-800 hover:bg-emerald-950  px-[15%] mt-4 py-3 rounded-lg text-white text-[17px]"
            onClick={() => router.push("./haven/getdemo")}
          >
            Get a Demo
          </button>
        </div>
        <div className="w-[90%] mx-[5%] mt-[5%] text-white">
          <div className="flex justify-between items-center text-[16px]">
            <ul className="flex flex-col gap-y-3">
              <li>
                <a className="opacity-30">We&apos;re Haven</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  For Servicers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  For Subservicers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  For Lenders
                </a>
              </li>
            </ul>
            <div className="flex gap-10">
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a className="opacity-30">Resources</a>
                </li>
                <li>
                  <a className="opacity-30">Blog &nbsp;&nbsp;</a>
                  <span className="bg-orange-300 text-teal-950 text-[10px] p-1 rounded-lg">
                    Coming soon
                  </span>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a className="opacity-30">Support</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Why is Haven involved?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Security & Compliance
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-y-3">
                <li>
                  <a className="opacity-30">Company</a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Pressroom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <Image
                className=""
                src="/logo.png"
                alt="servicer"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div className="mt-[5%] flex flex-col justify-center items-center">
            <div>
              <h1 className="font-bold text-2xl">
                Get the latest in customer retention
              </h1>

              <input
                title="Please fill out this field"
                className="bg-white h-10 focus:outline-hidden text-gray-400 w-full sm:w-auto px-4 md:px-6 py-[.85rem] max-h-[50px] rounded-md flex-1 my-2 leading-4 border-2 border-white"
                type="text"
                placeholder="Enter Your Email Address"
              />
              <button
                className="bg-emerald-700 cursor-pointer mx-2 hover:bg-emerald-950 px-4 py-2 rounded-lg text-white"
                onClick={() => router.push("./haven/getdemo")}
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-[15%] text-[14px]">
            <ul className="flex gap-6 text-[20px]">
              <li className="hover:opacity-30">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="hover:opacity-30">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="hover:opacity-30">
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
            <ul className="flex gap-9">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Privacy <span className="block">Policy</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Terms of <span className="block">Use</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Coordinated Disclosure <span className="block">Policy</span>
                </a>
              </li>
            </ul>

            <p>© 2025 Haven. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
