import React from 'react';
import styles from './CircleButton.module.css';

interface CircleButtonProps {
  icon: React.ReactNode;
  color: string;
  onClick?: () => void;
}

const CircleButton = ({ icon, color }: CircleButtonProps) => {
  return (
    <button className={styles.circleButton} style={{ backgroundColor: color }}>
      {icon}
    </button>
  );
};

export default CircleButton;
