import React from "react";
import { AisiTableItem } from "./AisiTableData";

interface AisiTableProps {
  data: AisiTableItem[];
  selectedRow: string | null;
  setSelectedRow: (row: string | null) => void;
  scrollToContacts: () => void;
  tablePrefix: string;
}

const AisiTable = ({ 
  data, 
  selectedRow, 
  setSelectedRow, 
  scrollToContacts,
  tablePrefix 
}: AisiTableProps) => {
  return (
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="min-w-full px-4 sm:px-0">
        <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-1 sm:px-3 py-2 sm:py-3 text-center font-semibold text-gray-800">
                Ш, мм
              </th>
              <th className="border border-gray-300 px-1 sm:px-3 py-2 sm:py-3 text-center font-semibold text-gray-800">
                В, мм
              </th>
              <th className="border border-gray-300 px-1 sm:px-3 py-2 sm:py-3 text-center font-semibold text-gray-800">
                Г, мм
              </th>
              <th className="border border-gray-300 px-1 sm:px-3 py-2 sm:py-3 text-center font-semibold text-gray-800">
                Поставка
              </th>
              <th className="border border-gray-300 px-1 sm:px-3 py-2 sm:py-3 text-center font-semibold text-gray-800">
                Цена
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={`${tablePrefix}-${item.width}-${item.height}-${item.depth}-${index}`}
                className={`cursor-pointer transition-colors hover:bg-red-50 ${
                  selectedRow === `${tablePrefix}-row-${index}` ? "bg-red-100" : ""
                }`}
                onClick={() =>
                  setSelectedRow(
                    selectedRow === `${tablePrefix}-row-${index}`
                      ? null
                      : `${tablePrefix}-row-${index}`,
                  )
                }
              >
                <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center">
                  {item.width}
                </td>
                <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center">
                  {item.height}
                </td>
                <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center">
                  {item.depth}
                </td>
                <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToContacts();
                    }}
                    className="text-red-600 hover:text-red-800 font-semibold cursor-pointer text-xs sm:text-sm"
                  >
                    <span className="hidden sm:inline">
                      ✅ {item.delivery}
                    </span>
                    <span className="sm:hidden">✅ 5р.д.</span>
                  </button>
                </td>
                <td className="border border-gray-300 px-1 sm:px-3 py-1 sm:py-2 text-center font-semibold">
                  <span className="hidden sm:inline">{item.price}</span>
                  <span className="sm:hidden">
                    {item.price.replace(",00 ", "")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AisiTable;