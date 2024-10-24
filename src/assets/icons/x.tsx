import React from 'react';
import { IconProps } from './iconProps.type';

const XIcon: React.FC<IconProps> = ({ width = 16, height = 16, fill = 'none' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4L12 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 4L4 12"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { XIcon }