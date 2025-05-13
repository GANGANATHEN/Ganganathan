import Image from "next/image";
import { dashBoard } from "./constants/index.jsx";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      {/* dashboard */}
      <section>
        <h1 className="text-black">Dashboard</h1>
        <div className="flex justify-between mt-3">
        {dashBoard.map((data,index)=>(
          <div key={index.id} className="p-3 bg-white rounded-lg shadow-sm">
            <p className="text-gray-400">{data.title}</p>
            <div className="flex items-center justify-between mt-1">
              <span className="font-black text-[18px]">{data.total}</span>
              {data.rate<="50.0%" ? <span className="flex items-center rounded-sm bg-yellow-50 px-2 gap-2 text-[12px] border-1 border-yellow-400 text-yellow-500">{data.icon} <span>{data.rate}</span></span>: <span className="flex items-center rounded-sm bg-blue-50 px-2 gap-2 text-[12px] border-1 border-blue-400 text-blue-500">{data.icon} <span>{data.rate}</span></span> }
            </div>
            <p className="text-gray-400 text-[12px] mt-3">{data.para1} {data.rate<="50.0%" ? <span  className="text-yellow-500">{data.number}</span> : <span  className="text-blue-500">{data.number}</span>} {data.para2}<span className="block">{data.para3}</span> </p>
          </div>
        ))}
          
        </div>
      </section>
      {/* Unique Visitor */}
      <section>
        
      </section>
    </div>
  );
}
