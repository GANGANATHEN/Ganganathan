import React from "react";
import Link from "next/link";

const Typography = () => {
  return (
    <div className="flex flex-col gap-y-3">
      {/* Typography section */}
      <section className="flex flex-col gap-y-3">
        <div className="flex gap-2 text-[12px]">
          <Link className="text-stone-400" href="/">
            Home
          </Link>
          <p className="text-stone-400 select-none">/</p>
          <p className="font-black">Typography</p>
        </div>
        <h1 className="font-black text-[30px]">Typography</h1>
      </section>

      {/* Typography contents */}
      <section className="w-full flex gap-6">
        <div className="w-1/2 flex flex-col gap-y-6">
          {/* Basic box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Basic
            </h1>
            <div className="flex flex-col gap-1 px-5 pb-5">
              <h1 className="text-[38px] font-black">Inter</h1>
              <p className="text-[16px] font-black">Font Family</p>
              <p className="text-stone-400 text-[14px]">
                Regular&ensp;<span className="select-none">/</span>
                &ensp;Medium&ensp;<span className="select-none">/</span>
                &ensp;Bold
              </p>
            </div>
          </div>
          {/* Heading box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Heading
            </h1>
            <div className="flex flex-col gap-1 px-5 p-5 ">
              <h1 className="text-[38px] font-black">H1 Heading</h1>
              <p className="text-stone-400 text-[14px] border-b-1 border-gray-200 pb-3.5">
                Size: 38px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Bold&ensp;<span className="select-none">/</span>
                &ensp;Line Height: 46px
              </p>
            </div>
            <div className="flex flex-col gap-1 px-5 pb-5">
              <h2 className="text-[30px] font-black">H2 Heading</h2>
              <p className="text-stone-400 text-[14px] border-b-1 border-gray-200 pb-3.5">
                Size: 30px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Bold&ensp;<span className="select-none">/</span>
                &ensp;Line Height: 38px
              </p>
            </div>
            <div className="flex flex-col gap-1 px-5 pb-5">
              <h3 className="text-[24px] font-black">H3 Heading</h3>
              <p className="text-stone-400 text-[14px] border-b-1 border-gray-200 pb-3.5">
                Size: 24px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular & Bold&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 32px
              </p>
            </div>
            <div className="flex flex-col gap-1 px-5 pb-5">
              <h4 className="text-[20px] font-black">H4 Heading</h4>
              <p className="text-stone-400 text-[14px] border-b-1 border-gray-200 pb-3.5">
                Size: 20px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Bold&ensp;<span className="select-none">/</span>
                &ensp;Line Height: 28px
              </p>
            </div>
            <div className="flex flex-col gap-1 px-5 pb-5">
              <h5 className="text-[16px] font-black">H5 Heading</h5>
              <p className="text-stone-400 text-[14px] border-b-1 border-gray-200 pb-3.5">
                Size: 16px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular & Medium & Bold&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 24px
              </p>
            </div>
            <div className="flex flex-col gap-1 px-5 pb-5">
              <h6 className="text-[14px] font-semibold">
                H6 Heading / Subheading
              </h6>
              <p className="text-stone-400 text-[14px] border-b-1 border-gray-200 pb-3.5">
                Size: 14px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 22px
              </p>
            </div>
          </div>
          {/* Body 1 box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Body 1
            </h1>
            <div className="flex flex-col gap-1 px-5 p-5">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 14px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 22px
              </p>
            </div>
          </div>
          {/* Body 2 box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Body 2
            </h1>
            <div className="flex flex-col gap-1 px-5 p-5">
              <p className="text-[12px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 20px
              </p>
            </div>
          </div>
          {/* Subtitle 1 box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Subtitle 1
            </h1>
            <div className="flex flex-col gap-1 px-5 p-5">
              <p className="text-[14px] font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 14px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Medium&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 22px
              </p>
            </div>
          </div>
          {/* Subtitle 2 box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Subtitle 2
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[12px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Medium&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 20px
              </p>
            </div>
          </div>
          {/* Caption box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Caption
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[12px] font-thin">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 20px
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-y-6">
          {/* Alignment box */}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Alignment
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5 font-light text-[12px]">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Gutter Bottom box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Gutter Bottom
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[12px] font-thin">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 20px
              </p>
            </div>
          </div>
          {/* Overline box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Overline
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[12px] uppercase">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 20px
              </p>
            </div>
          </div>
          {/* Link box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Link
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <a className="text-blue-500 hover:underline text-[12px]" href="#">
                mantisdashboard.io
              </a>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 20px
              </p>
            </div>
          </div>
          {/* Colors box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Colors
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[14px]">This is a textPrimary text color.</p>
              <p className="text-[14px] text-gray-400">
                This is a textSecondary text color.
              </p>
              <p className="text-[14px] text-blue-600">
                This is a textPrimary text color.
              </p>
              <p className="text-[14px] text-zinc-400">
                This is a textPrimary text color.
              </p>
              <p className="text-[14px] text-lime-400">
                This is a textPrimary text color.
              </p>
              <p className="text-[14px] text-orange-400">
                This is a textPrimary text color.
              </p>
              <p className="text-[14px] text-red-400">
                This is a textPrimary text color.
              </p>
            </div>
          </div>
          {/* Paragraph box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Paragraph
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Regular&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 22px
              </p>
            </div>
          </div>
          {/* Font Style box*/}
          <div class="border-1 border-gray-200 bg-white rounded-lg">
            <h1 class="border-b-1 border-gray-200 font-bold p-5 text-[12px]">
              Font Style
            </h1>
            <div className="flex flex-col gap-2 px-5 p-5">
              <p className="text-[14px] italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[14px] italic font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-stone-400 text-[14px]">
                Size: 12px&ensp;<span className="select-none">/</span>
                &ensp;Weight: Italic Regular & Italic Bold&ensp;
                <span className="select-none">/</span>
                &ensp;Line Height: 22px
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* footer section */}
      <section>
        <div className="flex justify-between items-center text-[12px] px-3 mt-3">
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

export default Typography;
