import Image from 'next/image';
import React from 'react';
import Memo from '../../../assets/images/memo.png';
import styles from './MemoForm.module.css';

const MemoForm = () => {
  return (
    <div className={styles.memoForm}>
      <Image className={styles.memo} src={Memo} alt="memo" />
      <input className={styles.memoInput} type="text" placeholder="메모를 입력해주세요" />
    </div>
  );
}

export default MemoForm;