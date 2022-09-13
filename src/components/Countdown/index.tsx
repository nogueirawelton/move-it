import { useCountdown } from "../../hooks/CountdownHook";
import styles from "./styles.module.scss";

interface CountdownProps {
  
}

export const Countdown = ({  }: CountdownProps) => {
  const { minutes, seconds, hasFinished, isActive, resetCountdown, startCountdown } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {
        hasFinished ? (
          <button
            disabled
            className={styles.countdownButton}
          >
            Ciclo encerrado
            <img src="icons/ok.svg" alt="Finalizado" />
          </button>
        ) : (
          isActive ? (
            <button
              type="button"
              onClick={resetCountdown}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            >
              Abandonar ciclo
            </button>
          ) : 
          (
            <button
              type="button"
              onClick={startCountdown}
              className={styles.countdownButton}
            >
              Iniciar um ciclo
              <img src="icons/play.svg" alt="Iniciar" />
            </button>
          )
        )
      }
    </div>
  )
}
