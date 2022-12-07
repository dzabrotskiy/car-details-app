import { Fragment, useEffect, useMemo, useState } from 'react';
import type { Car } from 'types/Car';

import { Content } from '@layouts/Content';
import { Card } from '@components/Card';
import { Spacer } from '@components/Spacer';
import { getCarDetails } from '@services/api';
import bmwImage from '@assets/images/bmw.png';
import { CarCharacteristics } from '@pages/CarDetails/CarCharacteristics';
import { CarDetailsTable } from '@pages/CarDetails/CarDetailsTable';
import { Table } from '@components/Table';
import { Button } from '@components/Button';
import { CarDetailsModal } from '@pages/CarDetails/CarDetailsModal';

import * as Styled from './CarDetails.sc';
import { CarDetail, carsDetails } from './constants';
import { useCarDetailsTableColumns } from './useCarDetailsTableColumns';

export function CarDetails() {
  const [car, setCar] = useState<Car>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const asyncEffect = async () => {
      const carResponse = await getCarDetails();
      setCar(carResponse.car);
    };
    asyncEffect();
  }, []);

  const columns = useCarDetailsTableColumns();

  const data = useMemo(() => {
    return carsDetails.map(carDetail => ({
      ...carDetail,
      subRow: carDetail,
    }));
  }, [carsDetails]);

  return (
    <Content>
      <Spacer height={171} />
      <Card>
        <Styled.CarDetailsCard>
          <Styled.CarImageWrapper>
            <img src={bmwImage} alt="car image" />
          </Styled.CarImageWrapper>
          <Spacer width={48} />
          <Styled.CarDetailsColumn>
            {car && (
              <Fragment>
                <CarCharacteristics car={car} />
                <CarDetailsTable car={car} />
              </Fragment>
            )}
          </Styled.CarDetailsColumn>
        </Styled.CarDetailsCard>
      </Card>
      <Spacer height={132} />
      <Table<CarDetail>
        data={data}
        columns={columns}
        title="Car details"
        actionButton={
          <Button onClick={() => setIsModalOpen(true)}>Replacement Car</Button>
        }
      />
      <CarDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Spacer height={100} />
    </Content>
  );
}
