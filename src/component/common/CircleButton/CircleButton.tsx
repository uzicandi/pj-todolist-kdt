import React from 'react';
import styles from './CircleButton.module.css';
import colors from '@/styles/theme/colors';

interface CircleButtonProps {
  icon: React.ReactNode;
  color: keyof typeof colors;
  onClick?: () => void;
}

// font-color는 어떻게 처리할 수 있을까요? porps로 받던지, 컬러에따른 맵핑을하던지
const CircleButton = ({ icon, color, onClick }: CircleButtonProps) => {
  return (
    <button type="button" className={styles.circleButton} style={{ backgroundColor: colors[color] }} onClick={onClick}>
      {icon}
    </button>
  );
};

export default CircleButton;
