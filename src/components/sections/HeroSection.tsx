import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import HeroSlideshow from '@/components/ui/hero-slideshow';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <div className={`pt-24 ${className}`}>
      <HeroSlideshow 
        images={[
          'https://cdn.poehali.dev/files/c6b1b560-6b28-4c62-b60d-438f321a90fc.jpg',
          'https://cdn.poehali.dev/files/acf6104e-b8bf-48f0-b09b-02eab5c49057.jpg',
          'https://cdn.poehali.dev/files/ac6854fd-7479-42aa-b248-3daabe79d90e.jpg'
        ]}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="text-white">
              Шкафы управления
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            Разрабатываем и производим шкафы управления с программированием ПЛК 
            и сенсорных панелей оператора. 
            <br /><br />
            Производим навесные корпуса и технически люки из нержавеющей стали, а также осуществляем поставку КИПиА.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </HeroSlideshow>
    </div>
  );
};

export default HeroSection;