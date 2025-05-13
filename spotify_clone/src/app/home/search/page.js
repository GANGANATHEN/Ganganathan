import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <div className="">
      {/* Recent history */}
      <section className="flex flex-col justify-between gap-y-6">
        <div className="flex justify-between">
          <h3 className="text-secondary font-black text-sm">
            Reacent Searches
          </h3>
          <Image src="/search/3-dot.svg" width={25} height={25} alt="3-dot" />
        </div>
        {/* Recent history images */}
        <div className="flex gap-x-6 text-[12px]">
          <div className="relative flex">
            <div className="text-center">
              <Image
                className="rounded-[50%]"
                src="/search/history/a1.png"
                width={100}
                height={100}
                alt="artist 1"
              />
              <Image
                className="absolute top-[-7%] right-[8%] rounded-[50%] bg-col py-1 px-1"
                src="/search/clear.svg"
                width={25}
                height={25}
                alt="clear image"
              />
              <p className="mt-2">David Browie</p>
            </div>
          </div>
          <div className="relative flex">
            <div className="text-center">
              <Image
                className="rounded-[50%]"
                src="/search/history/a2.svg"
                width={100}
                height={100}
                alt="artist 2"
              />
              <Image
                className="absolute top-[-7%] right-[8%] rounded-[50%] bg-col py-1 px-1"
                src="/search/clear.svg"
                width={25}
                height={25}
                alt="clear image"
              />
              <p className="mt-2">Daft Punk</p>
            </div>
          </div>
          <div className="relative flex">
            <div className="">
              <Image
                className="rounded-lg"
                src="/search/history/1/1.svg"
                width={100}
                height={100}
                alt="first image"
              />
              <Image
                className="absolute top-[-5%] left-1"
                src="/search/history/1/11.svg"
                width={90}
                height={90}
                alt="second image"
              />
              <Image
                className="absolute top-[-7%] right-[8%] rounded-[50%] bg-col py-1 px-1"
                src="/search/clear.svg"
                width={25}
                height={25}
                alt="clear image"
              />
              <p className="mt-2 text-secondary">Black Holes...</p>
              <p className="mt-2">Muse</p>
            </div>
          </div>
        </div>
        {/* Browse All -> discover and genres */}
        <div className="flex flex-col justify-between">
          <h1 className="text-secondary font-black text-sm">Browse All</h1>
          {/* discover contents */}
          <div className="flex justify-between mt-3">
            <h3 className="text-secondary text-sm">Discover</h3>
            <div className="flex gap-x-4">
              <Image
                src="/home/all/l-arrow.svg"
                width={20}
                height={20}
                alt="l-arrow"
              />
              <Image
                src="/home/all/r-arrow.svg"
                width={20}
                height={20}
                alt="r-arrow"
              />
              <Image
                src="/home/all/3-dot.svg"
                width={20}
                height={20}
                alt="3-dot"
              />
            </div>
          </div>
          {/* discover content images */}
          <div className="flex py-5 gap-x-4">
            <Image
              src="/search/discover/1.svg"
              width={100}
              height={100}
              alt="1"
            />
            <Image
              src="/search/discover/2.svg"
              width={100}
              height={100}
              alt="2"
            />
            <Image
              src="/search/discover/3.svg"
              width={100}
              height={100}
              alt="3"
            />
            <Image
              src="/search/discover/4.svg"
              width={100}
              height={100}
              alt="4"
            />
            <Image
              src="/search/discover/5.svg"
              width={100}
              height={100}
              alt="5"
            />
            <Image
              src="/search/discover/6.svg"
              width={100}
              height={100}
              alt="6"
            />
            <Image
              src="/search/discover/7.svg"
              width={100}
              height={100}
              alt="7"
            />
            <Image
              src="/search/discover/8.svg"
              width={100}
              height={100}
              alt="8"
            />
          </div>
        </div>
        {/* genres contents */}
        <div className="flex justify-between mt-3">
            <h3 className="text-secondary text-sm">Genres</h3>
            <div className="flex gap-x-4">
              <Image
                src="/home/all/l-arrow.svg"
                width={20}
                height={20}
                alt="l-arrow"
              />
              <Image
                src="/home/all/r-arrow.svg"
                width={20}
                height={20}
                alt="r-arrow"
              />
              <Image
                src="/home/all/3-dot.svg"
                width={20}
                height={20}
                alt="3-dot"
              />
            </div>
          </div>
          {/* genres content images */}
          <div className="flex py-5 gap-x-4">
            <Image
              src="/search/genres/1.svg"
              width={100}
              height={100}
              alt="1"
            />
            <Image
              src="/search/genres/2.svg"
              width={100}
              height={100}
              alt="2"
            />
            <Image
              src="/search/genres/3.svg"
              width={100}
              height={100}
              alt="3"
            />
            <Image
              src="/search/genres/4.svg"
              width={100}
              height={100}
              alt="4"
            />
            <Image
              src="/search/genres/5.svg"
              width={100}
              height={100}
              alt="5"
            />
            <Image
              src="/search/genres/6.svg"
              width={100}
              height={100}
              alt="6"
            />
            <Image
              src="/search/genres/7.svg"
              width={100}
              height={100}
              alt="7"
            />
            <Image
              src="/search/genres/8.svg"
              width={100}
              height={100}
              alt="8"
            />
          </div>
      </section>
    </div>
  );
};

export default Search;
