import styled from 'styled-components';

export const CarDetailsCard = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CarImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #f2f3f5;
  border-radius: 22px;
  padding: 20px;
  width: 533px;
  max-width: 533px;
  min-width: 533px;

  & > img {
    width: 100%;
  }
`;

export const CarDetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
