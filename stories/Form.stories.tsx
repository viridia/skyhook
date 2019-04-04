import * as React from 'react';
import { Form, TextInput, FormLabel, Button, FormControlGroup, AutoNavigate, FormMessage } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';
import { FormGridProps } from './FormGrid';

const DemoLayout = styled.div`
  > header {
    margin: .5rem 0;
    font-weight: bold;

    &:first-child {
      margin-top: 0;
    }
  }

  textarea {
    min-height: 3rem;
  }
`;

function FormDemo({ layout }: FormGridProps) {
  return (
    <DemoLayout>
      <Form layout={layout}>
        <FormLabel>First Name:</FormLabel>
        <TextInput defaultValue="James" name="first-name"/>
        <FormLabel>Last Name:</FormLabel>
        <TextInput defaultValue="Smith" />
        <FormLabel>Street:</FormLabel>
        <TextInput
            name="street"
            validationStatus="warning"
            validationMsg="Weak password"
        />
        <FormLabel>State:</FormLabel>
        <TextInput />
        <FormControlGroup>
          <Button>Submit</Button>
        </FormControlGroup>
      </Form>
    </DemoLayout>
  )
}

storiesOf('Components/Form', module).add(
  'Form.ledger', () => <ThemeCard>{() => <FormDemo layout="ledger" />}</ThemeCard>,
).add(
  'Form.row', () => <ThemeCard>{() => <FormDemo layout="row" />}</ThemeCard>,
).add(
  'Form.column', () => <ThemeCard>{() => <FormDemo layout="column" />}</ThemeCard>,
).add(
  'Form.stacked', () => <ThemeCard>{() => <FormDemo layout="stacked" />}</ThemeCard>,
).add(
  'Form.inline', () => <ThemeCard>{() => <FormDemo layout="inline" />}</ThemeCard>,
).add(
  'FormControlGroup',
  () => <ThemeCard>
    {() => (
      <Form layout="ledger" onSubmit={e => { e.preventDefault(); console.log('submit'); }}>
        <FormLabel>First Name:</FormLabel>
        <TextInput defaultValue="James" name="first-name"/>
        <FormControlGroup>
          <Button>Group 1</Button>
        </FormControlGroup>
        <FormControlGroup>
          <Button>Group 2</Button>
        </FormControlGroup>
        <FormLabel>Last:</FormLabel>
        <FormControlGroup>
          <Button>Group 3</Button>
        </FormControlGroup>
      </Form>
  )}
  </ThemeCard>,
).add(
  'FormMessage',
  () => <ThemeCard>
    {() => (
      <Form layout="ledger" onSubmit={e => { e.preventDefault(); console.log('submit'); }}>
        <FormLabel>First Name:</FormLabel>
        <TextInput defaultValue="James" name="first-name"/>
        <FormMessage state="success">Success</FormMessage>
        <FormMessage state="warning">Warning</FormMessage>
        <FormMessage state="error">Error</FormMessage>
      </Form>
  )}
  </ThemeCard>,
).add(
  'AutoNavigate',
  () => <ThemeCard>
    {() => (
      <Form layout="ledger" onSubmit={e => { e.preventDefault(); console.log('submit'); }}>
        <AutoNavigate />
        Hit the enter key to move the focus to the next field.
        <FormLabel>First Name:</FormLabel>
        <TextInput defaultValue="James" name="first-name"/>
        <FormLabel>Last Name:</FormLabel>
        <TextInput defaultValue="Smith" />
        <FormLabel>Street:</FormLabel>
        <TextInput
            name="street"
            validationStatus="warning"
            validationMsg="Weak password"
        />
        <FormLabel>State:</FormLabel>
        <TextInput />
        <FormControlGroup>
          <Button>Submit</Button>
        </FormControlGroup>
      </Form>
  )}
  </ThemeCard>,
);
