import React, { useRef, useState } from 'react';
import styles from './ImageForm.module.css'
import ImageSvg from '@/assets/icons/imageSvg';
import CircleButton from '@/component/common/CircleButton/CircleButton';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';
import colors from '@/styles/theme/colors';
import { useAtom } from 'jotai';
import { api } from '@/pages/api/api';

interface UploadResponse {
  url: string;
}

const ImageForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadResponse, setUploadResponse] = useState<UploadResponse | null>(null); // atom으로 변경
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();

    if (file) {
      formData.append('image', file); // Use 'image' as the key to match the backend

      try {
        const response = await api.post('api/jiwoo/images/upload', {
          body: formData, // Send FormData directly in the body
        }).json();

        console.log(response);

        setUploadResponse(response);
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };

  return (
    <div className={styles.imageForm}>
      {uploadResponse ? (
        <img src={uploadResponse.url} alt="Uploaded" className={styles.uploadedImage} />
      ) : (
        <>
          <ImageSvg />

          {loading && <p>Uploading...</p>}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </>
      )}
      <div className={styles.imageButton}>
        <CircleButton icon={<PlusGrayIcon />} color={colors.slate200} onClick={handleButtonClick} />
        <input
          ref={fileInputRef}
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default ImageForm;