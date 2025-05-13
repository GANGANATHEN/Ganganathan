import React from "react";
import Image from "next/image";

const Library = () => {
  return (
    <div className=" flex flex-col gap-y-9">
      <section className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <Image src="/library/menu.svg" width={20} height={20} alt="menu" />
          <Image
            src="/library/group-icon.svg"
            width={20}
            height={20}
            alt="group icon"
          />
          <div className="flex items-center gap-x-2 text-[12px]">
            <Image
              src="/library/arrow.svg"
              width={20}
              height={20}
              alt="arrow"
            />
            <p>Recent</p>
          </div>
          <div className="flex items-center gap-x-2 text-[12px]">
            <Image
              src="/library/group.svg"
              width={20}
              height={20}
              alt="group"
            />
            <p>Group</p>
          </div>
          <Image
            src="/library/search.svg"
            width={20}
            height={20}
            alt="search"
          />
        </div>
        <Image src="/library/add.svg" width={25} height={25} alt="add icon" />
      </section>
      <section>
        <div className="flex gap-x-6 text-[12px]">
          <div className="relative flex flex-col gap-y-3">
            <Image
              className="rounded-lg object-cover"
              src="/library/liked/1.svg"
              width={150}
              height={150}
              alt="/library/liked/1.svg"
            />
            <Image
              className="absolute z-1 top-[-3%] left-1 object-cover"
              src="/library/liked/2.svg"
              width={140}
              height={140}
              alt="/library/liked/2.svg"
            />
            <Image
              className="absolute z-1 top-[-7%] left-2 object-cover"
              src="/library/liked/3.svg"
              width={130}
              height={130}
              alt="/library/liked/3.svg"
            />
            <Image
              className="z-1 absolute top-[-7%] right-[8%] rounded-[50%] select py-1 px-1"
              src="/library/pin.svg"
              width={25}
              height={25}
              alt="clear image"
            />
            <div className="flex flex-col gap-y-3">
              <div className="flex justify-between">
                <p className="text-secondary">Liked Songs</p>
                <p>8</p>
              </div>
              <p className="text-[12px]">
                Numb. Crawling, In the End.
                <span className="block">and more</span>
              </p>
            </div>
          </div>
          <div className="relative flex flex-col text-center">
            <Image
              className="rounded-[50%]"
              src="/search/history/a1.png"
              width={100}
              height={100}
              alt="artist 1"
            />
            <Image
              className="absolute top-[-7%] right-[8%] rounded-[50%] select py-1 px-1"
              src="/library/pin.svg"
              width={25}
              height={25}
              alt="clear image"
            />
            <p className="mt-2">David Browie</p>
          </div>
          <div className="relative flex flex-col text-center">
            <Image
              className="rounded-[50%]"
              src="/search/history/a2.svg"
              width={100}
              height={100}
              alt="artist 2"
            />
            <Image
              className="absolute top-[-7%] right-[8%] rounded-[50%] select py-1 px-1"
              src="/library/pin.svg"
              width={25}
              height={25}
              alt="clear image"
            />
            <p className="mt-2">Daft Punk</p>
          </div>
          <div className="relative flex flex-col">
            <Image
              className="rounded-lg"
              src="/search/history/1/1.svg"
              width={100}
              height={100}
              alt="first image"
            />
            <Image
              className="absolute top-[-4%] left-1"
              src="/search/history/1/11.svg"
              width={90}
              height={90}
              alt="second image"
            />
            <Image
              className="absolute top-[-7%] right-[8%] rounded-[50%] select py-1 px-1"
              src="/library/pin.svg"
              width={25}
              height={25}
              alt="clear image"
            />
            <p className="mt-2 text-secondary">Black Holes...</p>
            <p className="mt-2">Muse</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="relative">
              <Image
                className="rounded-lg object-cover"
                src="/home/all/discover/1.svg"
                width={150}
                height={150}
                alt="discover/1.svg"
              />
              <Image
                className="absolute z-1 top-[-5%] left-1 object-cover"
                src="/home/all/discover/2.svg"
                width={140}
                height={140}
                alt="discover/2.svg"
              />
              <Image
                className="absolute z-1 top-[-7%] left-2 object-cover"
                src="/home/all/discover/3.svg"
                width={130}
                height={130}
                alt="discover/3.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
