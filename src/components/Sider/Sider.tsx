import type { JSXElementConstructor } from 'react';

import { LogoIcon } from '@assets/icons/LogoIcon';
import type { IconProps } from '@assets/icons/types';

import * as Styled from './Sider.sc';

type Item = {
  key?: string;
  Icon?: JSXElementConstructor<IconProps>;
  label?: string;
};

type Props = {
  selectedItemKey?: string;
  items?: Item[];
};

export function Sider({ selectedItemKey, items = [] }: Props) {
  return (
    <Styled.Container>
      <LogoIcon />
      <Styled.ItemsContainer>
        {items?.map(({ key, Icon, label }) => (
          <Styled.Item isSelected={key === selectedItemKey} key={key}>
            {Icon && (
              <Icon color={key === selectedItemKey ? '#fff' : '#7C808E'} />
            )}
            <Styled.ItemLabel isSelected={key === selectedItemKey}>
              {label}
            </Styled.ItemLabel>
          </Styled.Item>
        ))}
      </Styled.ItemsContainer>
    </Styled.Container>
  );
}
