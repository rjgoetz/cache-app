import React from 'react';
import treasure from '../images/treasure.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return <img className={styles.logo} src={treasure} alt="treasure" />;
}
