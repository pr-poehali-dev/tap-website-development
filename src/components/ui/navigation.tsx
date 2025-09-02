import { useNavigate, useLocation } from 'react-router-dom';

interface NavigationProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Navigation = ({ children, href, className }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      // Internal anchor link
      const targetId = href.substring(1);
      
      if (location.pathname === '/') {
        // We're on the home page, scroll to element
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with anchor
        navigate('/', { replace: true });
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Regular page navigation
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Navigation;