"use client";
import Image from "next/image";
// bg-[url(/email.png)] bg-local md:bg-fixed
export default function Home() {
  return (
    <div className="">
      <section className="relative pb-[30%] bg-red-50 pt-30">
        <div className="cards flex mx-[5%] -space-x-20">
          <div className="store group z-0">
            <div className="mt-5 isolate bg-sky-300 group-hover:bg-sky-100 group-hover:text-sky-300 -rotate-5 rounded-t-2xl cursor-pointer transition-all group-hover:-translate-y-6 duration-300 ease-out">
              <div className="p-7">
                <h1 className="text-3xl font-semibold">Online store ▸</h1>
                <p className="py-2">
                  Sell anything. Upload your content and leave
                  <span className="block">
                    the hosting, checkout, and delivery to us.
                  </span>
                </p>
              </div>
              <div className="store-img">
                <img src="/store.png" alt="email"></img>
              </div>
            </div>
          </div>
          <div className="website z-1 group">
            <div className="isolate bg-orange-300 group-hover:bg-orange-100 group-hover:text-orange-300 rounded-t-2xl cursor-pointer group-hover:-translate-y-6 duration-300 ease-in">
              <div className="p-7">
                <h1 className="text-3xl font-semibold">Website ▸</h1>
                <p className="py-2">
                  Build a beautiful website in less than 10
                  <span className="block">
                    minutes with professionally designed
                  </span>
                  templates.
                </p>
              </div>
              <div className="website-img">
                <img src="/website.png" alt="email"></img>
              </div>
            </div>
          </div>
          <div className="email z-2 group">
            <div className="mt-5 isolate bg-purple-300 group-hover:bg-purple-100 group-hover:text-purple-300 rotate-5 rounded-t-2xl cursor-pointer group-hover:-translate-y-6 duration-300 ease-out">
              <div className="p-7">
                <h1 className="text-3xl font-semibold">Email Marketing ▸</h1>
                <p className="py-2">
                  Beautiful email marketing that works{" "}
                  <span className="block">
                    perfectly with your online store and website
                  </span>
                </p>
              </div>
              <div className="email-img">
                <img src="/email.png" alt="email"></img>
              </div>
            </div>
          </div>
        </div>
        <section className="absolute bottom-[0] z-3 w-[100%] pb-[40%] rounded-t-[30%] shadow-sm bg-white"></section>
      </section>
      {/* <div className="flex justify-center pb-[30%]">
        <button
          class="rounded-md border-2 border-black w-[100px] h-[50px]
  transition-all hover:scale-up-center relative
  "
        >
          <div class="bg-sample w-full h-full flex flex-col justify-center peer">
            SUBMIT
          </div>
          <div
            class="transition-all w-0 peer-hover:w-full h-[2px] bg-black absolute
      top-8 ease-out
"
          ></div>
        </button>
      </div> */}
    </div>
  );
}
