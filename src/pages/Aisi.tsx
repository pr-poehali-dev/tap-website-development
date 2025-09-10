import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';
import AisiModelsList from '@/components/aisi/AisiModelsList';
import ImageModal from '@/components/converters/ImageModal';
import Icon from '@/components/ui/icon';

const Aisi = () => {
  const [isModelsExpanded, setIsModelsExpanded] = useState(true);
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);
  
  return (
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
                <div 
                  className="relative overflow-hidden cursor-pointer group/image rounded-lg"
                  onClick={() => setModalImage({
                    src: "https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg",
                    alt: "Корпуса из нержавеющей стали AISI304"
                  })}
                  title="Нажмите для увеличения"
                >
                  <img 
                    src="https://cdn.poehali.dev/files/8c397170-a958-4f0b-9a63-e61a0c18c4c6.jpg" 
                    alt="Корпуса из нержавеющей стали AISI304" 
                    className="w-full h-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                      <Icon name="ZoomIn" className="text-gray-800" size={20} />
                    </div>
                  </div>
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

            {/* Models List Section */}
            <AisiModelsList 
              isExpanded={isModelsExpanded}
              setIsExpanded={setIsModelsExpanded}
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

export default Aisi;