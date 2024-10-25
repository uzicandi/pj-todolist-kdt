import { PlusGrayIcon } from '@/assets/icons/plus_gray'
import IconTextButton from '@/component/common/IconTextButton/IconTextButton'
import Search from '@/component/shared/search/Search'
import colors from '@/styles/theme/colors'
import styles from './SearchForm.module.css'
import { useMediaQuery } from 'react-responsive'

const SearchForm = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 360px)' }) // 공통화 할 수 있는 부분이지 useCheckSmallScreen

  return (
    <div className={styles.wrapper}>
      {/* 제출이야 그럼 div -> form */}
      <Search />
      {/* input */}
      <IconTextButton icon={<PlusGrayIcon />} color={colors.slate200} text={isSmallScreen ? '' : '추가하기'} />
      {/* type=submit */}
    </div>
  )
}

export default SearchForm