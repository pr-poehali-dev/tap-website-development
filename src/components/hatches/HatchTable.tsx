import React from 'react';

interface HatchTableProps {
  hatchId: number;
  selectedRow: string | null;
  onRowSelect: (rowId: string | null) => void;
  onContactClick: () => void;
}

const HatchTable: React.FC<HatchTableProps> = ({ 
  hatchId, 
  selectedRow, 
  onRowSelect,
  onContactClick 
}) => {
  // Oval hatch table
  if (hatchId === 1) {
    return (
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm min-w-[500px] md:min-w-0">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Рабочее<br className="md:hidden"/><span className="hidden md:inline"> </span>давление</th>
              <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Кронштейн</th>
              <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Срок<br className="md:hidden"/><span className="hidden md:inline"> </span>поставки</th>
              <th className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-04-no' ? null : 'oval-04-no')}
            >
              <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center ${
                selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
              }`} rowSpan={2}>0.4 МПа</td>
              <td className="border border-gray-300 px-2 md:px-3 py-2 text-center">Нет</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">23 800,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-04-yes' ? null : 'oval-04-yes')}
            >
              <td className="border border-gray-300 px-3 py-2 text-center">Да</td>
              <td className="border border-gray-300 px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">26 600,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-06-no' ? null : 'oval-06-no')}
            >
              <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`} rowSpan={2}>0.6 МПа</td>
              <td className="border border-gray-300 px-2 md:px-3 py-2 text-center">Нет</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold">26 600,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-06-yes' ? null : 'oval-06-yes')}
            >
              <td className={`border border-gray-300 px-3 py-2 text-center ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}>Да</td>
              <td className={`border border-gray-300 px-3 py-2 text-center ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}>
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className={`border border-gray-300 px-2 md:px-3 py-2 text-center font-semibold ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}>29 400,00 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // Ring hatch table
  if (hatchId === 2) {
    return (
      <div className="overflow-x-auto -mx-2 md:mx-0">
        <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm min-w-[600px] md:min-w-0">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Материал</th>
              <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Диаметр</th>
              <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Высота<br className="md:hidden"/><span className="hidden md:inline"> </span>горловины</th>
              <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Срок<br className="md:hidden"/><span className="hidden md:inline"> </span>поставки</th>
              <th className="border border-gray-300 px-1 md:px-2 py-2 text-center font-semibold">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn400-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn400-100' ? null : 'ring-aisi304-dn400-100')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={6}>AISI304</td>
              <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={2}>DN400</td>
              <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">11 620,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn400-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn400-150' ? null : 'ring-aisi304-dn400-150')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">13 580,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-100' ? null : 'ring-aisi304-dn450-100')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={4}>DN450</td>
              <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">12 600,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-150' ? null : 'ring-aisi304-dn450-150')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">14 000,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-300' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-300' ? null : 'ring-aisi304-dn450-300')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center">300 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">19 600,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-400' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-400' ? null : 'ring-aisi304-dn450-400')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center">400 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  В наличии
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">22 400,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn400-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn400-100' ? null : 'ring-aisi316-dn400-100')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={4}>AISI316</td>
              <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={2}>DN400</td>
              <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  Под заказ
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">17 780,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn400-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn400-150' ? null : 'ring-aisi316-dn400-150')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  Под заказ
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">19 740,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn450-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn450-100' ? null : 'ring-aisi316-dn450-100')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center" rowSpan={2}>DN450</td>
              <td className="border border-gray-300 px-2 py-2 text-center">100 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  Под заказ
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">21 980,00 ₽</td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn450-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn450-150' ? null : 'ring-aisi316-dn450-150')}
            >
              <td className="border border-gray-300 px-2 py-2 text-center">150 мм</td>
              <td className="border border-gray-300 px-2 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                >
                  Под заказ
                </button>
              </td>
              <td className="border border-gray-300 px-2 py-2 text-center font-semibold">22 820,00 ₽</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default HatchTable;