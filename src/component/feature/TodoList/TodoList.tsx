import Image from 'next/image';
import TodoImage from '../../../assets/images/todo.png'; // png -> webp로 변경하는 방향은 어떨지
import CheckList from '@/component/shared/check-list/CheckList';
import styles from './TodoList.module.css';
import Link from 'next/link';
import { Item } from '@/apis/todos.type';
import DoneImage from '../../../assets/images/done.png';
import { useAtom } from 'jotai';
import { patchTodosAtom } from '@/store/todos';

interface Props {
  list: Item[];
  checked: boolean;
  mutate: (data: Pick<Item, 'id' | 'isCompleted'>) => void;
}

const TodoList = ({ list, checked, mutate }: Props) => {
  const handleCheckClick = ({ id, isCompleted }: Pick<Item, 'id' | 'isCompleted'>) => {
    mutate({ id, isCompleted });
  };

  return (
    <div className={styles.todoList}>
      <Image src={checked ? DoneImage : TodoImage} alt={checked ? "Done List" : "Todo List"} width={101} height={36} />
      {/* 퀄리티 속성과 우선순위 설정도 생각해보면 좋을것 */}
      <ul className={styles.checkList}>
        {
          list.map((item) => (
            <li key={item.id}>
              <Link href={`/items/${item.id}`}>
                <CheckList {...item} onClick={() => handleCheckClick({ id: item.id, isCompleted: !item.isCompleted })} />
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList;