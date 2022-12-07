import type { Car } from 'types/Car';

import styled from 'styled-components';
import { useMemo } from 'react';

type Props = {
  car: Car;
};

type Item = {
  label: string;
  value: string | number;
};

type Rows = Item[][];

export function CarCharacteristics({ car }: Props) {
  const rows = useMemo<Rows>(() => {
    return [
      [
        { label: 'Make', value: car.make },
        { label: 'Trim', value: car.trim },
        { label: 'Plate number', value: car.number_plate },
        { label: 'Fuel in', value: car.fuel_in },
        { label: 'Fuel out', value: car.fuel_out },
      ],
      [
        { label: 'Model', value: car.model },
        { label: 'Year', value: car.year },
        { label: 'Car ID', value: car.id },
        { label: 'Odometer in', value: car.odometer_in },
        { label: 'Odometer out', value: car.odometer_out },
      ],
    ];
  }, [car]);

  return (
    <Table>
      <tbody>
        {rows.map(row => (
          <tr>
            {row.map(({ label, value }) => (
              <StyledTd>
                <div>
                  <Label>{label}</Label>
                  <Value>{value}</Value>
                </div>
              </StyledTd>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 32px;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #99a5b1;
`;

const Value = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #3e4751;
`;

const StyledTd = styled.td`
  width: 20%;
  padding-left: 20px;
`;
