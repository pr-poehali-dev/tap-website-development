import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';
import AisiModelsList, { Aisi316ModelsList } from '@/components/aisi/AisiModelsList';
import ImageModal from '@/components/ImageModal';
import ImageSlider from '@/components/ImageSlider';
import Icon from '@/components/ui/icon';
import SEOWrapper from '@/components/SEOWrapper';

const Aisi = () => {
  const [isModelsExpanded, setIsModelsExpanded] = useState(true);
  const [isAisi316Expanded, setIsAisi316Expanded] = useState(false);
  const [isCharacteristicsExpanded, setIsCharacteristicsExpanded] = useState(true);
  const [isTechnicalDrawingExpanded, setIsTechnicalDrawingExpanded] = useState(false);
  const [modalImage, setModalImage] = useState<{src: string, alt: string, images?: string[]} | null>(null);

  const sliderImages = [
    "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg",
    "https://cdn.poehali.dev/files/8679c31a-6821-4923-a004-703cee3ad993.jpg",
    "https://cdn.poehali.dev/files/0104119d-e7cc-4e4a-a186-b744cf42f34c.jpg"
  ];
  
  const breadcrumbs = [
    { label: 'Главная', href: '/' },
    { label: 'Корпуса AISI304' }
  ];

  return (
    <SEOWrapper
      title="Корпуса из нержавеющей стали AISI304 и AISI316 - Электротехнические корпуса на заказ"
      description="Производим корпуса из высококачественной нержавеющей стали AISI304 и AISI316 для агрессивных условий эксплуатации в пищевой, химической промышленности. Индивидуальный подход, чертежи, технологические отверстия."
      keywords="корпуса aisi304, корпуса aisi316, нержавеющая сталь, электротехнические корпуса, корпуса на заказ, пищевая промышленность, химическая промышленность, степень защиты IP66"
      canonicalUrl="https://tap-automation.ru/aisi"
      breadcrumbs={breadcrumbs}
      structuredData={{
        name: "Корпуса из нержавеющей стали AISI304",
        description: "Электротехнические корпуса из нержавеющей стали марки AISI304 и AISI316 для агрессивных условий эксплуатации в пищевой, косметической, химической промышленности",
        image: "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg"
      }}
    >
      <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
        <Header currentPage="aisi" />

      {/* Page Title Section */}
      <section className="pt-40 pb-8 px-6 sm:pt-36 md:pt-40">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="font-bold text-foreground text-2xl sm:text-3xl lg:text-4xl px-4">
              Корпуса из нержавеющей стали
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="px-6 py-0">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-16">
              <div className="lg:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <ImageSlider
                    images={sliderImages}
                    alt="Корпуса из нержавеющей стали AISI304"
                    onImageClick={(src) => setModalImage({src, alt: "Корпуса из нержавеющей стали AISI304", images: sliderImages})}
                    title="Нажмите для увеличения"
                  />
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-6 uppercase tracking-wide">
                  Электротехнические корпуса из нержавеющей стали марки AISI304 и AISI316
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Производим корпуса из нержавеющей стали для агрессивных условий эксплуатации в пищевой, косметической, химической промышленности. Корпуса изготавливаются из высококачественной нержавеющей стали марки AISI304 и AISI316.
                  </p>
                  
                  <p>
                    Индивидуальный подход к заказу, согласуем чертёж или 3D модель перед производством, добавим необходимые технологические отверстия по запросу для экономии Вашего времени на слесарных работах.
                  </p>
                </div>
              </div>
            </div>

            {/* Characteristics Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
              <button 
                onClick={() => setIsCharacteristicsExpanded(!isCharacteristicsExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[50px]"
              >
                <h4 className="md:text-lg text-gray-800 flex-1 pr-2 font-bold text-xl">Характеристики</h4>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
                    {isCharacteristicsExpanded ? 'Скрыть' : 'Показать'}
                  </span>
                  <span className={`transform transition-transform duration-300 ${isCharacteristicsExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isCharacteristicsExpanded && (
                <div className="grid grid-cols-1 gap-3 px-2">
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Материал корпуса AISI304 или AISI316 толщиной 1.5 мм</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Материал монтажной панели AISI403 толщиной 1 мм</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Гладкие швы</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Уплотнитель на двери</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Зеркальная полировка по дополнительному запросу</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Климатическое исполнение УХЛ1</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="CheckCircle2" className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-words leading-relaxed">Степень защиты IP66</span>
                  </div>
                </div>
              )}
            </div>

            {/* Technical Drawing Section */}
            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6">
              <button 
                onClick={() => setIsTechnicalDrawingExpanded(!isTechnicalDrawingExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[50px]"
              >
                <h4 className="md:text-lg text-gray-800 flex-1 pr-2 font-bold text-xl">Технический чертёж</h4>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
                    {isTechnicalDrawingExpanded ? 'Скрыть' : 'Показать'}
                  </span>
                  <span className={`transform transition-transform duration-300 ${isTechnicalDrawingExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isTechnicalDrawingExpanded && (
                <div className="px-2">
                  <div 
                    className="relative overflow-hidden cursor-pointer group/image rounded-lg max-w-2xl mx-auto"
                    onClick={() => setModalImage({
                      src: "https://cdn.poehali.dev/files/906b6a9d-adca-4978-a8bb-a1a8222df58b.png",
                      alt: "Технический чертёж корпуса AISI304"
                    })}
                    title="Нажмите для увеличения"
                  >
                    <img 
                      src="https://cdn.poehali.dev/files/906b6a9d-adca-4978-a8bb-a1a8222df58b.png" 
                      alt="Технический чертёж корпуса AISI304" 
                      loading="lazy"
                      className="w-full h-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                        <Icon name="ZoomIn" className="text-gray-800" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Models List Section */}
            <AisiModelsList 
              isExpanded={isModelsExpanded}
              setIsExpanded={setIsModelsExpanded}
            />

            {/* AISI316 Models List Section */}
            <Aisi316ModelsList 
              isExpanded={isAisi316Expanded}
              setIsExpanded={setIsAisi316Expanded}
            />
          </div>
        </div>
      </section>
      
      <div className="py-8"></div>

      {/* Image Modal */}
      <ImageModal 
        src={modalImage?.src || ''}
        alt={modalImage?.alt || ''}
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        images={modalImage?.images}
        onImageChange={(src) => setModalImage(prev => prev ? {...prev, src} : null)}
      />

        <ContactsSection />
        <Footer />
      </div>
    </SEOWrapper>
  );
};

export default Aisi;