import { ReactNode, useMemo } from 'react';
import styled from 'styled-components';

import { ColorIcon } from '@assets/icons/ColorIcon';
import { EngineIcon } from '@assets/icons/EngineIcon';
import { SeatIcon } from '@assets/icons/SeatIcon';
import { DoorIcon } from '@assets/icons/DoorIcon';
import { TransmissionIcon } from '@assets/icons/TransmissionIcon';
import { GasIcon } from '@assets/icons/GasIcon';
import { CarCategoryIcon } from '@assets/icons/CarCategoryIcon';
import { InsuranceIcon } from '@assets/icons/InsuranceIcon';
import type { Car } from 'types/Car';
import { capitalizeFirstLetter } from '@services/utils/capitalizeFirstLetter';

type Props = {
  car: Car;
};

type Item = {
  icon: ReactNode;
  field: keyof Car;
  value: string | number;
};

export function CarDetailsTable({ car }: Props) {
  const items = useMemo<Item[]>(() => {
    return [
      {
        icon: <ColorIcon />,
        field: 'color',
        value: capitalizeFirstLetter(car.color),
      },
      {
        icon: <EngineIcon />,
        field: 'engine_size',
        value: car.engine_size,
      },
      {
        icon: <SeatIcon />,
        field: 'number_of_seats',
        value: car.number_of_seats,
      },
      {
        icon: <DoorIcon />,
        field: 'number_of_doors',
        value: car.number_of_doors,
      },
      {
        icon: <TransmissionIcon />,
        field: 'transmission_type',
        value: capitalizeFirstLetter(car.transmission_type),
      },
      {
        icon: <CarCategoryIcon />,
        field: 'category',
        value: capitalizeFirstLetter(car.category),
      },
      {
        icon: <GasIcon />,
        field: 'fuel_type',
        value: capitalizeFirstLetter(car.fuel_type),
      },
      {
        icon: <InsuranceIcon />,
        field: 'term',
        value: car.term,
      },
    ];
  }, []);

  return (
    <List>
      {items.map(({ icon, value, field }) => (
        <Item key={field}>
          <IconWrapper>{icon}</IconWrapper>
          {value}
        </Item>
      ))}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #f2f3f5;
  border-radius: 16px;
  background: #fff;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  padding: 20px;
  border: 0 solid #f2f3f5;
  border-bottom-width: 1px;
  border-left-width: 1px;

  &:nth-child(4n-3) {
    border-left-width: 0;
  }

  &:nth-child(6n),
  &:nth-child(7n) {
    border-bottom-width: 0;
  }

  &:nth-child(4n):last-child,
  &:nth-child(4n - 3):nth-last-child(-n + 4) {
    border-bottom-width: 0;
  }
`;

const IconWrapper = styled.div`
  margin-right: 16px;
  max-height: 32px;
`;
