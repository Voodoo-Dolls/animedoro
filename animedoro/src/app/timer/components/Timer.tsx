"use client";
import { useState } from "react";
import Countdown from "./Countdown";
import timeConverter from "../scripts/timeConverter";
const Timer = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [remainingTime, setRemainingTime] = useState(3600);

  const handleSwitch = () => {
    isWorking ? setIsWorking(false) : setIsWorking(true);
  };
  return (
    <>
      <p>IsWorking:{`${isWorking}`}</p>
      <p>Timer: {timeConverter(remainingTime)}</p>
      {remainingTime < 1 ? (
        <button onClick={handleSwitch}>{`${
          isWorking ? "Next Session" : "Start Break"
        }`}</button>
      ) : null}
      <Countdown
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        isWorking={isWorking}
        setIsWorking={setIsWorking}
      />
    </>
  );
};

export default Timer;
