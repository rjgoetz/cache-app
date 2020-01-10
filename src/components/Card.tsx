import React, { FunctionComponent } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  transparent?: boolean;
}

const Card: FunctionComponent<CardProps> = ({ transparent, children }) => {
  const classes = transparent
    ? `${styles.card} ${styles.cardTransparent}`
    : `${styles.card}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
