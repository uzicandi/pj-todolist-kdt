import { PlusGrayIcon } from '@/assets/icons/plus_gray'
import IconTextButton from '@/component/common/IconTextButton/IconTextButton'
import Search from '@/component/shared/search/Search'
import colors from '@/styles/theme/colors'
import styles from './SearchForm.module.css'
import { useMediaQuery } from 'react-responsive'
import { useAtom } from 'jotai';
import { postTodosAtom, todosAtom } from '@/store/todos'
import { useState } from 'react'
import { PlusWhiteIcon } from '@/assets/icons/plus_white'


const SearchForm = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 360px)' }) // 공통화 할 수 있는 부분이지 useCheckSmallScreen
  const [{ data: todosData, isPending }] = useAtom(todosAtom);

  const [{ mutate }] = useAtom(postTodosAtom);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ name: inputValue });
    setInputValue('');
  }

  if (isPending) return null;

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Search value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {todosData.length > 0 ? <IconTextButton type="submit" icon={<PlusGrayIcon width={16} height={16} />} color={colors.slate200} textColor={colors.slate900} text={isSmallScreen ? '' : '추가하기'} />
        : <IconTextButton type="submit" icon={<PlusWhiteIcon width={16} height={16} />} color={colors.violet600} textColor="#fff" text={isSmallScreen ? '' : '추가하기'} />}
    </form>
  )
}

export default SearchForm