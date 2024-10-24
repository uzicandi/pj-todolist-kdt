import React from 'react';
import { IconProps } from './iconProps.type';

const PlusWhiteIcon: React.FC<IconProps> = ({ width = 16, height = 16, fill = 'none' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8L14 8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 14L8 2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { PlusWhiteIcon };