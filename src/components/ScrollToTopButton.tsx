import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { useThrottle } from '@/hooks/useDebounce';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useThrottle(() => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 100); // Throttle на 100ms

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Наверх"
        >
          <Icon name="ChevronUp" size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;