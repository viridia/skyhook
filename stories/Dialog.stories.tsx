import * as React from 'react';
import { Button, Dialog } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';

const DemoLayout = styled.div`
  > button {
    margin-right: 8px;
  }
`;

function DialogDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <DemoLayout>
      <Button onClick={() => setOpen(true)}>Open&hellip;</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header hasClose={true}>Dialog Header</Dialog.Header>
        <Dialog.Body>Dialog body text</Dialog.Body>
        <Dialog.Footer>
          <Button kind="default" onClick={() => setOpen(false)}>Cancel</Button>
          <Button kind="primary" onClick={() => setOpen(false)}>OK</Button>
        </Dialog.Footer>
      </Dialog>
    </DemoLayout>
  )
}

storiesOf('Components/Dialog', module).add(
  'Dialog',
  () => (
    <ThemeCard>
      {() => <DialogDemo />}
    </ThemeCard>
  ),
);
