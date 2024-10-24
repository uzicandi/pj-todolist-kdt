import React from 'react';
import { IconProps } from './iconProps.type';

const PlusGrayIcon: React.FC<IconProps> = ({ width = 24, height = 24, fill = 'none' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12L21 12"
        stroke="#64748B"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M12 21L12 3"
        stroke="#64748B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { PlusGrayIcon }