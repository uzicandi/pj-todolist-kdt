import React from 'react';
import styles from './ImageForm.module.css'
import ImageSvg from '@/assets/icons/imageSvg';
import CircleButton from '@/component/common/CircleButton/CircleButton';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';
import colors from '@/styles/theme/colors';

const ImageForm = () => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => { }

  return (
    <div className={styles.imageForm}>
      <ImageSvg />
      <div className={styles.imageButton}>
        <CircleButton icon={<PlusGrayIcon />} color={colors.slate200} />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  )
}

export default ImageForm;