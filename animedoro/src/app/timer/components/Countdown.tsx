"use client";
import { useCallback, useEffect, useState } from "react";
import Settings from "./Settings";
import Buttons from "./Buttons";

interface Props {
  remainingTime: number;
  setRemainingTime: Function;
  isWorking: boolean;
  setIsWorking: Function;
}

const Countdown = ({
  remainingTime,
  setRemainingTime,
  isWorking,
  setIsWorking,
}: Props) => {
  // Default Time States
  const [workTime, setWorkTime] = useState(60);
  const [breakTime, setBreakTime] = useState(20);
  const [paused, setPaused] = useState(true);

  // Set Alarm File
  let alarm: any;
  if (typeof Audio != "undefined") {
    alarm = new Audio("./resources/sounds/alarm.mp3");
  }
  // Request Notifications
  useEffect(() => {
    Notification.requestPermission().then((perm) => {});
  });

  // On Remaining Time = 0, Play Alarm & Notification
  useEffect(() => {
    if (!paused && remainingTime >= 1) {
      const countdown = setInterval(() => {
        setRemainingTime(remainingTime - 1);
        if (remainingTime === 1) {
          new Notification("Time is Up!", {
            body: isWorking ? "Break Time!" : "Time for Work!",
          });
          alarm.play();
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  });
  useEffect(() => {
    setRemainingTime((isWorking ? workTime : breakTime) * 60);
  }, [isWorking]);

  // Handle User Actions

  return (
    <div>
      <Buttons
        workTime={workTime}
        breakTime={breakTime}
        setPaused={setPaused}
        remainingTime={remainingTime}
        setRemainingTime={setRemainingTime}
        isWorking={isWorking}
      />

      <Settings
        workTime={workTime}
        setWorkTime={setWorkTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
      />
    </div>
  );
};

export default Countdown;
