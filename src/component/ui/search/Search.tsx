import React from 'react';
import styles from './Search.module.css';

const Search = ({ placeholder = '할 일을 입력해주세요' }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.shadow}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;