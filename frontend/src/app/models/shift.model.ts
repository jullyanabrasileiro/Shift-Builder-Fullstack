export interface Shift {
  totalProfit?: string | number;
  pricePerHour?: string | number;
  workerName?: any;
  id?: number;
  date: string;
  startTime: string;
  endTime: string;
  wage: number;
  place: string;
  shiftname: string;
  comments?: string;
  hourlyRate?: number;  // Add hourlyRate as optional
  workplace?: string;   // Add workplace as optional
}
