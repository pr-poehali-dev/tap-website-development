import React from 'react';
import Icon from '@/components/ui/icon';

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  images?: string[];
  onImageChange?: (src: string) => void;
}

const ImageModal = React.memo(({ src, alt, isOpen, onClose, images, onImageChange }: ImageModalProps) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  
  if (!isOpen) return null;

  const currentIndex = images ? images.indexOf(src) : -1;
  const hasMultipleImages = images && images.length > 1;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultipleImages && onImageChange && currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % images.length;
      onImageChange(images[nextIndex]);
    }
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasMultipleImages && onImageChange && currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      onImageChange(images[prevIndex]);
    }
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onImageChange && images) {
      onImageChange(images[index]);
    }
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !hasMultipleImages || !onImageChange || currentIndex === -1) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      const nextIndex = (currentIndex + 1) % images!.length;
      onImageChange(images![nextIndex]);
    }
    
    if (isRightSwipe) {
      const prevIndex = (currentIndex - 1 + images!.length) % images!.length;
      onImageChange(images![prevIndex]);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative max-w-[90vw] max-h-[90vh]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Закрыть"
        >
          <Icon name="X" size={32} />
        </button>
        
        <img 
          src={src} 
          alt={alt} 
          loading="lazy"
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        
        {/* Navigation arrows for slideshow - positioned at screen edges */}
        {hasMultipleImages && (
          <>
            <button
              onClick={goToPrev}
              className="fixed left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-all duration-200 z-10"
              aria-label="Предыдущее изображение"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>

            <button
              onClick={goToNext}
              className="fixed right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-3 transition-all duration-200 z-10"
              aria-label="Следующее изображение"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToSlide(index, e)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Перейти к изображению ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm">
          {alt} {hasMultipleImages && `(${currentIndex + 1} из ${images.length})`}
        </div>
      </div>
    </div>
  );
});

export default ImageModal;