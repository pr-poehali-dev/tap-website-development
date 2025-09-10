import React from 'react';

interface ModelsListProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const ModelsList = ({ isExpanded, setIsExpanded }: ModelsListProps) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);
  
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('[data-section="contacts"]');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">СПИСОК МОДЕЛЕЙ</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">{isExpanded ? 'Скрыть' : 'Показать'}</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-4">
          <p className="text-gray-600">Стоимость указана с НДС. Не является публичной офертой.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">Модель</th>
                  <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">Напряжение питания</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">Мощность двигателя</th>
                  <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">Ток</th>
                  <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800">Тормозной модуль</th>
                  <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800">Фильтр ЭМС</th>
                  <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800">Срок поставки</th>
                  <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {/* Single Phase 1x220 VAC */}
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-2SD40' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-2SD40' ? null : 'AD30-2SD40')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-2SD40</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap" rowSpan={4}>1x220 VAC</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">0,4 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">2,3 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">6 187,50 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-2SD75' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-2SD75' ? null : 'AD30-2SD75')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-2SD75</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">0,75 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">4,0 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">6 765,00 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-2S1D5' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-2S1D5' ? null : 'AD30-2S1D5')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-2S1D5</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">1,5 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">7,0 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">7 095,00 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-2S2D2' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-2S2D2' ? null : 'AD30-2S2D2')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-2S2D2</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">2,2 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">9,6 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">9 322,50 ₽</td>
                </tr>
                
                {/* Three Phase 3x380 VAC */}
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4TD75H/1D5L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4TD75H/1D5L' ? null : 'AD30-4TD75H/1D5L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-4TD75H/1D5L</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap" rowSpan={8}>3x380 VAC</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">0,75/1,5 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">2,1/3,8 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">8 662,50 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T1D5H/2D2L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T1D5H/2D2L' ? null : 'AD30-4T1D5H/2D2L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-4T1D5H/2D2L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">1,5/2,2 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">3,8/5,1 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">9 487,50 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T2D2H/4D0L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T2D2H/4D0L' ? null : 'AD30-4T2D2H/4D0L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-4T2D2H/4D0L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">2,2/4 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">5,1/9 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">9 982,50 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T4D0H/5D5L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T4D0H/5D5L' ? null : 'AD30-4T4D0H/5D5L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">AD30-4T4D0H/5D5L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">4/5,5 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">9/13 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">10 725,00 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T5DH/7D5L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T5DH/7D5L' ? null : 'AD30-4T5DH/7D5L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium">AD30-4T5DH/7D5L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">5,5/7,5 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">13/17 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">13 035,00 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T7D5H/011L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T7D5H/011L' ? null : 'AD30-4T7D5H/011L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium">AD30-4T7D5H/011L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">7,5/11 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">17/25 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold">18 067,50 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T011H/015L' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T011H/015L' ? null : 'AD30-4T011H/015L')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium">AD30-4T011H/015L</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">11/15 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">25/32 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold whitespace-nowrap">24 255,00 ₽</td>
                </tr>
                <tr 
                  className={`cursor-pointer transition-colors hover:bg-red-50 ${
                    selectedRow === 'AD30-4T015H/18DL' ? 'bg-red-100' : ''
                  }`}
                  onClick={() => setSelectedRow(selectedRow === 'AD30-4T015H/18DL' ? null : 'AD30-4T015H/18DL')}
                >
                  <td className="border border-gray-300 px-3 py-2 text-center font-medium">AD30-4T015H/18DL</td>
                  <td className="border border-gray-300 px-3 py-2 text-center">15/18,5 кВт</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">32/37 А</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">Да</td>
                  <td className="border border-gray-300 px-2 py-2 text-center">
                    <button 
                      onClick={scrollToContacts}
                      className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
                    >
                      Уточнить
                    </button>
                  </td>
                  <td className="border border-gray-300 px-3 py-2 text-center font-semibold whitespace-nowrap">32 092,50 ₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelsList;