import React from 'react';
import Icon from '@/components/ui/icon';

interface ImageModalProps {
  image: {src: string, alt: string} | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-3 transition-all"
        >
          <Icon name="X" className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;