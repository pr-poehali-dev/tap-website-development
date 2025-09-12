import React from 'react';
import Icon from '@/components/ui/icon';

const BackToHome = () => {
  return (
    <div className="fixed bottom-4 left-4 z-40">
      <a
        href="/"
        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
        title="На главную"
      >
        <Icon name="Home" size={20} />
        <span className="hidden md:inline text-sm">На главную</span>
      </a>
    </div>
  );
};

export default BackToHome;