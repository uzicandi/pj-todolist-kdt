import React from 'react';
import { IconProps } from './iconProps.type';

const CheckBoxIcon: React.FC<IconProps> = ({ width = 32, height = 32, fill = '#FEFCE8' }) => {
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
        r="15"
        fill="#FEFCE8"
        stroke="#0F172A"
        strokeWidth="2"
      />
    </svg>
  );
};

export { CheckBoxIcon };