import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';
import { ForwardedRef, forwardRef } from 'react';

export const StyledSelect = styled.select`
  outline: none;
  height: 48px;
  width: 100%;
  padding: 0 16px;
  transition: all 0.2s ease;
  background: #ffffff;
  border: 1px solid #dcdde0;
  border-radius: 13px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #333333;
`;

type Options = {
  label: string;
  value: string;
};

type Props = {
  options: Options[];
} & UseFormRegisterReturn;

export const Select = forwardRef(function Select(
  { options, ...rest }: Props,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <StyledSelect {...rest} ref={ref}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  );
});
