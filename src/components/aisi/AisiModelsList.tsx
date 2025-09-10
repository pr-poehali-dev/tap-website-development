import React from 'react';

interface AisiModelsListProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const AisiModelsList = ({ isExpanded, setIsExpanded }: AisiModelsListProps) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);
  
  const scrollToContacts = () => {
    const contactsSection = document.querySelector('[data-section="contacts"]');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tableData = [
    { width: 300, height: 250, depth: 150, delivery: "5 р.д.", price: "21 750,00 ₽" },
    { width: 300, height: 300, depth: 150, delivery: "5 р.д.", price: "21 750,00 ₽" },
    { width: 300, height: 400, depth: 150, delivery: "5 р.д.", price: "23 200,00 ₽" },
    { width: 400, height: 300, depth: 150, delivery: "5 р.д.", price: "23 200,00 ₽" },
    { width: 400, height: 300, depth: 200, delivery: "5 р.д.", price: "24 650,00 ₽" },
    { width: 400, height: 400, depth: 200, delivery: "5 р.д.", price: "26 100,00 ₽" },
    { width: 400, height: 600, depth: 200, delivery: "5 р.д.", price: "30 450,00 ₽" },
    { width: 500, height: 300, depth: 150, delivery: "5 р.д.", price: "24 650,00 ₽" },
    { width: 500, height: 300, depth: 200, delivery: "5 р.д.", price: "26 100,00 ₽" },
    { width: 500, height: 400, depth: 200, delivery: "5 р.д.", price: "29 000,00 ₽" },
    { width: 500, height: 400, depth: 250, delivery: "5 р.д.", price: "30 450,00 ₽" },
    { width: 500, height: 500, depth: 200, delivery: "5 р.д.", price: "30 450,00 ₽" },
    { width: 600, height: 400, depth: 200, delivery: "5 р.д.", price: "30 450,00 ₽" },
    { width: 600, height: 400, depth: 250, delivery: "5 р.д.", price: "31 900,00 ₽" },
    { width: 600, height: 400, depth: 300, delivery: "5 р.д.", price: "33 350,00 ₽" },
    { width: 600, height: 500, depth: 200, delivery: "5 р.д.", price: "33 350,00 ₽" },
    { width: 600, height: 500, depth: 250, delivery: "5 р.д.", price: "34 800,00 ₽" },
    { width: 600, height: 600, depth: 200, delivery: "5 р.д.", price: "36 250,00 ₽" },
    { width: 600, height: 600, depth: 250, delivery: "5 р.д.", price: "37 700,00 ₽" },
    { width: 600, height: 600, depth: 300, delivery: "5 р.д.", price: "39 150,00 ₽" },
    { width: 700, height: 500, depth: 200, delivery: "5 р.д.", price: "36 250,00 ₽" },
    { width: 700, height: 500, depth: 250, delivery: "5 р.д.", price: "37 700,00 ₽" },
    { width: 800, height: 600, depth: 300, delivery: "5 р.д.", price: "44 950,00 ₽" },
    { width: 800, height: 600, depth: 400, delivery: "5 р.д.", price: "49 300,00 ₽" },
    { width: 800, height: 600, depth: 250, delivery: "5 р.д.", price: "43 500,00 ₽" },
    { width: 800, height: 800, depth: 300, delivery: "5 р.д.", price: "52 200,00 ₽" },
    { width: 800, height: 800, depth: 400, delivery: "5 р.д.", price: "56 550,00 ₽" },
    { width: 1000, height: 600, depth: 300, delivery: "5 р.д.", price: "50 750,00 ₽" },
    { width: 1000, height: 600, depth: 400, delivery: "5 р.д.", price: "55 100,00 ₽" },
    { width: 1000, height: 600, depth: 250, delivery: "5 р.д.", price: "49 300,00 ₽" },
    { width: 1000, height: 800, depth: 300, delivery: "5 р.д.", price: "59 450,00 ₽" },
    { width: 1000, height: 800, depth: 400, delivery: "5 р.д.", price: "63 800,00 ₽" },
    { width: 1200, height: 600, depth: 300, delivery: "5 р.д.", price: "56 550,00 ₽" },
    { width: 1200, height: 800, depth: 300, delivery: "5 р.д.", price: "66 700,00 ₽" },
    { width: 1400, height: 600, depth: 300, delivery: "5 р.д.", price: "62 350,00 ₽" },
    { width: 1400, height: 800, depth: 300, delivery: "5 р.д.", price: "73 950,00 ₽" },
    { width: 600, height: 800, depth: 300, delivery: "5 р.д.", price: "58 000,00 ₽" },
    { width: 800, height: 1000, depth: 200, delivery: "5 р.д.", price: "68 150,00 ₽" },
    { width: 800, height: 1000, depth: 300, delivery: "5 р.д.", price: "73 950,00 ₽" },
    { width: 1000, height: 1000, depth: 300, delivery: "5 р.д.", price: "82 650,00 ₽" },
    { width: 1200, height: 1000, depth: 300, delivery: "5 р.д.", price: "91 350,00 ₽" },
    { width: 1200, height: 1200, depth: 300, delivery: "5 р.д.", price: "101 500,00 ₽" },
    { width: 1400, height: 1000, depth: 300, delivery: "5 р.д.", price: "101 500,00 ₽" },
  ];

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
          
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            <div className="min-w-[600px]">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">Ширина, мм</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">Высота, мм</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">Глубина, мм</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">Срок поставки</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item, index) => (
                    <tr 
                      key={`${item.width}-${item.height}-${item.depth}-${index}`}
                      className={`cursor-pointer transition-colors hover:bg-red-50 ${
                        selectedRow === `row-${index}` ? 'bg-red-100' : ''
                      }`}
                      onClick={() => setSelectedRow(selectedRow === `row-${index}` ? null : `row-${index}`)}
                    >
                      <td className="border border-gray-300 px-3 py-2 text-center">{item.width}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">{item.height}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">{item.depth}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToContacts();
                          }}
                          className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                        >
                          ✅ {item.delivery}
                        </button>
                      </td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AisiModelsList;