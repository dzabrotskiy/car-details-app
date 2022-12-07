import { Fragment, ReactNode, useState } from 'react';
import {
  ExpandedState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  ColumnDef,
  flexRender,
  Row,
  VisibilityState,
} from '@tanstack/react-table';

import * as Styled from './Table.sc';

type Props<T = unknown> = {
  title?: string;
  actionButton?: ReactNode;
  data: T[];
  columns: ColumnDef<T>[];
  expandableRender?: (row: Row<T>) => ReactNode;
  columnVisibility?: VisibilityState;
};

export function Table<T = unknown>({
  title,
  actionButton,
  data,
  columns,
  expandableRender,
  columnVisibility,
}: Props<T>) {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      columnVisibility,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div>
      <Styled.TableHeader>
        <Styled.Title>{title}</Styled.Title>
        {actionButton}
      </Styled.TableHeader>
      <Styled.TableContainer>
        <Styled.Header>
          {table.getHeaderGroups().map(headerGroup => (
            <Fragment key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Styled.Th key={header.id} colSpan={header.colSpan}>
                  <div>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </div>
                </Styled.Th>
              ))}
            </Fragment>
          ))}
        </Styled.Header>
        {table.getRowModel().rows.map(row => (
          <Styled.Row key={row.id}>
            <Styled.RowGrid>
              {row.getVisibleCells().map(cell => {
                return (
                  <Styled.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Styled.Cell>
                );
              })}
            </Styled.RowGrid>
            {row.getIsExpanded() && expandableRender?.(row)}
          </Styled.Row>
        ))}
      </Styled.TableContainer>
    </div>
  );
}
