interface Props {
  workTime: number;
  breakTime: number;
  isWorking: Boolean;
  setPaused: Function;
  remainingTime: number;
  setRemainingTime: Function;
}
const Buttons = ({
  workTime,
  breakTime,
  isWorking,
  setPaused,
  remainingTime,
  setRemainingTime,
}: Props) => {
  const handlePause = () => {
    setPaused(true);
  };
  const handleResume = () => {
    setPaused(false);
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
      <button onClick={handleResume}>Resume</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleSkip}>Skip</button>
      <button onClick={handleReset}>Reset</button>
      <input type="text" />
    </>
  );
};
export default Buttons;
