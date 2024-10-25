import React from 'react';
import styles from './Search.module.css';

// box-shadow를 이용해보세요.
// props의 확장성이 부족하다. => 이건 toos 과제 또는 29과제를 봐보면 나온다. => componentPropsWithoutRef<input>
const Search = ({ placeholder = '할 일을 입력해주세요' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shadow}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={placeholder}
          // min={0}
          // max={0}
          // disabled
          // aria-hidden
          />
        </div>
      </div>
    </div>
  );
};

export default Search;