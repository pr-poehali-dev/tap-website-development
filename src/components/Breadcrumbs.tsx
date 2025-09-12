import React from 'react';
import Icon from '@/components/ui/icon';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <Icon name="ChevronRight" size={16} className="text-muted-foreground" />}
          {item.href ? (
            <a 
              href={item.href} 
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;