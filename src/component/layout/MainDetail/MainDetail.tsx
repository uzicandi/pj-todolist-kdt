import CheckList from '@/component/shared/check-list/CheckList';
import { deleteTodosAtom, patchTodosAtom, todoAtom } from '@/store/todos';
import { useAtom } from 'jotai';
import { useMemo } from 'react';
import styles from './MainDetail.module.css';
import ImageForm from '@/component/feature/ImageForm/ImageForm';
import MemoForm from '@/component/feature/MemoForm/MemoForm';
import IconTextButton from '@/component/common/IconTextButton/IconTextButton';
import colors from '@/styles/theme/colors';
import CheckIcon from '@/assets/icons/check';
import { XIcon } from '@/assets/icons/x';
import { useRouter } from 'next/router';
import { inputsAtom } from '@/store/atoms';

interface Props {
  itemId: number
}

const MainDetail = ({ itemId }: Props) => {
  const router = useRouter();
  const todoAtomInstance = useMemo(() => todoAtom(itemId), [itemId]);
  const [{ mutate: deleteMutate }] = useAtom(deleteTodosAtom);
  const [{ mutate: updateMutate }] = useAtom(patchTodosAtom);
  const [inputs] = useAtom(inputsAtom);
  console.log({ inputs });

  const [{ data }] = useAtom(todoAtomInstance);
  if (!data) return null;

  const handleUpdateClick = () => {
    updateMutate({ ...data, imageUrl: inputs.imageUrl, memo: inputs.memo }); // data, memo 추가 
    alert('수정되었습니다.');
  }

  const handleDeleteClick = () => {
    deleteMutate({ id: itemId });
    router.push('/');
  }

  return (
    <div className={styles.mainDetail}>
      <CheckList {...data} />
      <div className={styles.mainNav}>
        <ImageForm imageUrl={data.imageUrl} />
        <MemoForm data={data} />
      </div>
      <div className={styles.buttonNav}>
        <IconTextButton icon={<CheckIcon />} text="수정완료" color={colors.slate200} onClick={handleUpdateClick} />
        <IconTextButton icon={<XIcon />} text="삭제하기" color={colors.rose500} onClick={handleDeleteClick} />
      </div>
    </div>
  )
}

export default MainDetail;