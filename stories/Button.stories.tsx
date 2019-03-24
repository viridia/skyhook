import * as React from 'react';
import { Button } from '../lib';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';
import IconClose from '../lib/icons-compiled/IcClose';

const DemoLayout = styled.div`
  > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  > header {
    margin: .5rem 0;
    color: ${p => p.theme.textNormal};

    &:first-child {
      margin-top: 0;
    }
  }

  svg {
    width: 20px;
  }
`;

storiesOf('Components/Button', module).add(
  'Button',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <header>Button Kinds</header>
          <Button onClick={action('button-click')}>Default</Button>
          <Button onClick={action('button-click')} kind="primary">Primary</Button>
          <Button onClick={action('button-click')} kind="action">Action</Button>
          <header>Button Sizes</header>
          <Button onClick={action('button-click')}>Normal</Button>
          <Button onClick={action('button-click')} size="small">Small</Button>
          <Button onClick={action('button-click')} size="smaller">Smaller</Button>
          <Button onClick={action('button-click')} size="mini">Mini</Button>
        </DemoLayout>
      )}
    </ThemeCard>
  ),
).add(
  'Icon Button (TODO)',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <header>Button Kinds</header>
          <Button onClick={action('button-click')}><IconClose />Default</Button>
          <Button onClick={action('button-click')} kind="primary"><IconClose />Primary</Button>
          <Button onClick={action('button-click')} kind="action"><IconClose />Action</Button>
          <header>Button Sizes</header>
          <Button onClick={action('button-click')}><IconClose />Normal</Button>
          <Button onClick={action('button-click')} size="small"><IconClose />Small</Button>
          <Button onClick={action('button-click')} size="smaller"><IconClose />Smaller</Button>
          <Button onClick={action('button-click')} size="mini"><IconClose />Mini</Button>
        </DemoLayout>
      )}
    </ThemeCard>
  ),
);
