import React from 'react';

interface StructuredDataProps {
  type: 'organization' | 'product' | 'breadcrumb';
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  let jsonLd = {};

  switch (type) {
    case 'organization':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Технологии Автоматизации Производств",
        "alternateName": "ТАП",
        "description": "Производство шкафов управления, корпусов из нержавеющей стали AISI304/316, технологических люков, частотных преобразователей",
        "url": "https://tap18.ru",
        "logo": "https://cdn.poehali.dev/files/705c65f8-bec4-4833-afb2-840f73d1b635.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+7-800-555-0199",
          "contactType": "sales",
          "areaServed": "RU",
          "availableLanguage": "Russian"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "RU",
          "addressLocality": "Россия"
        },
        "sameAs": [
          "https://t.me/your_telegram"
        ]
      };
      break;
    
    case 'product':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": data?.name || "Корпуса из нержавеющей стали AISI304",
        "description": data?.description || "Электротехнические корпуса из нержавеющей стали марки AISI304 и AISI316 для агрессивных условий эксплуатации",
        "image": data?.image || "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg",
        "brand": {
          "@type": "Brand",
          "name": "ТАП"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "Технологии Автоматизации Производств"
        },
        "material": "AISI304 нержавеющая сталь",
        "category": "Промышленное оборудование",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Технологии Автоматизации Производств"
          }
        }
      };
      break;

    case 'breadcrumb':
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data?.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.label,
          "item": item.href ? `https://tap18.ru${item.href}` : undefined
        })) || []
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default StructuredData;