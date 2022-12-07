import { Fragment, useEffect, useMemo, useState } from 'react';
import type { Car } from 'types/Car';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { Content } from '@layouts/Content';
import { Card } from '@components/Card';
import { Spacer } from '@components/Spacer';
import { getCarDetails } from '@services/api';
import bmwImage from '@assets/images/bmw.png';
import { CarCharacteristics } from '@widgets/CarCharacteristics';
import { CarDetailsTable } from '@widgets/CarDetailsTable';
import { Table } from '@components/Table';
import { Button } from '@components/Button';
import { CarDetailsModal, Image } from '@widgets/CarDetailsModal';
import { Divider } from '@components/Divider';
import { useCarDetailsTableColumns } from '@hooks/useCarDetailsTableColumns';

import * as Styled from './CarDetails.sc';
import { CarDetail, carsDetails } from './constants';

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
        columnVisibility={{
          notes: false,
          addedPictures: false,
        }}
        expandableRender={row => (
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
      />
      <CarDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Spacer height={100} />
    </Content>
  );
}
