import * as React from 'react';
import { DropdownButton, MenuItem, MenuDivider } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';

const DemoLayout = styled.div`
  > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  svg {
    width: 20px;
  }
`;

storiesOf('Components/Menu', module).add(
  'DropdownButton',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <DropdownButton title="Click me">
            <MenuItem onClick={() => { console.info('Choose First'); }}>First</MenuItem>
            <MenuItem onClick={() => { console.info('Choose Middle'); }}>Middle</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => { console.info('Choose Last'); }}>Last</MenuItem>
          </DropdownButton>
        </DemoLayout>
      )}
    </ThemeCard>
  ),
);
