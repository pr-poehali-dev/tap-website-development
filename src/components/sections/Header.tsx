import { useState, useEffect } from 'react';
import ContactBar from './ContactBar';
import MainHeader from './MainHeader';

interface HeaderProps {
  className?: string;
  currentPage?: string;
}

const Header = ({ className = '', currentPage = 'home' }: HeaderProps) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-white/95 backdrop-blur-sm border-b fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    } ${className}`}>
      <ContactBar />
      <MainHeader currentPage={currentPage} />
    </header>
  );
};

export default Header;