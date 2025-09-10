import React from "react";
import ConverterTable from "./ConverterTable";

interface ModelsListProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const ModelsList = ({ isExpanded, setIsExpanded }: ModelsListProps) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);

  const scrollToContacts = () => {
    const contactsSection = document.querySelector('[data-section="contacts"]');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">
          Таблица моделей AD30
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">
            {isExpanded ? "Скрыть" : "Показать"}
          </span>
          <span
            className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          >
            ▼
          </span>
        </div>
      </button>

      {isExpanded && (
        <div className="space-y-4">
          <p className="text-gray-600">
            Стоимость указана с НДС. Не является публичной офертой.
          </p>

          <ConverterTable
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            scrollToContacts={scrollToContacts}
          />
        </div>
      )}
    </div>
  );
};

export default ModelsList;