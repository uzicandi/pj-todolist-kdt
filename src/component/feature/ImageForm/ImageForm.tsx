import React, { useEffect, useRef, useState } from 'react';
import styles from './ImageForm.module.css'
import ImageSvg from '@/assets/icons/imageSvg';
import CircleButton from '@/component/common/CircleButton/CircleButton';
import { PlusGrayIcon } from '@/assets/icons/plus_gray';
import { api } from '@/pages/api/api';
import { inputsAtom } from '@/store/atoms';
import { useAtom } from 'jotai';
interface UploadResponse {
  url: string;
}

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
      if (file.size > 5 * 1024 * 1024) { // 5MB in bytes
        console.error("File size exceeds 5MB");
        alert("Please select a file smaller than 5MB.");
        return;
      }

      // Check if file name contains only English characters and digits
      const isEnglish = /^[A-Za-z0-9._-]+$/.test(file.name);
      if (!isEnglish) {
        console.error("File name contains non-English characters");
        alert("Please use a file with an English name only.");
        return;
      }

      formData.append('image', file); // Use 'image' as the key to match the backend

      try {
        const response: UploadResponse = await api.post('api/jiwoo/images/upload', {
          body: formData, // Send FormData directly in the body
        }).json();
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