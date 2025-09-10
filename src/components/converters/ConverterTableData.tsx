export interface ConverterModel {
  id: string;
  model: string;
  voltage: string;
  power: string;
  current: string;
  brakeModule: string;
  emcFilter: string;
  price: string;
  voltageRowSpan?: number;
}

export const converterModelsData: ConverterModel[] = [
  // Single Phase 1x220 VAC
  {
    id: "AD30-2SD40",
    model: "AD30-2SD40",
    voltage: "1x220 VAC",
    power: "0,4 кВт",
    current: "2,3 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "6 187,50 ₽",
    voltageRowSpan: 4,
  },
  {
    id: "AD30-2SD75",
    model: "AD30-2SD75",
    voltage: "1x220 VAC",
    power: "0,75 кВт",
    current: "4,0 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "6 765,00 ₽",
  },
  {
    id: "AD30-2S1D5",
    model: "AD30-2S1D5",
    voltage: "1x220 VAC",
    power: "1,5 кВт",
    current: "7,0 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "7 095,00 ₽",
  },
  {
    id: "AD30-2S2D2",
    model: "AD30-2S2D2",
    voltage: "1x220 VAC",
    power: "2,2 кВт",
    current: "9,6 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "9 322,50 ₽",
  },
  // Three Phase 3x380 VAC
  {
    id: "AD30-4TD75H/1D5L",
    model: "AD30-4TD75H/1D5L",
    voltage: "3x380 VAC",
    power: "0,75/1,5 кВт",
    current: "2,1/3,8 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "8 662,50 ₽",
    voltageRowSpan: 8,
  },
  {
    id: "AD30-4T1D5H/2D2L",
    model: "AD30-4T1D5H/2D2L",
    voltage: "3x380 VAC",
    power: "1,5/2,2 кВт",
    current: "3,8/5,1 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "9 487,50 ₽",
  },
  {
    id: "AD30-4T2D2H/4D0L",
    model: "AD30-4T2D2H/4D0L",
    voltage: "3x380 VAC",
    power: "2,2/4 кВт",
    current: "5,1/9 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "9 982,50 ₽",
  },
  {
    id: "AD30-4T4D0H/5D5L",
    model: "AD30-4T4D0H/5D5L",
    voltage: "3x380 VAC",
    power: "4/5,5 кВт",
    current: "9/13 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "10 725,00 ₽",
  },
  {
    id: "AD30-4T5DH/7D5L",
    model: "AD30-4T5DH/7D5L",
    voltage: "3x380 VAC",
    power: "5,5/7,5 кВт",
    current: "13/17 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "13 035,00 ₽",
  },
  {
    id: "AD30-4T7D5H/011L",
    model: "AD30-4T7D5H/011L",
    voltage: "3x380 VAC",
    power: "7,5/11 кВт",
    current: "17/25 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "18 067,50 ₽",
  },
  {
    id: "AD30-4T011H/015L",
    model: "AD30-4T011H/015L",
    voltage: "3x380 VAC",
    power: "11/15 кВт",
    current: "25/32 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "24 255,00 ₽",
  },
  {
    id: "AD30-4T015H/18DL",
    model: "AD30-4T015H/18DL",
    voltage: "3x380 VAC",
    power: "15/18,5 кВт",
    current: "32/37 А",
    brakeModule: "Да",
    emcFilter: "Да",
    price: "32 092,50 ₽",
  },
];