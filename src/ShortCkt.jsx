import { useState } from "react";

export const ShortCkt = () => {
  const [inVal, setInVal] = useState(1); // input value
  const [count, setCount] = useState(0); // increment or decrement

  // Getting input value
  const handleInputValue = (e) => {
    setInVal(Number(e.target.value));
  };

  // Incrementing function
  const incrementingVal = (e) => {
    setCount((prevCount) => {
      const newCount = prevCount + inVal;
      return newCount > 100 ? prevCount : newCount;
    });
  };

  // Decrementing function
  const decrementingVal = () => {
    setCount((prevCount) => {
      const newCount = prevCount - inVal;
      return newCount < 0 ? 0 : newCount;
    });
  };

  return (
    <>
      <div className="flex flex-col w-screen items-center bg-gray-400">
        <p>count : {count} </p>
        <input
          type="number"
          placeholder="Enter Number < 100 : "
          value={inVal}
          onChange={handleInputValue}
        />
        <div className="flex w-[50vh] my-4 justify-around">
          <button onClick={incrementingVal} className="bg-black text-white p-2">
            Increment
          </button>

          <button onClick={decrementingVal} className="bg-black text-white p-2">
            Decrement
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-black text-white p-2"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
