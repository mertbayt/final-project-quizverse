import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div className={styles.LandingContainer}>
      <div className={styles.LandingHeader}>
        <h1>Welcome to QuizVerse!</h1>
        <p className={styles.LandingStaticSentence}>
          A spaced repetition learning platform for{' '}
          <span className={styles.LandingTypewriter}>
            <Typewriter
              options={{
                strings: [
                  'students',
                  'teachers',
                  'learners',
                  'educators',
                  'everyone',
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: styles.LandingTypewriterWord,
              }}
            />
          </span>
        </p>
      </div>
      <div className={styles.LandingBody}>
        <button className={styles.LogInButton}>Log In</button>
        <button className={styles.SignUpButton}>Sign Up</button>
      </div>
    </div>
  );
}

export default Landing;
