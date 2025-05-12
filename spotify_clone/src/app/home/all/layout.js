import Link from "next/link";
import Image from "next/image";
import React from "react";

const All = ({ children }) => {
  return (
    <div>
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-x-6">
          <Link className="select px-4 py-2 rounded-md" href="/home">All</Link>
          <Link className="select px-4 py-2 rounded-md" href="./home/all/musics">Music</Link>
          <Link className="select px-4 py-2 rounded-md" href="/home/podcasts">Podcast</Link>
          <Link className="select px-4 py-2 rounded-md" href="/home/audiobooks">Audiobook</Link>
        </div>
        <div>
            <Image
            src="/home/all/all-btn.svg"
            width={25}
            height={25}
            alt = "all-btn"/>
        </div>
      </section>
      <section>{children}</section>
    </div>
  );
};

export default All;
