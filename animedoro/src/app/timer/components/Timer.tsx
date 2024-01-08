"use client";
import { useState } from "react";
import Countdown from "./Countdown";
import timeConverter from "../scripts/timeConverter";
import "../styles/main.scss";
const Timer = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [remainingTime, setRemainingTime] = useState(3600);

  const handleSwitch = () => {
    isWorking ? setIsWorking(false) : setIsWorking(true);
  };
  return (
    <div className="container mx-auto px-4 timer">
      <p>IsWorking:{`${isWorking}`}</p>
      <p className="text-9xl">{timeConverter(remainingTime)}</p>
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
    </div>
  );
};

export default Timer;
