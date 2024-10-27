import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Memo from '../../../assets/images/memo.png';
import styles from './MemoForm.module.css';
import { inputsAtom } from '@/store/atoms';
import { useAtom } from 'jotai';
import { DetailItem } from '@/apis/todos.type';

interface Props {
  data: DetailItem;
}

const MemoForm = ({ data }: Props) => {
  const [inputs, setInputs] = useAtom(inputsAtom);

  useEffect(() => {
    if (data.memo) {
      setInputs({ ...inputs, name: data.name, imageUrl: data.imageUrl, memo: data.memo });
    }
  }, [data.memo]);

  return (
    <div className={styles.memoForm}>
      <Image className={styles.memo} src={Memo} alt="memo" />
      <textarea
        value={inputs.memo}
        className={styles.memoInput}
        placeholder="메모를 입력해주세요"
        onChange={(e) => setInputs({ ...inputs, memo: e.target.value })}
      />
    </div>
  );
}

export default MemoForm;