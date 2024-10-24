import { CheckBoxIcon } from '@/assets/icons/checkbox';
import { CheckedIcon } from '@/assets/icons/checked';
import React from 'react';
import styles from './CheckListDetail.module.css';

interface CheckListDetailProps {
  label: string;
  checked: boolean;
}

const CheckListDetail = ({ label, checked }: CheckListDetailProps) => {
  return (
    <div className={`${styles.container} ${checked ? styles.checkedContainer : ''}`}>
      <div className={styles.listContainer}>
        {checked ? <CheckedIcon /> : <CheckBoxIcon />}
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  )
}

export default CheckListDetail;