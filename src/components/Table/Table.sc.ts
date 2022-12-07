import styled from 'styled-components';

export const TableHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;

export const TableContainer = styled.div`
  background: rgba(242, 243, 245, 0.4);
  border: 1px solid #f2f3f5;
  border-radius: 24px;
  padding: 32px;
  margin-top: 24px;
`;

export const Th = styled.th`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7c808e;
  padding: 0 24px;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  margin-bottom: 10px;
`;

export const Row = styled.div`
  background: #ffffff;
  border: 1px solid #dcdde0;
  border-radius: 16px;
  margin-bottom: 16px;
  transition: all 0.2s ease;
`;

export const RowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
`;

export const Cell = styled.div`
  padding: 24px;
  text-align: center;
`;
