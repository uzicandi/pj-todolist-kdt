import React from 'react';
import styles from './Search.module.css';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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