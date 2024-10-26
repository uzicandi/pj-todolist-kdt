import React from 'react';
import styles from './IconTextButton.module.css';

interface IconTextButtonProps {
  icon?: React.ReactNode;
  text: string;
  color: string;
  type?: 'button' | 'submit' | 'reset';
}

// box-shadow를 이용해보세요.
const IconTextButton = ({ icon, text, color, ...props }: IconTextButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.buttonShadow}`} />
      <button {...props} className={`${styles.button} ${text ? styles.textButton : styles.iconButton}`} style={{ backgroundColor: color }}>
        {icon}
        {text && <span className={styles.text}>{text}</span>}
      </button>
    </div>
  );
};

export default IconTextButton;
