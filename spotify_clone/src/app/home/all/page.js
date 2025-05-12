import React from "react";
import Image from "next/image";

const All = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* made for you  */}
      <section className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <h3 className="text-secondary font-black text-2xl">Made For You</h3>
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
        {/* spotify cards made for you*/}
        <div className="flex gap-x-2">
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">
              Your weekly mixtape of fresh <span className="block">music.</span>
            </p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">
              Your weekly mixtape of fresh <span className="block">music.</span>
            </p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">
              Your weekly mixtape of fresh <span className="block">music.</span>
            </p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">
              Your weekly mixtape of fresh <span className="block">music.</span>
            </p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">
              Your weekly mixtape of fresh <span className="block">music.</span>
            </p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">
              Your weekly mixtape of fresh <span className="block">music.</span>
            </p>
          </div>
        </div>
      </section>
      {/* Your Top Mixes */}
      <section className="flex flex-col gap-y-3">
        <div className="flex justify-between">
          <h3 className="text-secondary font-black text-2xl">Your Top Mixes</h3>
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
        {/* spotify cards made for you*/}
        <div className="flex gap-x-2">
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">Your weekly mixtape of fresh <span className="block">music.</span></p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">Your weekly mixtape of fresh <span className="block">music.</span></p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">Your weekly mixtape of fresh <span className="block">music.</span></p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">Your weekly mixtape of fresh <span className="block">music.</span></p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">Your weekly mixtape of fresh <span className="block">music.</span></p>
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
            <div className="flex gap-x-[13%]">
              <p className="text-secondary">Discover Weekly</p>{" "}
              <p className="text-pink">50</p>
            </div>
            <p className="text-primary text-[11px]">Your weekly mixtape of fresh <span className="block">music.</span></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default All;
