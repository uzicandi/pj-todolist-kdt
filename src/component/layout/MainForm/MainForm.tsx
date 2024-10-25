import DoneList from '@/component/feature/DoneList/DoneList';
import TodoList from '@/component/feature/TodoList/TodoList';
import styles from './MainForm.module.css'

const MainForm = () => {
  return (
    <div className={styles.mainForm}>
      <TodoList />
      <DoneList />
    </div>
  )
}

export default MainForm;