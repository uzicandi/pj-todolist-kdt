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
  const isSmallScreen = useMediaQuery({ query: '(max-width: 360px)' })
  const [{ data: todosData, isPending }] = useAtom(todosAtom);

  const [{ mutate }] = useAtom(postTodosAtom);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ name: inputValue });
    setInputValue('');
  }

  const isTodosEmpty = todosData?.length === 0;
  const buttonProperties = {
    color: !isTodosEmpty ? colors.slate200 : colors.violet600,
    textColor: !isTodosEmpty ? colors.slate900 : '#fff',
    icon: !isTodosEmpty ? <PlusGrayIcon width={16} height={16} /> : <PlusWhiteIcon width={16} height={16} />
  }

  if (isPending) return null;

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <Search value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <IconTextButton type="submit" icon={buttonProperties.icon} color={buttonProperties.color} textColor={buttonProperties.textColor} text={isSmallScreen ? '' : '추가하기'} />
    </form>
  )
}

export default SearchForm