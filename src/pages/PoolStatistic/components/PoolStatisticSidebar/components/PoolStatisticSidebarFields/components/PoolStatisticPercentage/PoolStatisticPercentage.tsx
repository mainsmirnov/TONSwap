import { FC, memo } from 'react';
import { TPoolStatisticPercentage } from './TPoolStatisticPercentage';
import './PoolStatisticPercentage.css';

import { classNames } from 'utils/classNames';

import { Title } from 'components/Typography/Title/Title';
import { PoolStatisticSidebarFieldGroup } from '../PoolStatisticSidebarFiledGroup/PoolStatisticSidebarFieldGroup';

export const PoolStatisticPercentage: FC<TPoolStatisticPercentage> = memo(({ title, percent }) => (
  <PoolStatisticSidebarFieldGroup title={title}>
    <Title className={classNames('PoolStatisticPercentage__text', {
      [`PoolStatisticPercentage__text--${percent > 0 ? 'positive' : 'negative'}`]: true,
    })} level="3" weight="bold">+104.12%</Title>
  </PoolStatisticSidebarFieldGroup>
));