import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  label: string;
}>;

export function Field({ label, children }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`;

const Label = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  color: #7c808e;
  margin-bottom: 8px;
`;
