import React, { useState, useCallback } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { useFirebaseContext } from '../../context/FirebaseContext';
import ReactCrop, { Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Container } from 'styled-bootstrap-grid';

const ImageUpload = () => {
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('image/jpeg');
  const [src, setSrc] = useState(null as string | null);
  const [croppedImageBlob, setCroppedImageBlob] = useState(null as Blob | null);
  const { firebaseStorage } = useFirebaseContext();
  const [crop, setCrop] = useState<Crop>({
    width: 50,
    height: 50,
    x: 0,
    y: 0,
    unit: 'px'
  });

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      const file = e.target.files[0];
      setFileType(file.type);
      setFileName(file.name);
      reader.addEventListener('load', () => setSrc(reader.result as string));
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback(
    (crop, pixelCrop) => {
      // Convert crop to blob
      const imageEl =
        document.querySelector<HTMLImageElement>('.ReactCrop__image');
      if (imageEl && crop.width && crop.height) {
        const canvas = document.createElement('canvas');
        const scaleX = imageEl.naturalWidth / imageEl.width;
        const scaleY = imageEl.naturalHeight / imageEl.height;
        const targetX = (imageEl.width * pixelCrop.x * scaleX) / 100;
        const targetY = (imageEl.height * pixelCrop.y * scaleY) / 100;
        const targetWidth = (imageEl.width * pixelCrop.width * scaleX) / 100;
        const targetHeight = (imageEl.height * pixelCrop.height * scaleY) / 100;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(
          imageEl,
          targetX,
          targetY,
          targetWidth,
          targetHeight,
          0,
          0,
          crop.width,
          crop.height
        );

        canvas.toBlob((blob) => {
          setCroppedImageBlob(blob);
        }, fileType);
      }
    },
    [fileType]
  );

  const uploadImage = async () => {
    if (croppedImageBlob) {
      const imgRef = ref(
        firebaseStorage,
        `/files-${'123'}/${'123'}}-${Date.now()}-${fileName}`
      );
      const uploadTask = uploadBytesResumable(imgRef, croppedImageBlob);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress
        },
        (error) => {
          console.error('Upload error:', error);
        },
        () => {
          console.log('Uploaded successfully!');

          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log('Uploaded pfp image url:', url);
          });
        }
      );
    }
  };

  return (
    <Container>
      <input
        type="file"
        accept="image/jpeg, image/png, image/gif"
        onChange={onSelectFile}
      />
      {src && (
        <ReactCrop
          crop={crop}
          onChange={(newCrop: Crop) => setCrop(newCrop)}
          onComplete={onCropComplete}
          circularCrop={true}
          aspect={1 / 1}
        >
          <img className="ReactCrop__image" src={src} />
        </ReactCrop>
      )}
      {src && (
        <Button variant="success" onClick={uploadImage}>
          Save Photo
        </Button>
      )}
    </Container>
  );
};

export default ImageUpload;