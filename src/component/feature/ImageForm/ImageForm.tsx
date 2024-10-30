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
  const [loading] = useState(false);
  const [error] = useState<string | null>(null)
  const [inputs, setInputs] = useAtom(inputsAtom);

  useEffect(() => {
    if (imageUrl && !uploadResponse) {
      setInputs({ ...inputs, imageUrl });
    }
  }, [imageUrl]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        console.error("File size exceeds 5MB");
        alert("5MB 이하의 파일만 업로드 가능합니다.");
        return;
      }

      const isEnglish = /^[A-Za-z0-9._-]+$/.test(file.name);
      if (!isEnglish) {
        console.error("File name contains non-English characters");
        alert("파일 이름에는 영문자만 사용 가능합니다.");
        return;
      }

      formData.append('image', file);

      try {
        const response: UploadResponse = await uploadImage(formData);
        setUploadResponse(response);
        setInputs({ ...inputs, imageUrl: response.url });
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };


  return (
    <div className={styles.imageForm}>
      {imageUrl && !uploadResponse ? <img src={imageUrl} alt="Uploaded" className={styles.uploadedImage} /> : null}
      {uploadResponse && <img src={uploadResponse.url} alt="Uploaded" className={styles.uploadedImage} />}
      {!imageUrl && !uploadResponse ? <>
        <ImageSvg />
        {loading && <p>Uploading...</p>}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </> : null}
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