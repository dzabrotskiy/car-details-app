import { useMemo } from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { CarDetail } from '@pages/CarDetails/constants';
import { ChevronIcon } from '@assets/icons/ChevronIcon';

export function useCarDetailsTableColumns() {
  return useMemo<ColumnDef<CarDetail>[]>(() => {
    return [
      {
        id: 'stateDate',
        header: 'Start Date',
        accessorKey: 'startDate',
        cell: info => info.getValue(),
      },
      {
        id: 'endDate',
        header: 'End Date',
        accessorKey: 'endDate',
        cell: info => info.getValue(),
      },
      {
        id: 'tfo',
        header: 'TFO',
        accessorKey: 'tfo',
        cell: info => info.getValue(),
      },
      {
        id: 'type',
        header: 'Type',
        accessorKey: 'category',
        cell: info => info.getValue(),
      },
      {
        id: 'odometer',
        header: 'Odometer',
        accessorKey: 'odometer',
        cell: info => <span>{`${info.getValue()} KM`}</span>,
      },
      {
        id: 'fuelLevel',
        header: 'Fuel level',
        accessorKey: 'fuel_in',
        cell: info => info.getValue(),
      },
      {
        id: 'car',
        header: 'Car',
        accessorKey: 'car',
        cell: info => info.getValue(),
      },
      {
        id: 'numberPlate',
        header: 'Number plate',
        accessorKey: 'number_plate',
        cell: info => info.getValue(),
      },
      {
        id: 'expand',
        header: '',
        cell: ({ row }) => (
          <div
            style={{
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              transform: row.getIsExpanded()
                ? 'rotate(0deg)'
                : 'rotate(180deg)',
            }}
            onClick={() => row.toggleExpanded(!row.getIsExpanded())}
          >
            <ChevronIcon />
          </div>
        ),
      },
      {
        id: 'notes',
        accessorKey: 'notes',
      },
      {
        id: 'addedPictures',
        accessorKey: 'addedPictures',
      },
    ];
  }, []);
}
