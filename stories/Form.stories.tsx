import * as React from 'react';
import { Form, TextInput, FormLabel, Button, FormControlGroup } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';
import { FormLayoutProps } from '../lib/FormLayout';

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

function FormDemo({ layout }: FormLayoutProps) {
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
);
