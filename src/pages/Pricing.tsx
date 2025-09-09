import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/5">
      <Header currentPage="aisi" />

      {/* Development Notice Section */}
      <section className="py-20 px-6 pt-44">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Icon name="HardHat" className="text-primary" size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Корпуса из нержавеющей стали
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Раздел находится в разработке
              </p>
            </div>
            
            <Card className="p-8 bg-accent/5 border-primary/20">
              <CardContent className="space-y-6">
                <div className="flex items-center justify-center mb-6">
                  <Icon name="Clock" className="text-primary mr-3" size={32} />
                  <h2 className="text-2xl font-semibold text-foreground">В ближайшее время здесь появится:</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="FileText" className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Прайс-лист</h3>
                        <p className="text-muted-foreground text-sm">Актуальные цены на корпуса и люки различных размеров и характеристик</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Icon name="Settings" className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Техническая информация</h3>
                        <p className="text-muted-foreground text-sm">Подробные спецификации, чертежи и технические характеристики</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="Shield" className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Степени защиты</h3>
                        <p className="text-muted-foreground text-sm">Информация о классах защиты IP65, IP66, IP67, IP68</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Icon name="Wrench" className="text-primary mr-3 mt-1" size={20} />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Материалы и исполнения</h3>
                        <p className="text-muted-foreground text-sm">Варианты материалов: марки нержавеющей стали</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-muted-foreground text-center">
                    Для получения актуальной информации о корпусах и люках обращайтесь к нашим специалистам
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Pricing;