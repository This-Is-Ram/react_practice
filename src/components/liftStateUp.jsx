import { useState } from "react";

export const LiftStateUp = () => {
  const [Data, setData] = useState("");
  return (
    <>
      <Child1 Data={Data} setData={setData} />
      <Child2 Data={Data} />
    </>
  );
};
function Child1({ Data, setData }) {
  return (
    <>
      <input
        type="text"
        value={Data}
        placeholder="enter somthing ..."
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
}

function Child2({ Data }) {
  return (
    <>
      <h1>Child1 data : {Data}</h1>
    </>
  );
}
