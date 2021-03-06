import * as React from 'react';
import { CheckBox, RadioButton, ToggleSwitch, RadioButtonGroup, InsetToggleSwitch } from '../lib';
import { storiesOf } from '@storybook/react';
import { ThemeCard } from './ThemeCard';

function ToggleDemo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <header>Normal</header>
      <ToggleSwitch checked={checked} onClick={() => setChecked(!checked)} />
      <header>Disabled</header>
      <ToggleSwitch disabled={true} />
    </div>
  )
}

function InsetToggleDemo() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <header>Normal</header>
      <InsetToggleSwitch checked={checked} onClick={() => setChecked(!checked)} />
      <header>Disabled</header>
      <InsetToggleSwitch disabled={true} />
    </div>
  )
}

function RadioDemo() {
  const [selected, setSelected] = React.useState(1);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <RadioButton checked={selected == 1} onChange={() => setSelected(1)}>Alpha</RadioButton>
      <RadioButton checked={selected == 2} onChange={() => setSelected(2)}>Beta</RadioButton>
      <RadioButton checked={selected == 3} onChange={() => setSelected(3)}>Gamma</RadioButton>
    </div>
  )
}

function CheckBoxDemo(
    { ch, ind, children }: { ch?: boolean, ind?: boolean, children: React.ReactNode}) {
  const [checked, setChecked] = React.useState<boolean>(!!ch);
  const ref = React.createRef<HTMLInputElement>();
  React.useEffect(() => {
    ref.current.indeterminate = ind;
  }, []);
  return (
    <div>
      <CheckBox
        ref={ref}
        checked={checked}
        onChange={e => { setChecked(e.target.checked); }}
      >
        {children}
      </CheckBox>
    </div>
  )
}

function RadioGroupDemo() {
  const [value, setValue] = React.useState('b');
  return (
    <RadioButtonGroup id="demo" value={value} onChange={v => setValue(v)}>
      <RadioButton value="a">Alpha</RadioButton>
      <RadioButton value="b">Beta</RadioButton>
      <RadioButton value="c">Gamma</RadioButton>
    </RadioButtonGroup>
  )
}

storiesOf('Components/Input', module).add(
  'Checkbox',
  () => (
    <ThemeCard>
      {() => (
        <section>
          <div>
            <CheckBoxDemo>False</CheckBoxDemo>
          </div>
          <div>
            <CheckBoxDemo ch={true}>True</CheckBoxDemo>
          </div>
          <div>
            <CheckBoxDemo ind={true}>Maybe</CheckBoxDemo>
          </div>
        </section>
      )}
    </ThemeCard>
  ),
).add(
  'RadioButton',
  () => (
    <ThemeCard>
      {() => (
        <section>
          <header>Radio Button</header>
          <RadioDemo />
          <header>Radio Button Group</header>
          <RadioGroupDemo />
        </section>
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
).add(
  'InsetToggleSwitch',
  () => (
    <ThemeCard>
      {() => <InsetToggleDemo />}
    </ThemeCard>
  ),
);
