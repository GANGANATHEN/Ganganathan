"use client"
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  var tl = gsap.timeline();
  useEffect(() => {
  gsap.to(".box", { rotation: 360,})
  tl.to(".box1", {duration: 2, x: 646});
  }, [])
  
  return (
    <div className="text-red-400 flex flex-col gap-y-5 w-[80%] mt-[5%] mx-[10%]">
      <h1 className="text-[40px]">hello</h1>
      <div className="box bg-sky-300"></div>
      <div className="box1 w-20 h-20 bg-sky-300"></div>
    </div>
  );
}
