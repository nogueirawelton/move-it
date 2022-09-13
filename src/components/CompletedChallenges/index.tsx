import { useChallenges } from "../../hooks/ChallengesHook";
import styles from "./styles.module.scss";

interface CompletedChallengesProps {
  
}

export const CompletedChallenges = ({  }: CompletedChallengesProps) => {

  const { challengesCompleted } = useChallenges();
  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}