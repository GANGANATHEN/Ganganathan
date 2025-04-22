"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([
    {
      id: 0,
      data1: "data1",
    },
    {
      id: 1,
      data1: "data2",
    },
    {
      id: 2,
      data2: "data3",
    },
  ]);
  const [undo, setUndo] = useState("");
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const [udoCount, setUdoCount] = useState(data.length);

  useEffect(() => {
    setUdoCount(data.length);
  }, [data]);

  console.log(data);

  function handleData1() {
    if (data1 === "") {
      alert("This field is required.");
    } else {
      setData((prevState) => [
        ...prevState,
        {
          id: prevState.length,
          data1: data1,
        },
      ]);
      console.log("else data1", data1);
    }
    console.log("fun data1", data1);
    setData2("");
  }

  function handleData2() {
    if (data2 === "") {
      alert("This field is required.");
    } else {
      setData((prevState) => [
        ...prevState,
        {
          id: prevState.length,
          data2: data2,
        },
      ]);
      console.log("else data2", data2);
    }
    console.log("fun data2", data2);
    setData1("");
  }

  function handleUndo() {
    console.log("us", udoCount);
    var count = udoCount - 1;
    if (count >= 0) {
      setUdoCount(count);
      if (data[`${count}`].data1) {
        setData1(data[`${udoCount}`].data1);
        console.log("Undo", data[`${count}`].data1);
        setData2("");
      } else {
        setData2(data[`${udoCount}`].data2);
        console.log("Undo", data[`${count}`].data2);
        setData1("");
      }
    }

    console.log("ue", udoCount);
  }

  function handleRedo() {
    console.log("rs", udoCount);
    var count = udoCount + 1;
    if (count < data.length) {
      setUdoCount(count);
      if (data[`${count}`].data1) {
        setData1(data[`${udoCount}`].data1);
        console.log("Redo", data[`${count}`].data1);
        setData2("");
      } else {
        setData2(data[`${udoCount}`].data2);
        console.log("Redo", data[`${count}`].data2);
        setData1("");
      }
    }
    console.log("re", udoCount);
  }

  return (
    <div>
      <div className="mt-20 px-30">
        <input
          className="border-2"
          value={data1}
          type="text"
          onChange={(e) => setData1(e.target.value)}
        ></input>
        <button className="border-2 px-1 mx-2" onClick={() => handleData1()}>
          save
        </button>
        <br></br>
        <br></br>
        <input
          className="border-2"
          type="text"
          onChange={(e) => setData2(e.target.value)}
        ></input>
        <button className="border-2 px-1 mx-2" onClick={() => handleData2()}>
          save
        </button>
        <br></br>
        <div className="flex gap-3 my-2">
          <button className="border-2 px-1 mx-2" onClick={() => handleUndo()}>
            Undo
          </button>
          <button className="border-2 px-1 mx-2" onClick={() => handleRedo()}>
            Redo
          </button>
        </div>
        <div className="flex gap-3 my-3">
          {data.map((item) => (
            <div key={item.id} className="border-2 px-1 mx-2">
              {item.data1}
              {item.data2}
            </div>
          ))}
        </div>
        {/* <p>undo = {redo}</p> */}
        <p>{undo}</p>
      </div>
    </div>
  );
}
