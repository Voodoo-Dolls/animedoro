import Countdown from './components/timer/Countdown'
import styles from './page.module.css'



export default function Home() {
  return (
    <main className={styles.main}>
      <Countdown />
    </main>
  )
}
