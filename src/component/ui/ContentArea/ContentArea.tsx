import React from 'react';
import styles from './ContentArea.module.css';

const ContentArea = ({ children }) => {
  return (
    <div className={styles.contentArea}>
      {children}
    </div>
  )
}

export default ContentArea;