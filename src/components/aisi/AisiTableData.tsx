// Определение типов
export interface AisiTableItem {
  width: number;
  height: number;
  depth: number;
  delivery: string;
  price: string;
}

// Экспорт данных таблиц
export { mainTableData } from '@/components/aisi/data/MainTableData';
export { doubleDoorTableData } from '@/components/aisi/data/DoubleDoorTableData';
export { aisi316TableData } from '@/components/aisi/data/Aisi316TableData';
export { aisi316DoubleDoorTableData } from '@/components/aisi/data/Aisi316DoubleDoorTableData';