"use client"
import { useRouter } from 'next/navigation'
import Image from "next/image";

export default function Home() {
  const router = useRouter()

  return (
    <div className="h-screen mt-[5%] flex justify-center items-center">
      <button
            className="cursor-pointer bg-emerald-700 border-1 border-teal-700 hover:bg-emerald-950  px-[70px] mt-4 py-3 rounded-lg text-white text-[17px]"
            onClick={() => router.push("./home")}
          >spotify
          </button>
    </div>
  );
}
