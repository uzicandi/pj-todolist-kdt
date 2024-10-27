import { PlusGrayIcon } from '@/assets/icons/plus_gray'
import IconTextButton from '@/component/common/IconTextButton/IconTextButton'
import Search from '@/component/shared/search/Search'
import colors from '@/styles/theme/colors'
import styles from './SearchForm.module.css'
import { useMediaQuery } from 'react-responsive'
import { useAtom } from 'jotai';
import { postTodosAtom } from '@/store/todos'
import { useState } from 'react'


const SearchForm = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 360px)' }) // 공통화 할 수 있는 부분이지 useCheckSmallScreen
  const [{ mutate }] = useAtom(postTodosAtom);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ name: inputValue });
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Search value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <IconTextButton type="submit" icon={<PlusGrayIcon />} color={colors.slate200} text={isSmallScreen ? '' : '추가하기'} />
    </form>
  )
}

export default SearchForm