import React, { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ContactsSection from '@/components/sections/ContactsSection';

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
      <section className="pt-32 pb-8 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="font-bold text-foreground" style={{fontSize: '36px'}}>
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

            {/* Price List Section with Collapsible */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <button 
                onClick={() => setIsModelsExpanded(!isModelsExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
              >
                <h3 className="text-xl font-bold text-gray-800">СПИСОК МОДЕЛЕЙ</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{isModelsExpanded ? 'Скрыть' : 'Показать'}</span>
                  <span className={`transform transition-transform duration-300 ${isModelsExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isModelsExpanded && (
                <div className="space-y-4">
                  <p className="text-gray-600">Стоимость указана с НДС. Не является публичной офертой.</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Модель</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Напряжение питания</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Мощность двигателя</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Ток</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Тормозной модуль</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Фильтр ЭМС</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Стоимость</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Single Phase 1x220 VAC */}
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-2SD40</td>
                          <td className="border border-gray-300 px-4 py-2 text-center" rowSpan={4}>1x220 VAC</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">0,4 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">2,3 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">6 187,50 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-2SD75</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">0,75 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">4,0 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">6 765,00 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-2S1D5</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">1,5 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">7,0 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">7 095,00 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-2S2D2</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">2,2 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">9,6 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">9 322,50 ₽</td>
                        </tr>
                        
                        {/* Three Phase 3x380 VAC */}
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4TD75H/1D5L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center" rowSpan={8}>3x380 VAC</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">0,75/1,5 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">2,1/3,8 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">8 662,50 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T1D5H/2D2L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">1,5/2,2 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">3,8/5,1 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">9 487,50 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T2D2H/4D0L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">2,2/4 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">5,1/9 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">9 982,50 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T4D0H/5D5L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">4/5,5 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">9/13 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">10 725,00 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T5DH/7D5L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">5,5/7,5 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">13/17 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">13 035,00 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T7D5H/011L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">7,5/11 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">17/25 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">18 067,50 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T011H/015L</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">11/15 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">25/32 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">24 255,00 ₽</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">AD30-4T015H/18DL</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">15/18,5 кВт</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">32/37 А</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">Да</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-semibold">32 092,50 ₽</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <button 
                onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
              >
                <h3 className="text-xl font-bold text-gray-800">ОСНОВНЫЕ ФУНКЦИИ И ХАРАКТЕРИСТИКИ</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{isFeaturesExpanded ? 'Скрыть' : 'Показать'}</span>
                  <span className={`transform transition-transform duration-300 ${isFeaturesExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isFeaturesExpanded && (
                <div className="space-y-3">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Регулирование скорости или момента асинхронных двигателей</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Поддержание регулируемого параметра (давления, температуры)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Векторный и скалярный режимы работы</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Нормальный и легкий режимы работы</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>4 дискретных входа (PNP/NPN), 1 дискретный (импульсный) выход и 1 аналоговый выход</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>1 аналоговый вход и 1 аналоговый выход</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Торможение постоянным током</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Защита двигателя</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Встроенный тормозной модуль</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Встроенный фильтр ЭМС</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Потенциометр задания на пульте</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Additional Features Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <button 
                onClick={() => setIsAdditionalExpanded(!isAdditionalExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
              >
                <h3 className="text-xl font-bold text-gray-800">ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{isAdditionalExpanded ? 'Скрыть' : 'Показать'}</span>
                  <span className={`transform transition-transform duration-300 ${isAdditionalExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isAdditionalExpanded && (
                <div className="space-y-3">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Автонастройка на двигатель</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Останов насоса при отсутствии расхода (спящий режим)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Энергосберегающий режим</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Встроенный ПЛК (работа в цикле по фиксированным скоростям)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Функция качания частоты (вобуляция)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Встроенный порт Modbus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Пожарный режим</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Защитное покрытие плат 3C3</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>Опциональный выносной пульт с возможностью копирования параметров</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>3 года гарантии</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Dimensions Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <button 
                onClick={() => setIsDimensionsExpanded(!isDimensionsExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
              >
                <h3 className="text-xl font-bold text-gray-800">ГАБАРИТЫ И ВЕС</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{isDimensionsExpanded ? 'Скрыть' : 'Показать'}</span>
                  <span className={`transform transition-transform duration-300 ${isDimensionsExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isDimensionsExpanded && (
                <div className="space-y-6">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="lg:w-1/2">
                      <div 
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setModalImage({src: 'https://cdn.poehali.dev/files/1e7a7c84-5bb2-4a2a-9e2f-c6d8e4a3b1f0.jpg', alt: 'Габаритные размеры AD30'})}
                        title="Нажмите для увеличения"
                      >
                        <img 
                          src="https://cdn.poehali.dev/files/1e7a7c84-5bb2-4a2a-9e2f-c6d8e4a3b1f0.jpg" 
                          alt="Габаритные размеры AD30" 
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Модель</th>
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">A, мм</th>
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">B, мм</th>
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">C, мм</th>
                              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">Вес, кг</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-center">0.4-2.2кВт</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">155</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">100</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">145</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">1.2</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-center">4-5.5кВт</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">200</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">120</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">165</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">2.1</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2 text-center">7.5-18.5кВт</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">250</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">150</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">195</td>
                              <td className="border border-gray-300 px-4 py-2 text-center">4.2</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Specifications Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <button 
                onClick={() => setIsSpecsExpanded(!isSpecsExpanded)}
                className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded"
              >
                <h3 className="text-xl font-bold text-gray-800">ХАРАКТЕРИСТИКИ</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{isSpecsExpanded ? 'Скрыть' : 'Показать'}</span>
                  <span className={`transform transition-transform duration-300 ${isSpecsExpanded ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </div>
              </button>
              
              {isSpecsExpanded && (
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Напряжение питания</td>
                          <td className="border border-gray-300 px-4 py-3">1×220В ± 15% / 3×380В ± 15%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Частота питания</td>
                          <td className="border border-gray-300 px-4 py-3">50/60 Гц ± 5%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Напряжение на выходе</td>
                          <td className="border border-gray-300 px-4 py-3">3×(0~напряжение питания)В</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Частота на выходе</td>
                          <td className="border border-gray-300 px-4 py-3">0.5~400 Гц (векторный режим), 0.5~3200 Гц (скалярный режим)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Перегрузочная способность</td>
                          <td className="border border-gray-300 px-4 py-3">150% номинального тока в течение 60 с, 180% номинального тока в течение 10 с</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Точность управления скоростью</td>
                          <td className="border border-gray-300 px-4 py-3">± 0.2% номинальной скорости (векторный режим)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Температура эксплуатации</td>
                          <td className="border border-gray-300 px-4 py-3">-10°C ~ +40°C</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Влажность</td>
                          <td className="border border-gray-300 px-4 py-2">≤ 95% (без конденсации)</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Высота</td>
                          <td className="border border-gray-300 px-4 py-3">≤ 1000м над уровнем моря</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3 font-semibold bg-gray-50">Степень защиты</td>
                          <td className="border border-gray-300 px-4 py-3">IP20</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <div className="py-8"></div>

      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors text-3xl"
              aria-label="Закрыть"
            >
              ×
            </button>
            
            <img 
              src={modalImage.src} 
              alt={modalImage.alt} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            
            <div className="absolute -bottom-12 left-0 right-0 text-center text-white text-sm">
              {modalImage.alt}
            </div>
          </div>
        </div>
      )}

      <ContactsSection />
      <Footer />
    </div>
  );
};

export default FrequencyConverters;