import * as React from 'react';
import { CheckBox, RadioButton } from '../lib';
import { storiesOf } from '@storybook/react';
import { ThemeCard } from './ThemeCard';

storiesOf('Components/Input', module).add(
  'Checkbox',
  () => (
    <ThemeCard>
      {() => (
        <CheckBox>Checkbox</CheckBox>
      )}
    </ThemeCard>
  ),
).add(
  'RadioButton',
  () => (
    <ThemeCard>
      {() => (
        <RadioButton>Radio</RadioButton>
      )}
    </ThemeCard>
  ),
);
