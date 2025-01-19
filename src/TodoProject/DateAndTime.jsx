import { useEffect, useState } from "react";

export const DateAndTime = () => {
  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    // Set an interval to update the date and time every second
    const interval = setInterval(() => {
      const date = new Date();
      const onlyDate = date.toLocaleDateString();
      const onlyTime = date.toLocaleTimeString();
      setDateAndTime(`${onlyDate} - ${onlyTime}`);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  return <h2>{dateAndTime}</h2>;
};
