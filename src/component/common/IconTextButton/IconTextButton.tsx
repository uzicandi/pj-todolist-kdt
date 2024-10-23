import React from 'react';
import styles from './IconTextButton.module.css';

interface IconTextButtonProps {
  icon: React.ReactNode;
  text?: string;
  color: string;
}

const IconTextButton = ({ icon, text, color }: IconTextButtonProps) => {
  return (
    <button className={`${styles.button} ${text ? styles.textButton : styles.iconButton}`} style={{ backgroundColor: color }}>
      {icon}
      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default IconTextButton;