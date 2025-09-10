import React from "react";
import { ConverterModel } from "./ConverterTableData";

interface ConverterTableRowProps {
  model: ConverterModel;
  selectedRow: string | null;
  setSelectedRow: (row: string | null) => void;
  scrollToContacts: () => void;
}

const ConverterTableRow = ({ 
  model, 
  selectedRow, 
  setSelectedRow, 
  scrollToContacts 
}: ConverterTableRowProps) => {
  const isSelected = selectedRow === model.id;

  return (
    <tr
      className={`cursor-pointer transition-colors hover:bg-red-50 ${
        isSelected ? "bg-red-100" : ""
      }`}
      onClick={() =>
        setSelectedRow(isSelected ? null : model.id)
      }
    >
      <td className="border border-gray-300 px-3 py-2 text-center font-medium whitespace-nowrap">
        {model.model}
      </td>
      {model.voltageRowSpan && (
        <td
          className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap"
          rowSpan={model.voltageRowSpan}
        >
          {model.voltage}
        </td>
      )}
      <td className="border border-gray-300 px-3 py-2 text-center whitespace-nowrap">
        {model.power}
      </td>
      <td className="border border-gray-300 px-2 py-2 text-center whitespace-nowrap">
        {model.current}
      </td>
      <td className="border border-gray-300 px-2 py-2 text-center">
        {model.brakeModule}
      </td>
      <td className="border border-gray-300 px-2 py-2 text-center">
        {model.emcFilter}
      </td>
      <td className="border border-gray-300 px-2 py-2 text-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            scrollToContacts();
          }}
          className="text-red-600 hover:text-red-800 underline cursor-pointer transition-colors"
        >
          Уточнить
        </button>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-center font-semibold whitespace-nowrap">
        {model.price}
      </td>
    </tr>
  );
};

export default ConverterTableRow;