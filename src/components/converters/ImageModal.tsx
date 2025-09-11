import React from 'react';

interface ImageModalProps {
  modalImage: {src: string, alt: string} | null;
  onClose: () => void;
}

const ImageModal = ({ modalImage, onClose }: ImageModalProps) => {
  if (!modalImage) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-3xl"
          aria-label="Закрыть"
        >
          ×
        </button>
        
        <img 
          src={modalImage.src} 
          alt={modalImage.alt} 
          loading="lazy"
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        
        <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm">
          {modalImage.alt}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;