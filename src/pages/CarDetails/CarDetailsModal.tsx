import { useController, useForm } from 'react-hook-form';
import { useCallback } from 'react';
import showToast from 'react-hot-toast';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { Modal, ModalProps } from '@components/Modal';
import { Button } from '@components/Button';
import { Field } from '@components/Field';
import { Input } from '@components/Input';
import { Select } from '@components/Select';
import { Upload } from '@components/Upload';
import { Textarea } from '@components/Textarea';
import { IconButton } from '@components/IconButton';
import { DeleteIcon } from '@assets/icons/DeleteIcon';
import { Grid } from '@components/Grid';

type Props = ModalProps;

type CarDetailsForm = {
  numberPlate: string;
  fuelLevel: string;
  odometer: string;
  images: File[];
  notes: string;
};

export function CarDetailsModal({ isOpen, onClose }: Props) {
  const { register, handleSubmit, control, setValue } =
    useForm<CarDetailsForm>();

  const onSubmit = useCallback(async (data: CarDetailsForm) => {
    showToast.loading('Saving...', {
      duration: 1000,
    });
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
    showToast.success('Saved!');
    onClose?.();
  }, []);

  const { field: images } = useController({
    control,
    name: 'images',
  });

  const removeImage = useCallback(
    (index: number) => {
      images.value.splice(index, 1);
      setValue('images', images.value);
    },
    [images],
  );

  return (
    <Modal
      title="Replacement car details"
      isOpen={isOpen}
      onClose={onClose}
      actions={[
        <Button key="save" type="submit" onClick={handleSubmit(onSubmit)}>
          Save
        </Button>,
      ]}
    >
      <Grid>
        <Field label="Number plate:">
          <Input {...register('numberPlate')} />
        </Field>
        <Field label="Fuel level:">
          <Select
            options={[
              { label: '1/5', value: '1/5' },
              { label: '2/5', value: '2/5' },
              { label: '3/5', value: '3/5' },
              { label: '4/5', value: '4/5' },
              { label: '5/5', value: '5/5' },
            ]}
            {...register('fuelLevel')}
          />
        </Field>
      </Grid>
      <Grid>
        <Field label="Odometer:">
          <Input {...register('odometer')} />
        </Field>
      </Grid>
      <Field label="Images:">
        <Upload onChange={files => images.onChange(files)} />
        <Swiper
          className={images?.value?.length > 8 ? 'with-navigation' : undefined}
          spaceBetween={12}
          modules={[Navigation]}
          navigation={true}
        >
          {images?.value?.map((file, index) => (
            <SwiperSlide key={file.name}>
              <ImageWrapper>
                <Image src={URL.createObjectURL(new Blob([file]))} />
                <DeleteImageButton onClick={() => removeImage(index)}>
                  <DeleteIcon />
                </DeleteImageButton>
              </ImageWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Field>
      <Field label="Notes:">
        <Textarea {...register('notes')} as="textarea" />
      </Field>
    </Modal>
  );
}

const ImageWrapper = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 72px;
  height: 72px;
  border: 1.5px solid #e2e2e2;
  border-radius: 12px;
  object-fit: cover;
`;

const DeleteImageButton = styled(IconButton)`
  position: absolute;
  top: 6px;
  right: 6px;
`;
