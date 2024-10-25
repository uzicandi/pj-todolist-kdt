import { PlusGrayIcon } from '@/assets/icons/plus_gray'
import IconTextButton from '@/component/common/IconTextButton/IconTextButton'
import Search from '@/component/shared/search/Search'
import colors from '@/styles/theme/colors'
import styles from './SearchForm.module.css'
import { useMediaQuery } from 'react-responsive'

const SearchForm = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 360px)' })
  return (
    <div className={styles.wrapper}><Search /><IconTextButton icon={<PlusGrayIcon />} color={colors.slate200} text={isSmallScreen ? '' : '추가하기'} /></div>
  )
}

export default SearchForm