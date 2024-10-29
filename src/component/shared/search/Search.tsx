import React from 'react';
import styles from './Search.module.css';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// box-shadow를 이용해보세요.
// props의 확장성이 부족하다. => 이건 toos 과제 또는 29과제를 봐보면 나온다. => componentPropsWithoutRef<input>
const Search = ({ placeholder = '할 일을 입력해주세요', value, onChange }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      <div className={styles.shadow} />
    </div>
  );
};

export default Search;