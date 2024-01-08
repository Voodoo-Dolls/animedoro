interface Props {
  workTime: number;
  setWorkTime: Function;
  breakTime: number;
  setBreakTime: Function;
}

import { useRef, useState, useEffect } from "react";
import "../styles/settings.scss";
import { FaGear } from "react-icons/fa6";

const Settings = ({
  workTime,
  setWorkTime,
  breakTime,
  setBreakTime,
}: Props) => {
  const handleWorkTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWorkTime(parseInt(e.target.value));
  };
  const handleBreakTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreakTime(parseInt(e.target.value));
  };

  // Settings Menu
  const [toggleSettings, setToggleSettings] = useState(false);
  const handleSettings = () => {
    toggleSettings ? setToggleSettings(false) : setToggleSettings(true);
  };

  const settings: any = useRef();
  useEffect(() => {
    const handler = (event: any) => {
      if (toggleSettings && !settings.current.contains(event.target)) {
        setToggleSettings(false);
      }
    };
    document.addEventListener("mousedown", handler);
  }, [toggleSettings]);
  return (
    <>
      <button onClick={handleSettings}>
        <FaGear />
      </button>
      <div className={`${toggleSettings ? "overlay" : ""}`}></div>
      <div
        ref={settings}
        className={`${toggleSettings ? "settings-container" : ""}`}
      >
        <div className="input-container flex gap-2">
          <label htmlFor="workTime">Work Duration</label>
          <input
            type="number"
            id="workTime"
            name="workTime"
            defaultValue={workTime}
            onChange={(e) => handleWorkTime(e)}
          />
        </div>
        <div className="input-container flex gap-2">
          <label htmlFor="breakTime">Break Duration</label>
          <input
            type="number"
            id="breakTime"
            name="breakTime"
            defaultValue={breakTime}
            onChange={(e) => handleBreakTime(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Settings;
