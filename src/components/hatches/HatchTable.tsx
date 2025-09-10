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
      <div className="-mx-2 md:mx-0 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[22%] md:w-auto">
                Рабочее<br className="md:hidden"/><span className="hidden md:inline"> </span>давление
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[13%] md:w-auto">
                Кронштейн
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[35%] md:w-auto">
                Срок<br className="md:hidden"/><span className="hidden md:inline"> </span>поставки
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[30%] md:w-auto">
                Стоимость
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-04-no' ? null : 'oval-04-no')}
            >
              <td className={`border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm ${
                selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
              }`} rowSpan={2}>0.4 МПа</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">Нет</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">23 800,00 ₽</span>
                <span className="sm:hidden">23 800,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-04-no' || selectedRow === 'oval-04-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-04-yes' ? null : 'oval-04-yes')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">Да</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">26 600,00 ₽</span>
                <span className="sm:hidden">26 600,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-06-no' ? null : 'oval-06-no')}
            >
              <td className={`border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`} rowSpan={2}>0.6 МПа</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">Нет</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm"
                >
                  <span className="hidden sm:inline">🔄 Под заказ</span>
                  <span className="sm:hidden">🔄Под заказ</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">26 600,00 ₽</span>
                <span className="sm:hidden">26 600,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'oval-06-yes' ? null : 'oval-06-yes')}
            >
              <td className={`border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}>Да</td>
              <td className={`border border-gray-300 px-1 md:px-3 py-2 text-center ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}>
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm"
                >
                  <span className="hidden sm:inline">🔄 Под заказ</span>
                  <span className="sm:hidden">🔄Под заказ</span>
                </button>
              </td>
              <td className={`border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm ${
                selectedRow === 'oval-06-no' || selectedRow === 'oval-06-yes' ? 'bg-red-100' : ''
              }`}>
                <span className="hidden sm:inline">29 400,00 ₽</span>
                <span className="sm:hidden">29 400,00₽</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  // Ring hatch table
  if (hatchId === 2) {
    return (
      <div className="-mx-2 md:mx-0 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[16%] md:w-auto">
                Материал
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[12%] md:w-auto">
                Диаметр
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[18%] md:w-auto">
                Высота<br className="md:hidden"/><span className="hidden md:inline"> </span>горловины
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[28%] md:w-auto">
                Срок<br className="md:hidden"/><span className="hidden md:inline"> </span>поставки
              </th>
              <th className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm w-[26%] md:w-auto">
                Стоимость
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn400-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn400-100' ? null : 'ring-aisi304-dn400-100')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm" rowSpan={6}>AISI304</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm" rowSpan={2}>DN400</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">100 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅ В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">11 620,00 ₽</span>
                <span className="sm:hidden">11 620,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn400-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn400-150' ? null : 'ring-aisi304-dn400-150')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">150 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅ В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">13 580,00 ₽</span>
                <span className="sm:hidden">13 580,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-100' ? null : 'ring-aisi304-dn450-100')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm" rowSpan={4}>DN450</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">100 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅ В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">12 600,00 ₽</span>
                <span className="sm:hidden">12 600,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-150' ? null : 'ring-aisi304-dn450-150')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">150 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅ В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">14 000,00 ₽</span>
                <span className="sm:hidden">14 000,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-300' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-300' ? null : 'ring-aisi304-dn450-300')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">300 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅ В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">19 600,00 ₽</span>
                <span className="sm:hidden">19 600,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi304-dn450-400' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi304-dn450-400' ? null : 'ring-aisi304-dn450-400')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">400 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">✅ В наличии</span>
                  <span className="sm:hidden">✅ В наличии</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">22 400,00 ₽</span>
                <span className="sm:hidden">22 400,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn400-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn400-100' ? null : 'ring-aisi316-dn400-100')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm" rowSpan={4}>AISI316</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm" rowSpan={2}>DN400</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">100 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">🔄 Под заказ</span>
                  <span className="sm:hidden">🔄 Под заказ</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">17 780,00 ₽</span>
                <span className="sm:hidden">17 780,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn400-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn400-150' ? null : 'ring-aisi316-dn400-150')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">150 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">🔄 Под заказ</span>
                  <span className="sm:hidden">🔄 Под заказ</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">19 740,00 ₽</span>
                <span className="sm:hidden">19 740,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn450-100' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn450-100' ? null : 'ring-aisi316-dn450-100')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm" rowSpan={2}>DN450</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">100 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">🔄 Под заказ</span>
                  <span className="sm:hidden">🔄 Под заказ</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">21 980,00 ₽</span>
                <span className="sm:hidden">21 980,00₽</span>
              </td>
            </tr>
            <tr 
              className={`cursor-pointer transition-colors hover:bg-red-50 ${
                selectedRow === 'ring-aisi316-dn450-150' ? 'bg-red-100' : ''
              }`}
              onClick={() => onRowSelect(selectedRow === 'ring-aisi316-dn450-150' ? null : 'ring-aisi316-dn450-150')}
            >
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">150 мм</td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center text-xs md:text-sm">
                <button
                  onClick={onContactClick}
                  className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs md:text-sm whitespace-nowrap"
                >
                  <span className="hidden sm:inline">🔄 Под заказ</span>
                  <span className="sm:hidden">🔄 Под заказ</span>
                </button>
              </td>
              <td className="border border-gray-300 px-1 md:px-3 py-2 text-center font-semibold text-xs md:text-sm">
                <span className="hidden sm:inline">22 820,00 ₽</span>
                <span className="sm:hidden">22 820,00₽</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return null;
};

export default HatchTable;