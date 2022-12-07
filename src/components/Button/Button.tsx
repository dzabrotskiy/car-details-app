import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as Styled from './Button.sc';

type Props = PropsWithChildren<{
  onClick(): void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}>;

export function Button({ children, onClick, type }: Props) {
  return (
    <Styled.StyledButton type={type} onClick={onClick}>
      {children}
    </Styled.StyledButton>
  );
}
