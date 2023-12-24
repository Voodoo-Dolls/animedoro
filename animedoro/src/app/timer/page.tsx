import Countdown from "./components/Countdown";
import Timer from "./components/Timer";
import styles from "../page.module.css";

export default function TimerPage() {
  return (
    <main className={styles.main}>
      <Timer />
    </main>
  );
}
