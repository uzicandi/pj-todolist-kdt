import Image from 'next/image';
import TodoImage from '../../../assets/images/todo.png'; // png -> webp로 변경하는 방향은 어떨지
import CheckList from '@/component/shared/check-list/CheckList';
import styles from './TodoList.module.css';
import Link from 'next/link';
import { Item } from '@/apis/todos.type';
import DoneImage from '../../../assets/images/done.png';
import BigTodoEmptyImage from '../../../assets/images/empty1.png';
import SmallTodoEmptyImage from '../../../assets/images/empty2.png';
import BigDoneEmptyImage from '../../../assets/images/empty3.png';
import SmallEmptyImage from '../../../assets/images/empty4.png';
import { useMediaQuery } from 'react-responsive'

interface Props {
  list: Item[];
  checked: boolean;
  mutate: (data: Pick<Item, 'id' | 'isCompleted'>) => void;
}

const TodoList = ({ list, checked, mutate }: Props) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 360px)' })
  const handleCheckClick = ({ id, isCompleted }: Pick<Item, 'id' | 'isCompleted'>) => {
    mutate({ id, isCompleted });
  };

  if (!list) return

  return (
    <div className={styles.todoList}>
      <Image src={checked ? DoneImage : TodoImage} alt={checked ? "Done List" : "Todo List"} width={101} height={36} />
      {/* 퀄리티 속성과 우선순위 설정도 생각해보면 좋을것 */}
      {list.length === 0 ?
        <div className={styles.emptyImage}>
          <Image
            src={checked ? BigDoneEmptyImage : BigTodoEmptyImage}
            alt={checked ? "Done List Empty" : "Todo List Empty"}
          />
          {checked &&
            <div className={styles.emptyText}>
              <span>할 일이 없어요.</span>
              <span>TODO를 새롭게 추가해주세요!</span>
            </div>
          }
          {!checked &&
            <div className={styles.emptyText}>
              <span>아직 다 한 일이 없어요.</span>
              <span>해야 할 일을 체크해보세요!</span>
            </div>}

        </div>
        : <ul className={styles.checkList}>
          {
            list.map((item) => (
              <li key={item.id}>
                <Link href={`/items/${item.id}`}>
                  <CheckList
                    {...item}
                    onClick={() => handleCheckClick({ id: item.id, isCompleted: !item.isCompleted })}
                  />
                </Link>
              </li>
            ))
          }
        </ul>}
    </div>
  )
}

export default TodoList;