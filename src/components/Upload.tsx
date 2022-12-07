import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

import { ImageIcon } from '@assets/icons/ImageIcon';
import { Spacer } from '@components/Spacer';

type Props = {
  onChange(files: File[]): void;
};

export function Upload({ onChange }: Props) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      'image/png': ['.png'],
    },
  });

  useEffect(() => {
    onChange(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <Container {...getRootProps({ className: 'dropzone' })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <Text>
          <ImageIcon />
          <Spacer width={12} />
          <span>
            Drop your images here or
            <span style={{ color: '#007BFF' }}> click to browse</span>
          </span>
        </Text>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 1px dashed #c4c4c4;
  border-radius: 8px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #7c808e;
`;
