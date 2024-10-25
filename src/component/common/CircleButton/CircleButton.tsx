import React from 'react';
import styles from './CircleButton.module.css';
import colors from '@/styles/theme/colors';

interface CircleButtonProps {
  icon: React.ReactNode;
  color: keyof typeof colors; // color palette로 변경
  onClick?: () => void;
}

// font-color는 어떻게 처리할 수 있을까요? porps로 받던지, 컬러에따른 맵핑을하던지
const CircleButton = ({ icon, color }: CircleButtonProps) => {
  return (
    <button className={styles.circleButton} style={{ backgroundColor: color }}>
      {icon}
    </button>
  );
};

export default CircleButton;
