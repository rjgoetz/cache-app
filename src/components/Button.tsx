import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';

const Button: FunctionComponent<{}> = ({ children }) => {
  return (
    <button className={styles.button} type="submit">
      {children}
    </button>
  );
};

export default Button;
