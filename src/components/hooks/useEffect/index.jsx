import { useEffect, useState } from "react";

export const UseEffectEx = () => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setInterval(() => {
      const upDate = new Date();
      const updatedDate = upDate.toLocaleTimeString();
      setDate(updatedDate);
    }, 1000);
  }, [date]);
  return (
    <>
      <div>
        <h1 className="my-40">
          <strong>{date}</strong>
        </h1>
      </div>
    </>
  );
};
