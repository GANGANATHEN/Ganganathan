"use client";
import React, { useState, useCallback } from 'react';
    
export default function Example({ onClick }) {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    onClick(count);
  }, [count, onClick]);

  return (
    <button onClick={handleClick}>
      Click me ({count})
    </button>
  );
}