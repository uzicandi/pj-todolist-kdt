import CheckList from '@/component/shared/check-list/CheckList';
import { todoAtom } from '@/store/todos';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import styles from './MainDetail.module.css';
import ImageForm from '@/component/feature/ImageForm/ImageForm';
import MemoForm from '@/component/feature/MemoForm/MemoForm';
import IconTextButton from '@/component/common/IconTextButton/IconTextButton';
import colors from '@/styles/theme/colors';
import CheckIcon from '@/assets/icons/check';
import { XIcon } from '@/assets/icons/x';

interface Props {
  itemId: string
}

const MainDetail = ({ itemId }: Props) => {
  const todoAtomInstance = useMemo(() => todoAtom(itemId), [itemId]);
  const [{ data }] = useAtom(todoAtomInstance);
  if (!data) return null;

  return (
    <div className={styles.mainDetail}>
      <CheckList {...data} />
      <div className={styles.mainNav}>
        <ImageForm />
        <MemoForm />
      </div>
      <div className={styles.buttonNav}>
        <IconTextButton icon={<CheckIcon />} text="수정완료" color={colors.slate200} />
        <IconTextButton icon={<XIcon />} text="삭제하기" color={colors.rose500} />
      </div>
    </div>
  )
}

export default MainDetail;