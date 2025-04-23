"use client"
import React, { useState, useMemo } from 'react';
    
export default function Example({ a, b }) {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log('Calculating result');
    return a + b;
  }, [a, b]);

  return (
    <div>
      <p>Result: {result}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
    </div>
  );
}