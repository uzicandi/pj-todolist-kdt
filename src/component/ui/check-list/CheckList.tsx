import React from 'react';
import styles from './CheckList.module.css';


const CheckList = ({ label }) => {
  return (
    <div className={styles.container}>
      <div className={styles.checkboxContainer}>
        <div className={styles.checkbox}></div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

export default CheckList;
