import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageForm.module.css'
import ImageSvg from '@/assets/icons/imageSvg';
import CircleButton from '@/component/common/CircleButton/CircleButton';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';
import { inputsAtom } from '@/store/atoms';
import { useAtom } from 'jotai';
import { uploadImage } from '@/apis/todos';
import { UploadResponse } from '@/apis/todos.type';


interface Props {
  imageUrl: string;
}

const ImageForm = ({ imageUrl }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadResponse, setUploadResponse] = useState<UploadResponse | null>(null);
  const [error, setError] = useState<string | null>(null)
  const [inputs, setInputs] = useAtom(inputsAtom);

  useEffect(() => {
    if (imageUrl && !uploadResponse) {
      setInputs({ ...inputs, imageUrl });
    }
  }, [imageUrl]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const validateFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      return "5MB 이하의 파일만 업로드 가능합니다.";
    }
    if (!/^[A-Za-z0-9._-]+$/.test(file.name)) {
      return "파일 이름에는 영문자만 사용 가능합니다.";
    }
    return null;
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const validationError = validateFile(file);

      if (validationError) {
        setError(validationError);
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      try {
        const response: UploadResponse = await uploadImage(formData);
        setUploadResponse(response);
        setInputs({ ...inputs, imageUrl: response.url });
        setError(null);

      } catch (error) {
        console.error("Upload error:", error);
        setError('업로드 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className={styles.imageForm}>
      {imageUrl && !uploadResponse && <img src={imageUrl} alt="Uploaded" className={styles.uploadedImage} />}
      {uploadResponse && <img src={uploadResponse.url} alt="Uploaded" className={styles.uploadedImage} />}
      {error && (
        <p className={styles.errorMessage}>{error}</p> // 에러 메시지를 이미지 위에 표시
      )}
      {!imageUrl && !uploadResponse && (
        <>
          <ImageSvg />
        </>
      )}
      <div className={styles.imageButton}>
        <CircleButton icon={<PlusGrayIcon />} color="slate200" onClick={handleButtonClick} />
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