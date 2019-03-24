import * as React from 'react';
import { TextInput, FormLabel, FormGrid, Button, FormControlGroup } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';
import { FormGridProps } from '../lib/FormGrid';

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

function FormGridDemo({ layout }: FormGridProps) {
  return (
    <DemoLayout>
      <FormGrid layout={layout}>
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
      </FormGrid>
    </DemoLayout>
  )
}

storiesOf('Components/FormGrid', module).add(
  'FormGrid.ledger', () => <ThemeCard>{() => <FormGridDemo layout="ledger" />}</ThemeCard>,
).add(
  'FormGrid.row', () => <ThemeCard>{() => <FormGridDemo layout="row" />}</ThemeCard>,
).add(
  'FormGrid.column', () => <ThemeCard>{() => <FormGridDemo layout="column" />}</ThemeCard>,
).add(
  'FormGrid.stacked', () => <ThemeCard>{() => <FormGridDemo layout="stacked" />}</ThemeCard>,
).add(
  'FormGrid.inline', () => <ThemeCard>{() => <FormGridDemo layout="inline" />}</ThemeCard>,
);
