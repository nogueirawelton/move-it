import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../hooks/ChallengesHook";
import { CountdownProvider } from "../hooks/CountdownHook";
import styles from "./styles.module.scss";

interface userData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface HomeProps {
  user: userData;
}

export default function Home({ user }: HomeProps) {
  return (
    <ChallengesProvider
      level={user.level}
      currentExperience={user.currentExperience}
      challengesCompleted={user.challengesCompleted}
    >
      <Head>
        <title>Início | Move.it</title>
      </Head>
      <div className={styles.homeContainer}>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div className={styles.leftContainer}>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <ChallengeBox />
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
  return {
    props: {
      user: {
        level: Number(level) || 1,
        currentExperience: Number(currentExperience) || 0,
        challengesCompleted: Number(challengesCompleted) || 0,
      }
    }
  }
}