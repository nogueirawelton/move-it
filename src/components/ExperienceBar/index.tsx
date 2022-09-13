import { useChallenges } from "../../hooks/ChallengesHook";
import styles from "./styles.module.scss";

interface ExperienceBarProps {
  
}

export const ExperienceBar = ({  }: ExperienceBarProps) => {

  const { currentExperience, experienceToNextLevel } = useChallenges();

  const percentToNextLevel = Math.round(currentExperience) * 100 / experienceToNextLevel;
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{
          width: `${percentToNextLevel}%`,
        }}/>
        {
          currentExperience > 0 && (
            <span style={{
              left: `${percentToNextLevel}%`
            }}>{currentExperience} xp</span>
          )
        }
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  )
}