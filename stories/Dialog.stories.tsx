import * as React from 'react';
import { Button, Dialog, Form, FormLabel, TextInput } from '../lib';
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
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labeledby="header"
        aria-describedby="desc"
      >
        <Dialog.Header hasClose={true} id="header">Dialog Header</Dialog.Header>
        <Dialog.Body>
          <section id="desc">Dialog body text</section>
          <Form layout="ledger" onSubmit={e => { e.preventDefault(); setOpen(false); }}>
            <FormLabel>Name:</FormLabel>
            <TextInput autoFocus={true} />
          </Form>
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="default" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>OK</Button>
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
