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
} from '@tanstack/react-table';

import { Divider } from '@components/Divider';

import * as Styled from './Table.sc';
import { Image } from '@pages/CarDetails/CarDetailsModal';
import { CarDetail } from '@pages/CarDetails/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { DeleteIcon } from '@assets/icons/DeleteIcon';

type Props<T = unknown> = {
  title?: string;
  actionButton?: ReactNode;
  data: T[];
  columns: ColumnDef<T>[];
};

export function Table<T = unknown>({
  title,
  actionButton,
  data,
  columns,
}: Props<T>) {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
      columnVisibility: {
        notes: false,
        addedPictures: false,
      },
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
            {row.getIsExpanded() && (
              <Fragment>
                <Divider />
                <Styled.ExpandedContainer>
                  <div style={{ padding: 24 }}>
                    <Styled.Subtitle>Added pictures:</Styled.Subtitle>
                    <div>
                      <Swiper
                        spaceBetween={12}
                        slidesPerView={5}
                        modules={[Navigation]}
                        navigation={true}
                      >
                        {row
                          .getValue<CarDetail['addedPictures']>('addedPictures')
                          ?.map(picture => (
                            <SwiperSlide key={picture}>
                              <div>
                                <Image src={picture} />
                              </div>
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </div>
                  </div>
                  <div style={{ padding: 24 }}>
                    <Styled.Subtitle>Notes</Styled.Subtitle>
                    {row.getValue('notes')}
                  </div>
                </Styled.ExpandedContainer>
              </Fragment>
            )}
          </Styled.Row>
        ))}
      </Styled.TableContainer>
    </div>
  );
}
