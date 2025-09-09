import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';
import ModelsList from '@/components/converters/ModelsList';
import MainFeatures from '@/components/converters/MainFeatures';
import AdditionalFeatures from '@/components/converters/AdditionalFeatures';
import DimensionsSection from '@/components/converters/DimensionsSection';
import SpecificationsSection from '@/components/converters/SpecificationsSection';
import ImageModal from '@/components/converters/ImageModal';

const FrequencyConverters = () => {
  const [isModelsExpanded, setIsModelsExpanded] = useState(true);
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);
  const [isAdditionalExpanded, setIsAdditionalExpanded] = useState(false);
  const [isDimensionsExpanded, setIsDimensionsExpanded] = useState(false);
  const [isSpecsExpanded, setIsSpecsExpanded] = useState(false);
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Header currentPage="converters" />

      {/* Page Title Section */}
      <section className="pt-40 pb-8 px-6 sm:pt-36 md:pt-40">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="font-bold text-foreground text-2xl sm:text-3xl lg:text-4xl px-4">
              Серия AD30 Optimus Drive
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
                <img 
                  src="https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg" 
                  alt="Частотные преобразователи AD30" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="lg:w-2/3">
                <h2 className="text-lg md:text-xl font-bold text-gray-600 mb-6 uppercase tracking-wide">
                  AD30 КОМПАКТНЫЕ УНИВЕРСАЛЬНЫЕ ПРЕОБРАЗОВАТЕЛИ ЧАСТОТЫ
                </h2>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    AD30 – это универсальные и надежные преобразователи частоты для точного управления асинхронными двигателями.
                  </p>
                  
                  <p>
                    Они сочетают в себе компактность, высокую перегрузочную способность, простоту монтажа и богатый функционал, благодаря чему идеально подходят для общепромышленного применения, а также для установки в насосных и вентиляционных системах.
                  </p>
                </div>
              </div>
            </div>

            {/* Models List Section */}
            <ModelsList 
              isExpanded={isModelsExpanded}
              setIsExpanded={setIsModelsExpanded}
            />

            {/* Main Features Section */}
            <MainFeatures 
              isExpanded={isFeaturesExpanded}
              setIsExpanded={setIsFeaturesExpanded}
            />

            {/* Additional Features Section */}
            <AdditionalFeatures 
              isExpanded={isAdditionalExpanded}
              setIsExpanded={setIsAdditionalExpanded}
            />

            {/* Dimensions Section */}
            <DimensionsSection 
              isExpanded={isDimensionsExpanded}
              setIsExpanded={setIsDimensionsExpanded}
              onImageClick={setModalImage}
            />

            {/* Specifications Section */}
            <SpecificationsSection 
              isExpanded={isSpecsExpanded}
              setIsExpanded={setIsSpecsExpanded}
            />
          </div>
        </div>
      </section>
      
      <div className="py-8"></div>

      {/* Image Modal */}
      <ImageModal 
        modalImage={modalImage}
        onClose={() => setModalImage(null)}
      />

      <ContactsSection />
      <Footer />
    </div>
  );
};

export default FrequencyConverters;