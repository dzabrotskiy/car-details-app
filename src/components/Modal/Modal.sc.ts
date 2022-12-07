import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(33, 33, 33, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(motion.div)`
  max-width: 744px;
  width: 80%;
  //max-height: 100vh;
  background: #fcfcfc;
  border: 1px solid #f2f3f5;
  border-radius: 12px;
  padding: 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  color: #333333;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;
`;
