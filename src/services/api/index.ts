import type { CarResponse } from 'types/Car';

import carDetails from './mock.json';

export function getCarDetails(): Promise<CarResponse> {
  // api call simulation
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(carDetails);
    }, 100);
  });
}
