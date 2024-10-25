import Image from 'next/image';
import TodoImage from '../../../assets/images/todo.png';
import CheckList from '@/component/shared/check-list/CheckList';
import styles from './TodoList.module.css';

const TodoList = () => {
  return (
    <div className={styles.todoList}>
      <Image src={TodoImage} alt="Todo List" width={101} height={36} />
      <div className={styles.checkList}>
        <CheckList checked={false} />
        <CheckList checked={false} />
        <CheckList checked={false} />
      </div>
    </div>
  )
}

export default TodoList;