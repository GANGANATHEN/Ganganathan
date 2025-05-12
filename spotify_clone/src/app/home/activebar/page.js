import React from "react";
import Image from "next/image";

const Activebar = () => {
  return (
    <div>
      {/*friends activebar contents */}
      <section className="mt-4 w-[30%] border-child px-4 py-3 flex flex-col gap-y-7">
        {/* top nav bar */}
        <div className="flex items-center justify-between">
          <p className="text-secondary">Friends Activity</p>
          <div className="flex gap-x-3">
            <Image
              className=""
              src="/activebar/add.svg"
              width={25}
              height={25}
              alt="add friend"
            />
            <Image
              className=""
              src="/activebar/close.svg"
              width={20}
              height={20}
              alt="liked songs"
            />
          </div>
        </div>
        {/* activebar content */}
        <div className="w-full flex gap-2">
          <Image
            className="w-[20%]"
            src="/activebar/profile/friend1.svg"
            width={20}
            height={20}
            alt="add friend"
          />
          <div className="w-[80%] flex flex-col">
            <div>Friendly Music Listener</div>
            <div className="flex items-center gap-x-2">
              <Image
                className=""
                src="/activebar/active.svg"
                width={15}
                height={15}
                alt="active image"
              />
              <p>Goosebumps</p>
              <p>·</p>
              <p>Travis Scott</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activebar;
