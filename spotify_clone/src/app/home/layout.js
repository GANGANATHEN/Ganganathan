"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const House = ({ children }) => {
  return (
    <div className="w-[90%]">
      <div className="flex justify-between">
        <ul>
          <li>
            <Image
              src="/navbar/library.svg"
              width={20}
              height={20}
              alt="my-library"
            />
            <Link href="/library">My Library</Link>
          </li>
        </ul>
        <div>2</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default House;
