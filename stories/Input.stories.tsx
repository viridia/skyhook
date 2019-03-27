import * as React from 'react';
import { CheckBox, RadioButton, ToggleSwitch } from '../lib';
import { storiesOf } from '@storybook/react';
import { ThemeCard } from './ThemeCard';

function ToggleDemo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <div>Normal</div>
      <ToggleSwitch checked={checked} onClick={() => setChecked(!checked)} />
      <div>Disabled</div>
      <ToggleSwitch disabled={true} />
    </div>

  )
}

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
).add(
  'ToggleSwitch',
  () => (
    <ThemeCard>
      {() => <ToggleDemo />}
    </ThemeCard>
  ),
);
