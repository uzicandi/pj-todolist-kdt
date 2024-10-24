import React from 'react';
import styles from './CheckList.module.css';
import { CheckBoxIcon } from '@/assets/icons/checkbox';
import { CheckedIcon } from '@/assets/icons/checked';

interface CheckListProps {
  label?: string;
  checked: boolean;
}

const CheckList = ({ label = "비타민 챙겨먹기", checked = false }: CheckListProps) => {
  return (
    <div className={`${styles.container} ${checked ? styles.checkedContainer : ''}`}>
      <div className={`${styles.checkboxContainer}`}>
        {checked ? <CheckedIcon /> : <CheckBoxIcon />}
        <div className={`${styles.label} ${checked ? styles.checkedLabel : ''}`}>{label}</div>
      </div>
    </div>
  );
};

export default CheckList;
