import React from 'react';
import styles from './Search.module.css';

const Search = ({ placeholder }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder || '할 일을 입력해주세요'}
      />
    </div>
  );
};

export default Search;