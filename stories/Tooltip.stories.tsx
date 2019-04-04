import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeCard } from './ThemeCard';
import { Tooltip, Button } from '../lib';

function DemoLayout() {
  return (
    <React.Fragment>
      <Tooltip placement="top" content={() => <span>Tooltip content: <b>top</b>.</span>}>
        <Button>Top</Button>
      </Tooltip>
      &nbsp;
      <Tooltip placement="left" content={() => <span>Tooltip content: <b>left</b>.</span>}>
        <Button>Left</Button>
      </Tooltip>
      &nbsp;
      <Tooltip placement="bottom" content={() => <span>Tooltip content: <b>bottom</b>.</span>}>
        <Button>Bottom</Button>
      </Tooltip>
      &nbsp;
      <Tooltip placement="right" content={() => <span>Tooltip content: <b>right</b>.</span>}>
        <Button>Right</Button>
      </Tooltip>
    </React.Fragment>
  );
}

storiesOf('Components/Tooltip', module).add(
  'Tooltip',
  () => (
    <ThemeCard>
      {() => <DemoLayout />}
    </ThemeCard>
  ),
);
