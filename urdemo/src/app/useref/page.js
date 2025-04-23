"use client";
import React, { useRef, useEffect } from "react";

export default function Example() {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
    console.log(inputEl.current.value);
  }, []);

  return <input type="text" ref={inputEl} />;
}
