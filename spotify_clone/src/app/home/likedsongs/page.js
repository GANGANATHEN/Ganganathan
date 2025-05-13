import React from "react";
import Image from "next/image";

const Likedsongs = () => {
  return (
    <div className="">
      <section className="flex justify-between">
        <Image src="/library/add.svg" width={25} height={25} alt="add icon" />
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
            <p>Filter: All</p>
          </div>
          <Image
            src="/library/search.svg"
            width={20}
            height={20}
            alt="search"
          />
        </div>
      </section>
    </div>
  );
};

export default Likedsongs;
