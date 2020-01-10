import React from 'react';
import styles from './App.module.scss';
import Logo from './Logo';
import SignIn from '../pages/SignIn';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <header>
        <nav className={styles.wrapper}>
          <Logo></Logo>
        </nav>
      </header>
      <main className={styles.wrapper}>
        <SignIn></SignIn>
      </main>
    </div>
  );
};

export default App;
