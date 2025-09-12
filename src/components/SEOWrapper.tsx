import React from 'react';
import { useEffect } from 'react';
import StructuredData from './StructuredData';
import Breadcrumbs from './Breadcrumbs';

interface SEOWrapperProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl: string;
  breadcrumbs?: Array<{label: string, href?: string}>;
  structuredData?: any;
  children: React.ReactNode;
}

const SEOWrapper = ({
  title,
  description,
  keywords,
  ogImage = "https://cdn.poehali.dev/files/4bafb6c1-883d-4faf-8694-f147cb91846a.jpg",
  canonicalUrl,
  breadcrumbs,
  structuredData,
  children
}: SEOWrapperProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
    
    // Update Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', canonicalUrl);
    updateMetaProperty('og:image', ogImage);
    
    // Update Twitter Card
    const updateTwitterMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', ogImage);
    
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return (
    <>
      {/* Structured Data */}
      <StructuredData type="organization" />
      {structuredData && (
        <StructuredData type="product" data={structuredData} />
      )}
      {breadcrumbs && (
        <>
          <StructuredData type="breadcrumb" data={breadcrumbs} />
          <div className="container mx-auto px-4 pt-8">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </>
      )}
      
      {children}
    </>
  );
};

export default SEOWrapper;