import React, { useState, useMemo } from "react";

const ChildComponent = React.memo(({ value, BioData }) => {
  console.log("Child rendered");

  return (
    <>
      {/* <p>child count : {count}</p> */}
      <p>Value: {value}</p>
      <h1>{BioData.name}</h1>
    </>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Hello");

  const myBioData = useMemo(() => {
    return {
      name: "ram",
      age: 19,
    };
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent value={value} BioData={myBioData} />
    </>
  );
};

export default ParentComponent;
