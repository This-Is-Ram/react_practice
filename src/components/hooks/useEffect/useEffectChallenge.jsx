import { useState, useEffect } from "react";

export const EffectChallenge = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Use useEffect to handle document title updates
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only runs when `count` changes

  return (
    <>
      <section className="w-screen h-screen flex justify-center items-center bg-violet-500">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 flex flex-col gap-4 bg-gray-300 text-black items-center">
          <h1 className="font-bold">useEffect Challenge</h1>
          <p>
            Count: <span>{count}</span>
          </p>
          <button
            onClick={handleIncrement}
            className="bg-violet-400 px-2 rounded-md"
          >
            Increment
          </button>
          <p>Name: {inputValue}</p>
          <input
            onChange={handleInputChange}
            value={inputValue}
            type="text"
            placeholder="Enter your name:"
            className="px-4 py-1"
          />
        </div>
      </section>
    </>
  );
};
