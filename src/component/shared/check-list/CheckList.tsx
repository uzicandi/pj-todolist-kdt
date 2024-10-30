import React, { useEffect } from 'react';
import styles from './CheckList.module.css';
import { CheckBoxIcon } from '@/assets/icons/checkbox';
import { CheckedIcon } from '@/assets/icons/checked';
import { Item } from '@/apis/todos.type';
import { inputsAtom } from '@/store/atoms';
import { useAtom } from 'jotai';

interface Props extends Item {
  name: string;
  isCompleted: boolean;
  onClick?: () => void;
  changable?: boolean;
}

const CheckList = ({ name, isCompleted, onClick, changable = false }: Props) => {
  const [inputs, setInputs] = useAtom(inputsAtom);

  useEffect(() => {
    setInputs({ ...inputs, name });
  }, [name]);

  return (
    <div className={`${styles.container} ${isCompleted ? styles.checkedContainer : ''}`}>
      <div className={`${styles.checkboxContainer}`}>
        <button onClick={(e) => {
          e.preventDefault();
          onClick?.();
        }}>{isCompleted ? <CheckedIcon /> : <CheckBoxIcon />}</button>
        {changable ? (
          <input
            type="text"
            value={inputs.name}
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
            className={`${styles.inputLabel} ${isCompleted ? styles.checkedLabel : ''}`}
          />
        ) :
          (<div className={`${styles.label} ${isCompleted ? styles.checkedLabel : ''}`}>{name}</div>)}
      </div>
    </div>
  );
};

export default CheckList;
