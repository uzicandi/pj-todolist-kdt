import TodoList from '@/component/feature/TodoList/TodoList';
import styles from './MainTodos.module.css'
import { useQueryTodos } from '@/apis/todos.query';


const MainTodos = () => {
  const { data } = useQueryTodos();

  const todos = data.filter((todo) => !todo.isCompleted);
  const dones = data.filter((todo) => todo.isCompleted);

  return (
    <div className={styles.mainForm}>
      <TodoList list={todos} checked={false} />
      <TodoList list={dones} checked />
    </div>
  )
}

export default MainTodos;