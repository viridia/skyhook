import * as React from 'react';
import { Button } from '../lib';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';

const DemoLayout = styled.div`
  font-family: 'ubuntu';
  color: ${p => p.theme.textNormal};

  > button {
    margin-right: 8px;
  }

  > header {
    margin: .5rem 0;

    &:first-child {
      margin-top: 0;
    }
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
    <DemoLayout>
      <Button onClick={action('button-click')}>Default</Button>
      <Button onClick={action('button-click')} kind="primary">Primary</Button>
      <Button onClick={action('button-click')} kind="action">Action</Button>
      <Button onClick={action('button-click')} size="small">Small</Button>
      <Button onClick={action('button-click')} size="smaller">Smaller</Button>
      <Button onClick={action('button-click')} size="mini">Mini</Button>
    </DemoLayout>
  ),
);
