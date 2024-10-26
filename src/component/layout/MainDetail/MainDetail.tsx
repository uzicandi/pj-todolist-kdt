import CheckList from '@/component/shared/check-list/CheckList';
import { todoAtom } from '@/store/todos';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import styles from './MainDetail.module.css';
import ImageForm from '@/component/feature/ImageForm/ImageForm';

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
      <ImageForm />
    </div>
  )
}

export default MainDetail;