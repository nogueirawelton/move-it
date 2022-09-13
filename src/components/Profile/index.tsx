import { useChallenges } from "../../hooks/ChallengesHook";
import styles from "./styles.module.scss";

interface ProfileProps {
  
}

export const Profile = ({  }: ProfileProps) => {
  const { level } = useChallenges();
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/nogueirawelton.png" alt="Welton Nogueira" />
      <div>
        <strong>Welton Nogueira</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}