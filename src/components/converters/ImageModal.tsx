import React from 'react';
import Icon from '@/components/ui/icon';

interface ImageModalProps {
  modalImage: {src: string, alt: string, images?: string[]} | null;
  onClose: () => void;
  images?: string[];
  onImageChange?: (src: string) => void;
}

const ImageModal = ({ modalImage, onClose, images, onImageChange }: ImageModalProps) => {
  if (!modalImage) return null;

  const currentImages = images || modalImage.images || [modalImage.src];
  const currentIndex = currentImages.findIndex(img => img === modalImage.src);
  const hasMultiple = currentImages.length > 1;

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultiple && onImageChange) {
      const nextIndex = (currentIndex + 1) % currentImages.length;
      onImageChange(currentImages[nextIndex]);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultiple && onImageChange) {
      const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      onImageChange(currentImages[prevIndex]);
    }
  };

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
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Navigation arrows for multiple images */}
        {hasMultiple && onImageChange && (
          <>
            <button
              onClick={goToPrev}
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
              aria-label="Предыдущее изображение"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>

            <button
              onClick={goToNext}
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors"
              aria-label="Следующее изображение"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
            
            {/* Image counter */}
            <div className="absolute -top-12 left-0 text-white text-sm">
              {currentIndex + 1} из {currentImages.length}
            </div>
          </>
        )}
        
        <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm">
          {modalImage.alt}
        </div>
      </div>
    </div>
  );
};

// Handle keyboard navigation
React.useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [onClose]);

export default ImageModal;