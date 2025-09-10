import React from "react";
import ConverterTableRow from "./ConverterTableRow";
import { converterModelsData } from "./ConverterTableData";

interface ConverterTableProps {
  selectedRow: string | null;
  setSelectedRow: (row: string | null) => void;
  scrollToContacts: () => void;
}

const ConverterTable = ({ 
  selectedRow, 
  setSelectedRow, 
  scrollToContacts 
}: ConverterTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-50">
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">
              Модель
            </th>
            <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">
              Напряжение питания
            </th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">
              Мощность двигателя
            </th>
            <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800 whitespace-nowrap">
              Ток
            </th>
            <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800">
              Тормозной модуль
            </th>
            <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800">
              Фильтр ЭМС
            </th>
            <th className="border border-gray-300 px-2 py-3 text-center font-semibold text-gray-800">
              Срок поставки
            </th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold text-gray-800">
              Стоимость
            </th>
          </tr>
        </thead>
        <tbody>
          {converterModelsData.map((model) => (
            <ConverterTableRow
              key={model.id}
              model={model}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              scrollToContacts={scrollToContacts}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConverterTable;