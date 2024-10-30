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

  const [{ data }] = useAtom(todoAtomInstance);
  if (!data) return null;

  const handleUpdateClick = async (e) => {
    e.preventDefault();
    await updateMutate({ ...data, name: inputs.name, imageUrl: inputs.imageUrl, memo: inputs.memo });
    await router.push('/');
  }

  const handleUpdateTodoClick = () => {
    updateMutate({ ...data, isCompleted: !data.isCompleted });
  };

  const handleDeleteClick = () => {
    deleteMutate({ id: itemId });
    router.push('/');
  }

  return (
    <form className={styles.mainDetail} onSubmit={handleUpdateClick}>
      <CheckList {...data} onClick={handleUpdateTodoClick} changable />
      <div className={styles.mainNav}>
        <ImageForm imageUrl={data.imageUrl} />
        <MemoForm data={data} />
      </div>
      <div className={styles.buttonNav}>
        <IconTextButton type="submit" icon={<CheckIcon />} text="수정완료" color={colors.slate200} textColor={colors.slate900} />
        <IconTextButton type="button" icon={<XIcon />} text="삭제하기" color={colors.rose500} textColor="#fff" onClick={handleDeleteClick} />
      </div>
    </form>
  )
}

export default MainDetail;