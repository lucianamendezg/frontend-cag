import React, { useState } from 'react';
import { Modal, Alert } from 'react-bootstrap';
import 'react-image-crop/dist/ReactCrop.css';
import ImageUpload from '../../shared/ImageUpload';
import Button from '../../../genericComponents/Button';

interface ImageUploadModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (imageUrl: string) => void;
  editProfile: any;
  currentImgUrl: string | null;
  title: string;
}

const ImageUploadModal: React.FC<ImageUploadModalProps> = ({
  show,
  onHide,
  onSave,
  currentImgUrl,
  title
}) => {
  const [error, setError] = useState('');
  const imgUrl = currentImgUrl ?? '';
  return (
    <Modal show={show} onHide={onHide} backdrop="static">
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <Button onClick={onHide} text="Cancel" type="danger" variant="danger" />
      </Modal.Header>
      {error && <Alert variant="danger">{error}</Alert>}
      <ImageUpload onSave={onSave} currentImgUrl={imgUrl} modal={true} />
    </Modal>
  );
};

export default ImageUploadModal;
