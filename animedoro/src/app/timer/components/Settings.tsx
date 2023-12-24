interface Props {
  workTime: number;
  setWorkTime: Function;
  breakTime: number;
  setBreakTime: Function;
}

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
  return (
    <>
      <div className="input-container">
        <label htmlFor="workTime">Work Duration {`${workTime}`}</label>
        <input
          type="number"
          id="workTime"
          name="workTime"
          defaultValue={workTime}
          onChange={(e) => handleWorkTime(e)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="breakTime">Break Duration{`${breakTime}`}</label>
        <input
          type="number"
          id="breakTime"
          name="breakTime"
          defaultValue={breakTime}
          onChange={(e) => handleBreakTime(e)}
        />
      </div>
    </>
  );
};

export default Settings;
