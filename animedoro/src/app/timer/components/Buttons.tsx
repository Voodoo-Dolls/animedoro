interface Props {
  workTime: number;
  setWorkTime: Function;
  breakTime: number;
  setBreakTime: Function;
  isWorking: Boolean;
  paused: Boolean;
  setPaused: Function;
  remainingTime: number;
  setRemainingTime: Function;
}

import Settings from "./Settings";
import { PiPlayPauseLight } from "react-icons/pi";
import { LuSkipForward } from "react-icons/lu";
import { GrPowerReset } from "react-icons/gr";

const Buttons = ({
  workTime,
  setWorkTime,
  breakTime,
  setBreakTime,
  isWorking,
  paused,
  setPaused,
  remainingTime,
  setRemainingTime,
}: Props) => {
  const handleResume = () => {
    paused ? setPaused(false) : setPaused(true);
  };
  const handleReset = () => {
    setRemainingTime((isWorking ? workTime : breakTime) * 60);
    setPaused(true);
  };
  const handleSkip = () => {
    remainingTime > 0 ? setRemainingTime(1) : null;
    setPaused(false);
  };
  return (
    <>
      <button onClick={handleResume}>
        <PiPlayPauseLight />
      </button>
      <button onClick={handleSkip}>
        <LuSkipForward />
      </button>
      <button onClick={handleReset}>
        <GrPowerReset />
      </button>
      <Settings
        workTime={workTime}
        setWorkTime={setWorkTime}
        breakTime={breakTime}
        setBreakTime={setBreakTime}
      />
    </>
  );
};
export default Buttons;
