import * as React from 'react';
import { TextInput, FormLabel, FormLayout, Button, FormControlGroup } from '../lib';
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

function FormLayoutDemo({ layout }: FormLayoutProps) {
  return (
    <DemoLayout>
      <FormLayout layout={layout}>
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
      </FormLayout>
    </DemoLayout>
  )
}

storiesOf('Components/FormLayout', module).add(
  'FormLayout.ledger', () => <ThemeCard>{() => <FormLayoutDemo layout="ledger" />}</ThemeCard>,
).add(
  'FormLayout.row', () => <ThemeCard>{() => <FormLayoutDemo layout="row" />}</ThemeCard>,
).add(
  'FormLayout.column', () => <ThemeCard>{() => <FormLayoutDemo layout="column" />}</ThemeCard>,
).add(
  'FormLayout.stacked', () => <ThemeCard>{() => <FormLayoutDemo layout="stacked" />}</ThemeCard>,
).add(
  'FormLayout.inline', () => <ThemeCard>{() => <FormLayoutDemo layout="inline" />}</ThemeCard>,
);
