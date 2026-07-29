"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <div className="button-group">
        <button className="btn primary" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
      </div>
    </div>
  );
}