import * as React from 'react';
import { TextInput, TextArea } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';

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

storiesOf('Components/Input', module).add(
  'TextInput',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <header>Success</header>
          <TextInput
              defaultValue="James"
              name="first-name"
              validationStatus="success"
              validationMsg="Good to go!"
          />
          <header>Error</header>
          <TextInput
              defaultValue="Smith"
              validationStatus="error"
              validationMsg="Name must not be empty!"
          />
          <header>Warning</header>
          <TextInput
              name="street"
              validationStatus="warning"
              validationMsg="Weak password"
          />
          <header>Regular</header>
          <TextInput />
        </DemoLayout>
      )}
    </ThemeCard>
  ),
).add(
  'TextArea',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <header>Success</header>
          <TextArea
              defaultValue="James"
              name="first-name"
              validationStatus="success"
              validationMsg="Good to go!"
          />
          <header>Error</header>
          <TextArea
              defaultValue="Smith"
              validationStatus="error"
              validationMsg="Name must not be empty!"
          />
          <header>Warning</header>
          <TextArea
              name="street"
              validationStatus="warning"
              validationMsg="Weak password"
          />
          <header>Regular</header>
          <TextArea />
        </DemoLayout>
      )}
    </ThemeCard>
  ),
);
