import React from 'react';
import styles from './CircleButton.module.css';
import colors from '@/styles/theme/colors';

interface CircleButtonProps {
  icon: React.ReactNode;
  color: keyof typeof colors;
  onClick?: () => void;
}

const CircleButton = ({ icon, color, onClick }: CircleButtonProps) => {
  return (
    <button type="button" className={styles.circleButton} style={{ backgroundColor: colors[color] }} onClick={onClick}>
      {icon}
    </button>
  );
};

export default CircleButton;
