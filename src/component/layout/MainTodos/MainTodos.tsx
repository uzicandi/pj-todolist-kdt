import TodoList from '@/component/feature/TodoList/TodoList';
import styles from './MainTodos.module.css'
import { useAtom } from 'jotai';
import { patchTodosAtom, todosAtom } from '@/store/todos';
import { useEffect, useMemo } from 'react';


const MainTodos = () => {
  const [{ data: todosData, isPending, isError }] = useAtom(todosAtom);
  const [{ data: mutatedData, mutate, isPending: isMutatePending }] = useAtom(patchTodosAtom);

  const newTodosData = useMemo(() => {
    if (!todosData) return [];
    return todosData.map((item) => {
      if (mutatedData?.id === item.id) {
        return { ...item, isCompleted: mutatedData.isCompleted };
      }
      return item;
    });
  }, [todosData, mutatedData]);


  const todos = useMemo(() => newTodosData.filter((todo) => !todo.isCompleted), [newTodosData]);
  const dones = useMemo(() => newTodosData.filter((todo) => todo.isCompleted), [newTodosData]);

  useEffect(() => {
  }, [newTodosData]);
  if (isPending) return <div>Loading...</div>
  if (isMutatePending) return <div>Loading...</div>
  if (!todosData) return null;

  return (
    <div className={styles.mainForm}>
      <TodoList list={todos} checked={false} mutate={mutate} />
      <TodoList list={dones} checked mutate={mutate} />
    </div>
  )
}

export default MainTodos;