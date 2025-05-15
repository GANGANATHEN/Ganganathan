import React from "react";
import Link from "next/link";

const Shadow = () => {
  return (
    <div className="flex flex-col gap-y-6">
      {/* Typography section */}
      <section className="flex flex-col gap-y-3">
        <div className="flex gap-2 text-[12px]">
          <Link className="text-stone-400" href="/">
            Home
          </Link>
          <p className="text-stone-400 select-none">/</p>
          <p className="font-black">Shadow</p>
        </div>
        <h1 className="font-black text-[30px]">Shadow</h1>
      </section>
      {/* Shadow contents */}
      <section>
        {/* Basic Shadow box */}
        <div className="flex flex-col gap-y-6 text-[14px]">
          <div className="bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold border-b-1 border-gray-200 p-5">
              Basic Shadow
            </h1>
            <div className="grid grid-cols-6 gap-5 p-5">
              <div className="text-center px-1 py-5 bg-white">
                <p>
                  boxShadow
                  <span className="block mt-2">0</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-sm">
                <p>
                  boxShadow
                  <span className="block mt-2">1</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-md">
                <p>
                  boxShadow
                  <span className="block mt-2">2</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-lg">
                <p>
                  boxShadow
                  <span className="block mt-2">3</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-xl">
                <p>
                  boxShadow
                  <span className="block mt-2">4</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-sm/10">
                <p>
                  boxShadow
                  <span className="block mt-2">5</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-md/10">
                <p>
                  boxShadow
                  <span className="block mt-2">6</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-lg/10">
                <p>
                  boxShadow
                  <span className="block mt-2">7</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-xl/10">
                <p>
                  boxShadow
                  <span className="block mt-2">8</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-sm/20">
                <p>
                  boxShadow
                  <span className="block mt-2">9</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-md/20">
                <p>
                  boxShadow
                  <span className="block mt-2">10</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-lg/20">
                <p>
                  boxShadow
                  <span className="block mt-2">11</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-xl/20">
                <p>
                  boxShadow
                  <span className="block mt-2">12</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-sm/30">
                <p>
                  boxShadow
                  <span className="block mt-2">13</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-md/30">
                <p>
                  boxShadow
                  <span className="block mt-2">14</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-lg/30">
                <p>
                  boxShadow
                  <span className="block mt-2">15</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-xl/30">
                <p>
                  boxShadow
                  <span className="block mt-2">16</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-sm/40">
                <p>
                  boxShadow
                  <span className="block mt-2">17</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-md/30">
                <p>
                  boxShadow
                  <span className="block mt-2">18</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-lg/30">
                <p>
                  boxShadow
                  <span className="block mt-2">19</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-xl/30">
                <p>
                  boxShadow
                  <span className="block mt-2">20</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-sm/40">
                <p>
                  boxShadow
                  <span className="block mt-2">21</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-md/40">
                <p>
                  boxShadow
                  <span className="block mt-2">22</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-lg/40">
                <p>
                  boxShadow
                  <span className="block mt-2">23</span>
                </p>
              </div>
              <div className="text-center px-1 py-5 bg-white shadow-xl/40">
                <p>
                  boxShadow
                  <span className="block mt-2">24</span>
                </p>
              </div>
            </div>
          </div>
          {/* Custom Shadow box */}
          <div className="bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold border-b-1 border-gray-200 p-5">
              Custom Shadow
            </h1>
            <div className="p-5">
              <div className="shadow-sm w-[10%] h-[10%] bg-white flex justify-center px-[6%] py-[3%]">
                <p>z1</p>
              </div>
            </div>
          </div>
          {/* Color Shadow box */}
          <div className="bg-white border-1 border-gray-200 rounded-sm text-[14px]">
            <h1 className="font-bold border-b-1 border-gray-200 p-5">
              Color Shadow
            </h1>
            <div className="grid grid-cols-6 ">
              <div className="p-5">
                <div className="bg-blue-500 shadow-lg shadow-blue-500/50 flex justify-center px-6 py-3 rounded-sm">
                  <p className="text-white font-bold">primary</p>
                </div>
              </div>
              <div className="p-5">
                <div className="bg-gray-500 shadow-lg shadow-gray-500/50 flex justify-center px-6 py-3 rounded-sm">
                  <p className="text-white font-bold">secondary</p>
                </div>
              </div>
              <div className="p-5">
                <div className="bg-lime-500 shadow-lg shadow-lime-500/50 flex justify-center px-6 py-3 rounded-sm">
                  <p className="text-white font-bold">success</p>
                </div>
              </div>
              <div className="p-5">
                <div className="bg-amber-500 shadow-lg shadow-amber-500/50 flex justify-center px-6 py-3 rounded-sm">
                  <p className="text-white font-bold">warning</p>
                </div>
              </div>
              <div className="p-5">
                <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 flex justify-center px-6 py-3 rounded-sm">
                  <p className="text-white font-bold">info</p>
                </div>
              </div>
              <div className="p-5">
                <div className="bg-red-500 shadow-lg shadow-red-500/50 flex justify-center px-6 py-3 rounded-sm">
                  <p className="text-white font-bold">error</p>
                </div>
              </div>
              {/* border colors */}
              <div className="p-5">
                <div className="border-1 border-blue-500 text-blue-500 flex justify-center px-6 py-3 rounded-sm">
                  <p className="font-bold">primary</p>
                </div>
              </div>
              <div className="p-5">
                <div className="border-1 border-gray-500 text-gray-500 flex justify-center px-6 py-3 rounded-sm">
                  <p className="font-bold">secondary</p>
                </div>
              </div>
              <div className="p-5">
                <div className="border-1 border-lime-500 text-lime-500 flex justify-center px-6 py-3 rounded-sm">
                  <p className=" font-bold">success</p>
                </div>
              </div>
              <div className="p-5">
                <div className="border-1 border-amber-500 text-amber-500flex justify-center px-6 py-3 rounded-sm">
                  <p className="font-bold">warning</p>
                </div>
              </div>
              <div className="p-5">
                <div className="border-1 border-cyan-500 text-cyan-500 flex justify-center px-6 py-3 rounded-sm">
                  <p className=" font-bold">info</p>
                </div>
              </div>
              <div className="p-5">
                <div className="border-1 border-red-500 text-red-500 flex justify-center px-6 py-3 rounded-sm">
                  <p className="font-bold">error</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section>
        <div className="flex justify-between items-center text-[12px] px-5">
          <p>
            © All rights reserved{" "}
            <a
              className="hover:underline text-blue-500"
              href="https://codedthemes.com/"
              target="blank"
            >
              CodedThemes
            </a>
          </p>
          <p>
            Distributed by{" "}
            <a
              className="hover:underline text-blue-500"
              href="https://themewagon.com/"
              target="blank"
            >
              ThemeWagon
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shadow;
