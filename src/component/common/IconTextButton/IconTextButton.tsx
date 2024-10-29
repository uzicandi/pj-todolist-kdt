import React from 'react';
import styles from './IconTextButton.module.css';

interface IconTextButtonProps {
  icon?: React.ReactNode;
  text: string;
  color: string;
  textColor: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const IconTextButton = ({ icon, text, color, textColor, ...props }: IconTextButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.buttonShadow}`} />
      <button
        {...props}
        className={`${styles.button} ${text ? styles.textButton : styles.iconButton}`}
        style={{ backgroundColor: color }}
      >
        {icon}
        {text && <span className={styles.text} style={{ color: textColor }}>{text}</span>}
      </button>
    </div>
  );
};

export default IconTextButton;
