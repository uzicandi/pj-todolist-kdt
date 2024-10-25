import React from 'react';
import styles from './CheckList.module.css';
import { CheckBoxIcon } from '@/assets/icons/checkbox';
import { CheckedIcon } from '@/assets/icons/checked';
import { Item } from '@/apis/todos.type';

// 문제없어
// 근데 input-checkbox를 사용한다면, 어떨까
// 또는 Icon 버튼 처럼 <CheckedIcon />을 사용한다면 어떻까
const CheckList = ({ name = "비타민 챙겨먹기", isCompleted = false }: Item) => {
  return (
    <div className={`${styles.container} ${isCompleted ? styles.checkedContainer : ''}`}>
      <div className={`${styles.checkboxContainer}`}>
        <button onClick={(e) => {
          e.preventDefault();
        }}>{isCompleted ? <CheckedIcon /> : <CheckBoxIcon />}</button>
        <div className={`${styles.label} ${isCompleted ? styles.checkedLabel : ''}`}>{name}</div>
      </div>
    </div>
  );
};

export default CheckList;
