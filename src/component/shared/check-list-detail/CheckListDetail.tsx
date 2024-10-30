import { CheckBoxIcon } from '@/assets/icons/checkbox';
import { CheckedIcon } from '@/assets/icons/checked';
import React, { useEffect } from 'react';
import styles from './CheckListDetail.module.css';
import { useAtom } from 'jotai';
import { inputsAtom } from '@/store/atoms';
import { DetailItem } from '@/apis/todos.type';

interface CheckListDetailProps {
  data: DetailItem;
  onClick?: (updatedInputs: Omit<DetailItem, 'id'>) => void;
}

const CheckListDetail = ({ data, onClick }: CheckListDetailProps) => {
  const { name, isCompleted } = data;
  const [inputs, setInputs] = useAtom(inputsAtom);

  useEffect(() => {
    setInputs({ ...inputs, name, isCompleted });
  }, [name, isCompleted]);

  const handleToggle = async () => {
    const updatedInputs = { ...inputs, isCompleted: !inputs.isCompleted };
    await setInputs(updatedInputs);
    await onClick?.(updatedInputs);
  };

  return (
    <div className={`${styles.container} ${isCompleted ? styles.checkedContainer : ''}`}>
      <div className={`${styles.checkboxContainer}`}>
        <button type="button"
          onClick={handleToggle}
        >
          {isCompleted ? <CheckedIcon /> : <CheckBoxIcon />}
        </button>
        <input
          type="text"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          className={`${styles.inputLabel} ${isCompleted ? styles.checkedLabel : ''}`}
        />
      </div>
    </div>
  )
}

export default CheckListDetail;