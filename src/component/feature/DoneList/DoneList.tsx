import Image from 'next/image';
import DoneImage from '../../../assets/images/done.png';
import CheckList from '@/component/shared/check-list/CheckList';
import styles from './DoneList.module.css';

const DoneList = () => {
  return (
    <div className={styles.doneList}>
      <Image src={DoneImage} alt="Done List" width={101} height={36} />
      <div className={styles.checkList}>
        <CheckList checked={true} />
        <CheckList checked={true} />
        <CheckList checked={true} />
      </div>
    </div>
  )
}

export default DoneList;