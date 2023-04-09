import React, { useEffect, useState } from "react";

const Clock = () => {
  const formatDate = (date) => {
    if (!date) return;

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
  };

  const [time, setTime] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();

      const timeString = formatDate(now);

      setTime(timeString);
      console.log("clock");
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);
  return <div>Clock: {time}</div>;
};

export default Clock;
