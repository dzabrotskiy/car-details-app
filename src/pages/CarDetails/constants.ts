import { Car } from 'types/Car';

export type CarDetail = {
  startDate: string;
  endDate: string;
  addedPictures: string[];
  notes: string;
  tfo: string;
  odometer: number;
  car: string;
} & Partial<Car>;

export const carsDetails: CarDetail[] = [
  {
    startDate: '18-Jun-2022',
    endDate: '18-Jun-2022',
    tfo: 'AED 200',
    category: 'Primary car',
    odometer: 1500,
    fuel_in: '5/8',
    car: 'BMW 3 series',
    number_plate: 'A 11345',
    addedPictures: [
      'https://appcarasti.com/public/uploads/vehicle/Untitled%20design%20%2812%29.png',
      'https://appcarasti.com/public/uploads/vehicle/Tayis%202021%20S.png',
      'https://carasti-operations.s3.ap-south-1.amazonaws.com/user-documents/1664695051MG5.png',
    ],
    notes: 'Lorem  Ipsum simply just a dummy text',
  },
  {
    startDate: '18-Jun-2022',
    endDate: '18-Jun-2022',
    tfo: 'AED 200',
    category: 'Replacement',
    odometer: 1500,
    fuel_in: '5/8',
    car: 'Audi SQ5',
    number_plate: 'D 112333',
    addedPictures: [
      'https://carasti-operations.s3.ap-south-1.amazonaws.com/user-documents/1664695051MG5.png',
      'https://appcarasti.com/public/uploads/vehicle/Untitled%20design%20%2812%29.png',
      'https://appcarasti.com/public/uploads/vehicle/Tayis%202021%20S.png',
      'https://carasti-operations.s3.ap-south-1.amazonaws.com/user-documents/1664695051MG5.png',
      'https://appcarasti.com/public/uploads/vehicle/Tayis%202021%20S.png',
    ],
    notes: 'N/A',
  },
  {
    startDate: '21-Sep-2022',
    endDate: '23-Sep-2022',
    tfo: 'AED 200',
    category: 'Primary car (Returned)',
    odometer: 1800,
    fuel_in: '0/8',
    car: 'BMW 3 series',
    number_plate: 'A 11345',
    addedPictures: [
      'https://carasti-operations.s3.ap-south-1.amazonaws.com/user-documents/1664695051MG5.png',
      'https://appcarasti.com/public/uploads/vehicle/Untitled%20design%20%2812%29.png',
      'https://appcarasti.com/public/uploads/vehicle/Tayis%202021%20S.png',
    ],
    notes: 'N/A',
  },
];
