import * as React from 'react';
import { Button, ButtonGroup, DiscloseButton, DismissButton } from '../lib';
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

  svg {
    width: 20px;
  }
`;

function DiscloseDemo() {
  const [open, setOpen] = React.useState(false);
  return <DiscloseButton checked={open} onClick={() => setOpen(!open)} />;
}

storiesOf('Components/Button', module)
  .add(
    'Button',
    () => (
      <ThemeCard>
        {() => (
          <DemoLayout>
            <header>Button Kinds</header>
            <Button onClick={action('button-click')}>Default</Button>
            <Button onClick={action('button-click')} variant="primary">Primary</Button>
            <Button onClick={action('button-click')} variant="action">Action</Button>
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
    'Icon Button',
    () => (
      <ThemeCard>
        {() => (
          <DemoLayout>
            <header>Button Kinds</header>
            <Button onClick={action('button-click')}><IconClose />Default</Button>
            <Button onClick={action('button-click')} variant="primary"><IconClose />Primary</Button>
            <Button onClick={action('button-click')} variant="action"><IconClose />Action</Button>
            <header>Button Sizes</header>
            <Button onClick={action('button-click')}><IconClose />Normal</Button>
            <Button onClick={action('button-click')} size="small"><IconClose />Small</Button>
            <Button onClick={action('button-click')} size="smaller"><IconClose />Smaller</Button>
            <Button onClick={action('button-click')} size="mini"><IconClose />Mini</Button>
          </DemoLayout>
        )}
      </ThemeCard>
    ),
  ).add(
    'Button Group',
    () => (
      <ThemeCard>
        {() => (
          <DemoLayout>
            <ButtonGroup>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </DemoLayout>
        )}
      </ThemeCard>
    ),
  ).add(
    'Disclose button',
    () => (
      <ThemeCard>
        {() => <DiscloseDemo />}
      </ThemeCard>
    ),
  ).add(
    'Dismiss button',
    () => (
      <ThemeCard>
        {() => <DismissButton />}
      </ThemeCard>
    ),
  );
