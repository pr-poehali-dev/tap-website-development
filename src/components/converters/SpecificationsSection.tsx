import React from 'react';

interface SpecificationsSectionProps {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}

const SpecificationsSection = ({ isExpanded, setIsExpanded }: SpecificationsSectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left mb-4 hover:bg-gray-50 p-2 rounded min-h-[60px]"
      >
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 flex-1 pr-2">Характеристики</h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs sm:text-sm text-gray-600 hidden sm:inline">{isExpanded ? 'Скрыть' : 'Показать'}</span>
          <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-3 bg-gray-100 font-semibold text-left">Параметры</th>
                  <th className="border border-gray-300 px-4 py-3 bg-gray-100 font-semibold text-left">Значение</th>
                </tr>
              </thead>
              <tbody>
                {/* Входные характеристики */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-blue-50 text-center" rowSpan={3}>Входные<br/>характеристики</td>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Напряжение</td>
                  <td className="border border-gray-300 px-4 py-3">1 фаза 220-240 В +15%÷-20%<br/>3 фазы 380-440 В +15%÷-20%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Частота</td>
                  <td className="border border-gray-300 px-4 py-3">50/60 Гц±5%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Дисбаланс</td>
                  <td className="border border-gray-300 px-4 py-3">3%</td>
                </tr>
                
                {/* Выходные характеристики */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-green-50 text-center" rowSpan={3}>Выходные<br/>характеристики</td>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Напряжение</td>
                  <td className="border border-gray-300 px-4 py-3">3 фазы, 0-100% входного напряжения</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Частота</td>
                  <td className="border border-gray-300 px-4 py-3">0-1200 Гц (V/f)<br/>0-600 Гц (Векторный)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Метод управления</td>
                  <td className="border border-gray-300 px-4 py-3">V/f, Векторный</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Двигатель</td>
                  <td className="border border-gray-300 px-4 py-3">Асинхронный</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Пусковой момент</td>
                  <td className="border border-gray-300 px-4 py-3">0,5 Гц 150% (V/f)<br/>0,25 Гц 180% (Векторный)</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Перегрузочная способность</td>
                  <td className="border border-gray-300 px-4 py-3">Нормальный режим: 150% 60 сек, 180% 5 сек<br/>Легкий режим (если поддерживается моделью): 120% 60 сек, 150% 5 сек</td>
                </tr>
                
                {/* Характеристики управления */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-yellow-50 text-center" rowSpan={4}>Характеристики<br/>управления</td>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Частота ШИМ</td>
                  <td className="border border-gray-300 px-4 py-3">0,5-16 кГц</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Разрешение по скорости</td>
                  <td className="border border-gray-300 px-4 py-3">Дискретное: 0,01 Гц; аналоговое: 0,1% от максимального значения</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Погрешность по скорости в открытом контуре скорости</td>
                  <td className="border border-gray-300 px-4 py-3">±0,5% от номинальной скорости (V/f)<br/>±0,2% от номинальной скорости (Векторный)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Источник команд</td>
                  <td className="border border-gray-300 px-4 py-3">Пульт управления, дискретные входы, последовательная связь</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Источник задания</td>
                  <td className="border border-gray-300 px-4 py-3">Пульт управления, аналоговый вход, последовательная связь, фиксированные значения задания, простой ПЛК, выход ПИД-регулятора</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Задание разгона / замедления</td>
                  <td className="border border-gray-300 px-4 py-3">4 набора задания разгона / замедления, диапазон: 0,00-30000 сек</td>
                </tr>
                
                {/* Основные функции */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-purple-50" colSpan={2}>Основные функции</td>
                  <td className="border border-gray-300 px-4 py-3">ПИД-регулятор, спящий режим, функция простого ПЛК для работы по циклограмме скорость-время, задание 16 предустановленных скоростей, функция качания частоты (воблинг), функция заданной длины, таймер, задание задержки вкл/выкл, дискретных выходов, задание задержки реакции на сигналы дискретных входов, торможение двигателя постоянным током, автоматическое усиление момента, автоматическая стабилизация выходного напряжения, компенсация скольжения, точковый режим, подвод вращающегося двигателя, общая шина DC, два набора параметров двигателя, пожарный режим</td>
                </tr>
                
                {/* Функции управления */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-orange-50" colSpan={2}>Функции управления</td>
                  <td className="border border-gray-300 px-4 py-3">Многоступенчатое управление скоростью с помощью клемм управления или функции ПЛК, S-образные кривые разгона/замедления, управление моментом, счетчик, ПИД-регулятор, толчковый режим (JOG) и т. д.</td>
                </tr>
                
                {/* Функции защиты */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-red-50" colSpan={2}>Функции защиты</td>
                  <td className="border border-gray-300 px-4 py-3">Перенапряжение, пониженное напряжение, перегрузка по току, перегрев, КЗ на выходе, ошибка заземления, потеря фазы питания или двигателя, потеря сигнала ОС, внешняя ошибка</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Уровень защиты</td>
                  <td className="border border-gray-300 px-4 py-3">IP20</td>
                </tr>
                
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium" colSpan={2}>Защитное покрытие плат</td>
                  <td className="border border-gray-300 px-4 py-3">3С3</td>
                </tr>
                
                {/* Условия эксплуатации */}
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-semibold bg-cyan-50 text-center" rowSpan={5}>Условия<br/>эксплуатации</td>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Рабочая температура</td>
                  <td className="border border-gray-300 px-4 py-3">Рабочий диапазон: -10~50°С,<br/>номинальный ток до 40°С, выше – со снижением характеристик</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Влажность</td>
                  <td className="border border-gray-300 px-4 py-3">5%-85% (без образования конденсата до 95%)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Вибрации</td>
                  <td className="border border-gray-300 px-4 py-3">0,6g</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Высота установки</td>
                  <td className="border border-gray-300 px-4 py-3">1000 м, от 1000 до 2000 м со снижением номинальных характеристик</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Длина моторного кабеля</td>
                  <td className="border border-gray-300 px-4 py-3">Экранированный кабель: до 50 м; неэкранированный кабель: до 100 м</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificationsSection;