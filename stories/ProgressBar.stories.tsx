import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';
import { ProgressBar } from '../lib';

const DemoProgress = styled(ProgressBar)`
  width: 20rem;
  margin-bottom: 4px;
`;

function DemoLayout() {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setValue(c => c + 0.1);
    }, 16);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <React.Fragment>
      <DemoProgress value={value} max={500}>{Math.ceil(value / 5)}%</DemoProgress>
      <DemoProgress value={value} max={500} size="small" />
      <DemoProgress value={value} max={500} size="smaller" />
      <DemoProgress value={value} max={500} size="mini" />
    </React.Fragment>
  );
}

storiesOf('Components/ProgressBar', module).add(
  'ProgressBar',
  () => (
    <ThemeCard>
      {() => <DemoLayout />}
    </ThemeCard>
  ),
);
