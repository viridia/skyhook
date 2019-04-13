import * as React from 'react';
import { DropdownButton, MenuItem, MenuDivider, Menu } from '../lib';
import { storiesOf } from '@storybook/react';
import { styled } from '../lib/style';
import { ThemeCard } from './ThemeCard';

const DemoLayout = styled.div`
  > button {
    margin-right: 8px;
    margin-bottom: 8px;
  }
`;

const FixedMenu = styled(Menu)`
  position: relative;
  width: 10rem;
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
).add(
  'DropdownButton (checkable)',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <DropdownButton title="Click me" checkable={true}>
            <MenuItem
              checked={true}
              onClick={() => { console.info('Choose First'); }}
            >
              First
            </MenuItem>
            <MenuItem onClick={() => { console.info('Choose Middle'); }}>Middle</MenuItem>
            <MenuDivider />
            <MenuItem onClick={() => { console.info('Choose Last'); }}>Last</MenuItem>
          </DropdownButton>
        </DemoLayout>
      )}
    </ThemeCard>
  ),
).add(
  'Menus',
  () => (
    <ThemeCard>
      {() => (
        <DemoLayout>
          <header>Active Menu</header>
          <FixedMenu>
            <MenuItem>First</MenuItem>
            <MenuItem checked={true}>Middle</MenuItem>
            <MenuItem>Last</MenuItem>
          </FixedMenu>
          <header>Checkable Menu</header>
          <FixedMenu checkable>
            <MenuItem>First</MenuItem>
            <MenuItem checked={true}>Middle</MenuItem>
            <MenuItem>Last</MenuItem>
          </FixedMenu>
          <header>Divider</header>
          <FixedMenu>
            <MenuItem>First</MenuItem>
            <MenuItem checked={true}>Middle</MenuItem>
            <MenuDivider />
            <MenuItem>Last</MenuItem>
          </FixedMenu>
        </DemoLayout>
      )}
    </ThemeCard>
  ),
);
