import { memo, useEffect, useMemo, useState } from "react";

export const ParentComponentUseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <CountCompo />
        <button onClick={() => setCount(count + 1)}>increment</button>
        <br />
        <h1>value : {count}</h1>
      </div>
    </>
  );
};

const CountCompo = () => {
  const sum = () => {
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i += 1;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  //   const total = sum();
  return <p>the total value is : {total}</p>;
};
