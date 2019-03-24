import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';
import { Chip } from '../lib';

const DemoLayout = styled.div`
  > header {
    margin: .5rem 0;
    color: ${p => p.theme.textNormal};

    &:first-child {
      margin-top: 0;
    }
  }
`;

storiesOf('Components/Chip', module).add(
  'Chip',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <header>Chips</header>
          <div>
            <Chip>Hello</Chip>
            <Chip color="#ff0">Yellow</Chip>
          </div>
          <header>Chips (with close)</header>
          <div>
            <Chip onClose={action('close')}>Hello</Chip>
            <Chip onClose={action('close')} color="#fff">White</Chip>
            <Chip onClose={action('close')} color="#000">Black</Chip>
            <Chip onClose={action('close')} color="lightblue">Light Blue</Chip>
          </div>
          <header>Chips (small)</header>
          <div>
            <Chip size="small">Hello</Chip>
            <Chip size="small" color="#ff0">Yellow</Chip>
          </div>
          <header>Chips (small, with close)</header>
          <div>
            <Chip size="small" onClose={action('close')}>Hello</Chip>
            <Chip size="small" onClose={action('close')} color="#fff">White</Chip>
            <Chip size="small" onClose={action('close')} color="#000">Black</Chip>
            <Chip size="small" onClose={action('close')} color="lightblue">Light Blue</Chip>
          </div>
        </DemoLayout>
      )}
    </ThemeCard>
  ),
);
