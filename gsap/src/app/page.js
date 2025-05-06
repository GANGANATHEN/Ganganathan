"use client";
import Image from "next/image";
// bg-[url(/email.png)] bg-local md:bg-fixed
export default function Home() {
  return (
    <div className="mt-[10%] px-[10%]">
      <div className="group  bg-red-300 w-1/3 object-fill cursor-pointer">
        <div class="inline-block group-hover:text-violet-400 bg-violet-500 opacity-40 p-6 border-2 cursor-pointer hover:bg-gray-50 hover:border-blue-100">
          <Image
            className="bg-red-400 h-48 w-96"
            src="/email.png"
            width={300}
            height={300}
            alt="email"
          />
        </div>
        {/* <div className="absolute top-0 bg-blue-200 opacity-50">hlio</div> */}
      </div>
    </div>
  );
}
