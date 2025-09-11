import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ProductsSectionProps {
  className?: string;
}

const ProductsSection = React.memo(({ className = '' }: ProductsSectionProps) => {
  return (
    <section id="services" className={`py-16 px-6 bg-white ${className}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Наша продукция</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Полный цикл разработки и производства шкафов управления, навесных корпусов и люков из нержавеющей стали, а также поставка оборудования для промышленной автоматизации
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <a href="/projects">
            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/files/b14bf4f8-e72d-4de2-b587-57718327eee4.jpg" 
                  alt="Шкафы управления" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">Шкафы управления</CardTitle>
                <CardDescription>
                  Проектирование, сборка и программирование шкафов управления под ключ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />SIEMENS, ОВЕН, Weintek, Schneider, Optimus Drive, Autonics</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Программирование PLC, HMI и SCADA</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Контроль сборки и ПО перед отправкой</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Пуско-наладочные работы</li>
                </ul>
              </CardContent>
            </Card>
          </a>

          <a href="/aisi">
            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/files/2154a0f8-3c93-4286-8377-eb8d01f6676f.jpg" 
                  alt="Корпуса из нержавеющей стали" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-800">Корпуса из нержавеющей стали</CardTitle>
                <CardDescription>
                  Производство корпусов из нержавеющей стали
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />AISI 304, 316, 316L</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Различные размеры</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Степень защиты от IP54 до IP66</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Вырез дополнительных отверстий по чертежу</li>
                </ul>
              </CardContent>
            </Card>
          </a>

          <a href="/hatches">
            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg">
                <img 
                  src="https://cdn.poehali.dev/files/71b88224-89da-4704-88d0-e4826d2d231e.jpg" 
                  alt="Люки из нержавеющей стали" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-800">Люки из нержавеющей стали</CardTitle>
                <CardDescription>
                  Технологические люки для промышленного применения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />AISI 304, 316</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Люки овальные 340×440, давление до 0.6 МПа</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Люки кольцевые DN400, DN450</li>
                  <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Высокая степень полировки</li>
                </ul>
              </CardContent>
            </Card>
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8 justify-center max-w-4xl mx-auto">
          <a href="/preobrazovateli-chastotyi">
            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
            <div className="h-48 overflow-hidden rounded-t-lg">
              <img 
                src="https://cdn.poehali.dev/files/91ee8b1b-2624-44bd-b986-d6b870fd3b82.jpg" 
                alt="Частотные преобразователи" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-foreground">Частотные преобразователи Optimus Drive</CardTitle>
              <CardDescription>
                Поставка частотных преобразователей для управления электродвигателями
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Мощность от 0.75 до 630 кВт</li>
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Векторное управление</li>
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Встроенные фильтры EMC</li>
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Интерфейсы связи RS485, Ethernet</li>
              </ul>
            </CardContent>
            </Card>
          </a>

          <a href="#contacts">
            <Card className="h-full group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:shadow-primary/10 cursor-pointer">
              <div className="h-48 overflow-hidden rounded-t-lg">
              <img 
                src="https://cdn.poehali.dev/files/f90f6220-4e98-4b38-b96f-0eae1fd38318.png" 
                alt="КИПиА" 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-foreground">КИПиА</CardTitle>
              <CardDescription>
                Поставка контрольно-измерительных приборов и средств автоматизации
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Датчики и преобразователи</li>
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Регулирующая арматура</li>
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Приборы учёта и контроля</li>
                <li className="flex items-center"><Icon name="Check" className="text-primary mr-2" size={16} />Системы связи и передачи данных</li>
              </ul>
            </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
});

export default ProductsSection;