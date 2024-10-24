import React from 'react';
import styles from './CircleButton.module.css';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';

interface CircleButtonProps {
  icon: React.ReactNode;
  color: string;
}

const CircleButton = ({ icon, color }: CircleButtonProps) => {
  return (
    <button className={styles.circleButton} style={{ backgroundColor: color }}>
      <PlusGrayIcon />
    </button>
  );
};

export default CircleButton;
