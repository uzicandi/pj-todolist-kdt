import React from 'react';
import { IconProps } from './iconProps.type';

const CheckedIcon: React.FC<IconProps> = ({ width = 32, height = 32, fill = '#7C3AED' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="16"
        fill="#7C3AED"
      />
      <path
        d="M8 16.2857L13.8182 22L24 12"
        stroke="#FEFCE8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { CheckedIcon };