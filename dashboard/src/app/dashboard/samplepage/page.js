import React from "react";
import Link from "next/link";

const Samplepage = () => {
  return (
    <div className="h-[90%] flex flex-col justify-between py-3">
    {/* header section */}
      <section>
        <div className="flex gap-2 text-[14px]">
          <Link href="/" className="text-gray-400 cursor-pointer">Home /</Link>{" "}
          <p className="font-black">Sample Page</p>
        </div>
        <h1 className="font-black text-3xl mt-3">Sample Page</h1>
        <div className="border-1 border-gray-200 mt-5 rounded-lg">
          <p className="p-5 font-black text-[12px] bg-white border-b-1 border-b-gray-200">Sample Card</p>
          <p className="p-5 bg-white text-[12px]">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion
            tempos incident ut laborers et doolie magna alissa. Ut enif ad minim
            venice, quin nostrum exercitation illampu laborings nisi ut liquid
            ex ea commons construal. Duos aube grue dolor in reprehended in
            voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin
            ocean cuspidate non president, sunk in culpa qui officiate descent
            molls anim id est labours.
          </p>
        </div>
      </section>
      {/* footer section */}
      <section>
        <div className="flex justify-between items-center text-[12px] px-5">
          <p>© All rights reserved <a className="hover:underline text-blue-500" href="https://codedthemes.com/" target="blank">CodedThemes</a></p>
          <p>Distributed by  <a className="hover:underline text-blue-500" href="https://themewagon.com/" target="blank">ThemeWagon</a></p>
        </div>
      </section>
    </div>
  );
};

export default Samplepage;
