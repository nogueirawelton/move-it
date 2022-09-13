import { useChallenges } from "../../hooks/ChallengesHook";
import styles from "./styles.module.scss";

interface LevelupModalProps {
  
}

export const LevelupModal = ({  }: LevelupModalProps) => {

  const { level, closeLevelModal } = useChallenges();
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelModal}>
          <img src="icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  )
}