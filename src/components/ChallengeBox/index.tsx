import { useChallenges } from "../../hooks/ChallengesHook";
import { useCountdown } from "../../hooks/CountdownHook";
import styles from "./styles.module.scss";

interface ChallengeBoxProps {
  
}

export const ChallengeBox = ({  }: ChallengeBoxProps) => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges();
  const { resetCountdown } = useCountdown();

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }
  return (
    <div className={styles.challengeBoxContainer}>
      {
        activeChallenge ? (
          <div className={styles.challengeBoxActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img src={`icons/${activeChallenge.type}.svg`} alt="Desafio" />
              <strong>Novo Desafio</strong>
              <p>{activeChallenge.description}</p>
            </main>
            <footer>
              <button onClick={handleChallengeFailed} type="button" className={styles.challengeFailedButton}>Falhei</button>
              <button onClick={handleChallengeSucceeded} type="button" className={styles.challengeSucceededButton}>Completei</button>
            </footer>
          </div>
        ) : (
          <div className={styles.challengeBoxNotActive}>
          <strong>Inicie um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando os desafios!
          </p>
        </div>
        )
      }
    </div>
  )
}