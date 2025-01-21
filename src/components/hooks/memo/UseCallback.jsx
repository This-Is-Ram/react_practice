import React, { useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return (
    <button className="bg-green-500 text-black p-2 my-4" onClick={onClick}>
      Click me
    </button>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);

  // Memoized function to prevent unnecessary re-renders
  const handleClick = useCallback(() => {
    console.log("Child Button clicked");
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>

      <button
        className="bg-green-500 text-black p-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>

      <br />

      <Child onClick={handleClick} />
    </>
  );
};

export default Parent;
