import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function plusCount() {
    setCount(count + 1);
  }
  function minuseCount() {
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <h1 className="counter__title">Counter:</h1>
      <h2 className="counter__subtitle">{count}</h2>
      <div className="counter__container">
        <button
          className="counter__btn btn btn-success"
          onClick={minuseCount}
        >
          -
        </button>
        <button
          className="counter__btn btn btn-danger"
          onClick={plusCount}
        >
          +
        </button>
      </div>
    </div>
  );
}
