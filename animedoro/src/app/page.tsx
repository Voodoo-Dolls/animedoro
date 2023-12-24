import Countdown from "./timer/components/Countdown";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Countdown />
    </main>
  );
}
