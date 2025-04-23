"use client";
import React, { useRef, useState, useEffect } from "react";

export default function Udo() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);

  const [data, setData] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(data.length - 1);

  useEffect(() => {
    setCurrentIndex(data.length);
  }, [data]);

  
  const handleData1 = () => {
    const val = input1Ref.current.value.trim();
    if (val === "") {
      alert("This field is required.");
      return;
    }
    setData((prev) => [
      ...prev,
      {
        id: prev.length,
        data1: val,
      },
    ]);
    input1Ref.current.value = "";
  };

  const handleData2 = () => {
    const val = input2Ref.current.value.trim();
    if (val === "") {
      alert("This field is required.");
      return;
    }
    setData((prev) => [
      ...prev,
      {
        id: prev.length,
        data2: val,
      },
    ]);
    input2Ref.current.value = "";
  };

  const handleUndo = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      if (data[newIndex].data1) {
        input1Ref.current.value = data[newIndex].data1;
        input2Ref.current.value = "";
      } else {
        input2Ref.current.value = data[newIndex].data2;
        input1Ref.current.value = "";
      }
    }
  };

  const handleRedo = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < data.length) {
      setCurrentIndex(newIndex);
      if (data[newIndex].data1) {
        input1Ref.current.value = data[newIndex].data1;
        input2Ref.current.value = "";
      } else {
        input2Ref.current.value = data[newIndex].data2;
        input1Ref.current.value = "";
      }
    }
  };

  return (
    <div>
      <div className="mt-20 px-30">
        <input ref={input1Ref} className="border-2" type="text" />
        <button className="border-2 px-1 mx-2" onClick={handleData1}>
          Save
        </button>
        <br />
        <br />
        <input ref={input2Ref} className="border-2" type="text" />
        <button className="border-2 px-1 mx-2" onClick={handleData2}>
          Save
        </button>
        <br />
        <div className="flex gap-3 my-2">
          <button className="border-2 px-1 mx-2" onClick={handleUndo}>
            Undo
          </button>
          <button className="border-2 px-1 mx-2" onClick={handleRedo}>
            Redo
          </button>
        </div>
        <div className="flex gap-3 my-3 flex-wrap">
          {data.map((item) => (
            <div key={item.id} className="border-2 px-1 mx-2">
              {item.data1 || item.data2}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
