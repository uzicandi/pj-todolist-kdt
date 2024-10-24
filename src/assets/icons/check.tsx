import React from 'react';
import { IconProps } from './iconProps.type';

const CheckIcon: React.FC<IconProps> = ({ width = 16, height = 16, fill = 'none' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 7L6.5 11.5L14 4"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
