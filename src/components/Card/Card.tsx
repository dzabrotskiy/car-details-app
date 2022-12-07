import { PropsWithChildren } from 'react';

import * as Styled from './Card.sc';

export function Card({ children }: PropsWithChildren) {
  return <Styled.Container>{children}</Styled.Container>;
}
