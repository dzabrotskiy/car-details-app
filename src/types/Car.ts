export type Car = {
  id: number;
  make: string;
  model: string;
  trim: string;
  year: number;
  number_plate: string;
  fuel_in: string;
  fuel_out: string;
  odometer_in: number;
  odometer_out: number;
  color: string;
  engine_size: string;
  number_of_seats: number;
  number_of_doors: number;
  transmission_type: string;
  category: string;
  fuel_type: string;
  term: number;
};

export type CarResponse = {
  car: Car;
};
