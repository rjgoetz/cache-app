import React, { FunctionComponent } from 'react';
import styles from './InputControl.module.scss';

const InputControl: FunctionComponent<{}> = ({ children }) => {
  return <div className={styles.inputControl}>{children}</div>;
};

export default InputControl;
