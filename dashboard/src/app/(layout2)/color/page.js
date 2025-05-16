import React from "react";
import Link from "next/link";

const Color = () => {
  return (
    <div className="">
      {/* Color section */}
      <section className="flex flex-col gap-y-5">
        <div className="text-[14px] flex">
          <Link className="text-zinc-400" href="/">
            Home&ensp;
          </Link>
          <span className="select-none text-zinc-400">/</span>
          <p className="font-bold">&ensp;Color</p>
        </div>
        <h1 className="font-bold text-[30px]">Color</h1>
      </section>
      {/* Color contents */}
      <section>
        <div className="grid grid-cols-3 gap-5">
          {/* Primary Color box */}
          <div className=" bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold text-[14px] border-b-1 border-gray-200 p-5">
              Primary Color
            </h1>
            <div className="p-5 font-bold">
              <div className="flex justify-between items-center p-5 bg-blue-50 shadow-sm">
                <p className="text-[12px]">
                  Blue-1
                  <span className="block text-[14px] mt-1">#e6f7ff</span>
                </p>
                <p className="text-[14px]">primary.lighter</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-100 shadow-sm">
                <p className="text-[12px]">
                  Blue-2
                  <span className="block text-[14px] mt-1">#bae7ff</span>
                </p>
                <p className="text-[14px]">primary[100]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-200 shadow-sm">
                <p className="text-[12px]">
                  Blue-3
                  <span className="block text-[14px] mt-1">#91d5ff</span>
                </p>
                <p className="text-[14px]">primary[200]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-300 shadow-sm">
                <p className="text-[12px]">
                  Blue-4
                  <span className="block text-[14px] mt-1">#69c0ff</span>
                </p>
                <p className="text-[14px]">primary.light</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-400 shadow-sm text-white">
                <p className="text-[12px]">
                  Blue-5
                  <span className="block text-[14px] mt-1">#40a9ff</span>
                </p>
                <p className="text-[14px]">primary[400]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-500 shadow-sm text-white border-1 border-dashed border-white">
                <p className="text-[12px]">
                  Blue-6
                  <span className="block text-[14px] mt-1">#1890ff</span>
                </p>
                <p className="text-[14px]">primary.main</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-600 shadow-sm text-white">
                <p className="text-[12px]">
                  Blue-7
                  <span className="block text-[14px] mt-1">#096dd9</span>
                </p>
                <p className="text-[14px]">primary.dark</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-700 shadow-sm text-white">
                <p className="text-[12px]">
                  Blue-8
                  <span className="block text-[14px] mt-1">#0050b3</span>
                </p>
                <p className="text-[14px]">primary[700]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-800 shadow-sm text-white">
                <p className="text-[12px]">
                  Blue-9
                  <span className="block text-[14px] mt-1">#003a8c</span>
                </p>
                <p className="text-[14px]">primary.darker</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-blue-900 shadow-sm text-white">
                <p className="text-[12px]">
                  Blue-10
                  <span className="block text-[14px] mt-1">#002766</span>
                </p>
                <p className="text-[14px]">primary.900</p>
              </div>
            </div>
          </div>
          {/* Secondary Color box */}
          <div className=" bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold text-[14px] border-b-1 border-gray-200 p-5">
            Secondary Color
            </h1>
            <div className="p-5 font-bold">
              <div className="flex justify-between items-center p-5 bg-gray-50 shadow-sm">
                <p className="text-[12px]">
                Grey-1
                  <span className="block text-[14px] mt-1">#fafafa</span>
                </p>
                <p className="text-[14px]">secondary.lighter</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-100 shadow-sm">
                <p className="text-[12px]">
                Grey-2
                  <span className="block text-[14px] mt-1">#f5f5f5</span>
                </p>
                <p className="text-[14px]">secondary[100]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-200 shadow-sm">
                <p className="text-[12px]">
                Grey-3
                  <span className="block text-[14px] mt-1">#f0f0f0</span>
                </p>
                <p className="text-[14px]">secondary[200]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-300 shadow-sm">
                <p className="text-[12px]">
                Grey-4
                  <span className="block text-[14px] mt-1">#d9d9d9</span>
                </p>
                <p className="text-[14px]">secondary.light</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-400 shadow-sm">
                <p className="text-[12px]">
                Grey-5
                  <span className="block text-[14px] mt-1">#bfbfbf</span>
                </p>
                <p className="text-[14px]">secondary[400]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-500 shadow-sm text-white border-1 border-dashed border-white">
                <p className="text-[12px]">
                Grey-6
                  <span className="block text-[14px] mt-1">#8c8c8c</span>
                </p>
                <p className="text-[14px]">secondary.main</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-600 shadow-sm text-white">
                <p className="text-[12px]">
                Grey-7
                  <span className="block text-[14px] mt-1">#595959</span>
                </p>
                <p className="text-[14px]">secondary.600</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-700 shadow-sm text-white">
                <p className="text-[12px]">
                Grey-8
                  <span className="block text-[14px] mt-1">#141414</span>
                </p>
                <p className="text-[14px]">secondary[800]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-800 shadow-sm text-white">
                <p className="text-[12px]">
                Grey-9
                  <span className="block text-[14px] mt-1">#141414</span>
                </p>
                <p className="text-[14px]">secondary[800]</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-gray-900 shadow-sm text-white">
                <p className="text-[12px]">
                Grey-10
                  <span className="block text-[14px] mt-1">#000000</span>
                </p>
                <p className="text-[14px]">secondary.darker</p>
              </div>
            </div>
          </div>
          {/* Other Color box */}
          <div className=" h-[38%] bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold text-[14px] border-b-1 border-gray-200 p-5">
            Other Color
            </h1>
            <div className="p-5 font-bold">
              <div className="flex justify-between items-center p-5 bg-white shadow-sm">
                <p className="text-[12px]">
                Grey-A1
                  <span className="block text-[14px] mt-1">#ffffff</span>
                </p>
                <p className="text-[14px]">secondary.A100</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-slate-400 shadow-sm text-white">
                <p className="text-[12px]">
                Grey-A2
                  <span className="block text-[14px] mt-1">#434343</span>
                </p>
                <p className="text-[14px]">secondary.A200</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-slate-700 shadow-sm text-white">
                <p className="text-[12px]">
                Grey-A3
                  <span className="block text-[14px] mt-1">#f0f0f0</span>
                </p>
                <p className="text-[14px]">secondary[200]</p>
              </div>
            </div>
          </div>
          {/* Success Color Color box */}
          <div className=" bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold text-[14px] border-b-1 border-gray-200 p-5">
            Success Color
            </h1>
            <div className="p-5 font-bold">
              <div className="flex justify-between items-center p-5 bg-lime-50 shadow-sm">
                <p className="text-[12px]">
                Green-1
                  <span className="block text-[14px] mt-1">#f6ffed</span>
                </p>
                <p className="text-[14px]">success.lighter</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-lime-200 shadow-sm">
                <p className="text-[12px]">
                Green-4
                  <span className="block text-[14px] mt-1">#95de64</span>
                </p>
                <p className="text-[14px]">success.light</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-lime-500 shadow-sm text-white border-1 border-dashed border-white">
                <p className="text-[12px]">
                Green-6
                  <span className="block text-[14px] mt-1">#52c41a</span>
                </p>
                <p className="text-[14px]">success.main</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-lime-700 shadow-sm text-white">
                <p className="text-[12px]">
                Green-8
                  <span className="block text-[14px] mt-1">#237804</span>
                </p>
                <p className="text-[14px]">success.dark</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-lime-900 shadow-sm text-white">
                <p className="text-[12px]">
                Green-10
                  <span className="block text-[14px] mt-1">#092b00</span>
                </p>
                <p className="text-[14px]">success.darker</p>
              </div>
            </div>
          </div>
          {/* Error Color Color box */}
          <div className=" bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold text-[14px] border-b-1 border-gray-200 p-5">
            Error Color
            </h1>
            <div className="p-5 font-bold">
              <div className="flex justify-between items-center p-5 bg-red-50 shadow-sm">
                <p className="text-[12px]">
                Red-1
                  <span className="block text-[14px] mt-1">#fff1f0</span>
                </p>
                <p className="text-[14px]">error.lighter</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-red-200 shadow-sm">
                <p className="text-[12px]">
                Red-4
                  <span className="block text-[14px] mt-1">#ff7875</span>
                </p>
                <p className="text-[14px]">error.light</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-red-500 shadow-sm text-white border-1 border-dashed border-white">
                <p className="text-[12px]">
                Red-6
                  <span className="block text-[14px] mt-1">#f5222d</span>
                </p>
                <p className="text-[14px]">error.main</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-red-700 shadow-sm text-white">
                <p className="text-[12px]">
                Red-8
                  <span className="block text-[14px] mt-1">#a8071a</span>
                </p>
                <p className="text-[14px]">error.dark</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-red-900 shadow-sm text-white">
                <p className="text-[12px]">
                Red-10
                  <span className="block text-[14px] mt-1">#5c0011</span>
                </p>
                <p className="text-[14px]">error.darker</p>
              </div>
            </div>
          </div>
          {/* Warning Color Color box */}
          <div className=" bg-white border-1 border-gray-200 rounded-sm">
            <h1 className="font-bold text-[14px] border-b-1 border-gray-200 p-5">
            Warning Color
            </h1>
            <div className="p-5 font-bold">
              <div className="flex justify-between items-center p-5 bg-amber-50 shadow-sm">
                <p className="text-[12px]">
                Gold-1
                  <span className="block text-[14px] mt-1">#fffbe6</span>
                </p>
                <p className="text-[14px]">warning.lighter</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-amber-200 shadow-sm">
                <p className="text-[12px]">
                Gold-4
                  <span className="block text-[14px] mt-1">#ffd666</span>
                </p>
                <p className="text-[14px]">warning.light</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-amber-500 shadow-sm text-white border-1 border-dashed border-white">
                <p className="text-[12px]">
                Gold-6
                  <span className="block text-[14px] mt-1">#faad14</span>
                </p>
                <p className="text-[14px]">warning.main</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-amber-700 shadow-sm text-white">
                <p className="text-[12px]">
                Gold-8
                  <span className="block text-[14px] mt-1">#ad6800</span>
                </p>
                <p className="text-[14px]">warning.dark</p>
              </div>
              <div className="flex justify-between items-center p-5 bg-amber-900 shadow-sm text-white">
                <p className="text-[12px]">
                Gold-10
                  <span className="block text-[14px] mt-1">#613400</span>
                </p>
                <p className="text-[14px]">warning.darker</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section className="mt-5">
        <div className="flex justify-between items-center text-[12px] px-3">
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

export default Color;