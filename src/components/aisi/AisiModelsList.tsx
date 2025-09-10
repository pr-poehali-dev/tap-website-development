import React from "react";
import AisiTable from "./AisiTable";
import { mainTableData, doubleDoorTableData, aisi316TableData } from "./AisiTableData";

interface AisiModelsListProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

interface Aisi316ModelsListProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const AisiModelsList = ({ isExpanded, setIsExpanded }: AisiModelsListProps) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);

  const scrollToContacts = () => {
    const contactsSection = document.querySelector('[data-section="contacts"]');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 -mx-4 sm:mx-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">
          Таблица корпусов AISI304
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
          <p className="text-gray-600 text-sm">
            Стоимость указана с НДС. Не является публичной офертой.
          </p>

          <AisiTable
            data={mainTableData}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            scrollToContacts={scrollToContacts}
            tablePrefix="main"
          />

          <div className="mt-8">
            <h4 className="text-lg font-bold text-gray-800 mb-4">
              Таблица корпусов AISI304 с двумя дверями
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Стоимость указана с НДС. Не является публичной офертой.
            </p>
            
            <AisiTable
              data={doubleDoorTableData}
              selectedRow={selectedRow}
              setSelectedRow={setSelectedRow}
              scrollToContacts={scrollToContacts}
              tablePrefix="double-door"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AisiModelsList;

const Aisi316ModelsList = ({ isExpanded, setIsExpanded }: Aisi316ModelsListProps) => {
  const [selectedRow, setSelectedRow] = React.useState<string | null>(null);

  const scrollToContacts = () => {
    const contactsSection = document.querySelector('[data-section="contacts"]');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 -mx-4 sm:mx-0 mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">
          Таблица корпусов AISI316
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
          <p className="text-gray-600 text-sm">
            Стоимость указана с НДС. Не является публичной офертой.
          </p>

          <AisiTable
            data={aisi316TableData}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            scrollToContacts={scrollToContacts}
            tablePrefix="aisi316"
          />
        </div>
      )}
    </div>
  );
};

export { Aisi316ModelsList };