import * as React from 'react';
import { styled } from './style';
import classNames from 'classnames';

export interface MenuProps extends React.InputHTMLAttributes<HTMLDivElement> {
  checkable?: boolean;
}

const MenuImpl = React.forwardRef(({ children, className, checkable, ...props }: MenuProps, ref: any) => {
  return (
    <div {...props} ref={ref} role="menu" className={classNames(className, { checkable })}>
      {children}
    </div>
  );
});

/** Drop-down menu class. */
export const Menu = styled(MenuImpl)`
  background-color: ${p => p.theme.menu.bgColor};
  border: 1px solid ${p => p.theme.menu.borderColor};
  border-radius: 3px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  margin: 4px 0;
  min-width: 150px;
  overflow-x: hidden;
  position: absolute;
  padding: 4px 0;
  z-index: 2;
`;

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  active?: boolean;
  eventKey?: string;
  onClick?: (e: any) => void;
}

export function MenuItemImpl(
  { onClick, checked, active, eventKey, className, ...props }: MenuItemProps) {

  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === 'Enter' || e.key === ' ') {
      if (onClick) {
        e.preventDefault();
        onClick(e);
      }
    }
  }

  return (
    <button
      {...props}
      role="menuitem"
      data-event-key={eventKey}
      className={classNames(className, { checked, active })}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  );
}

/** Menu item. */
export const MenuItem = styled(MenuItemImpl).attrs({
  tabIndex: -1,
})`
  background-color: transparent;
  border: none;
  color: ${p => p.theme.menu.textColor};
  display: flex;
  flex-direction: row;
  margin: 0 4px;
  outline: none;
  padding: 4px;
  white-space: nowrap;

  &[disabled] {
    opacity: 0.6;
    > svg {
      opacity: 0.3;
    }
  }

  &:hover:not([disabled]) {
    background-color: ${p => p.theme.menu.hoverBgColor};
    color: ${p => p.theme.menu.hoverTextColor};
  }

  &:focus, &.active {
    background-color: ${p => p.theme.menu.focusBgColor};
    color: ${p => p.theme.menu.focusTextColor};
  }

  .checkable > & {
    margin-left: 1.5rem;

    &.checked {
      &::before {
        content: '\u2713';
        position: absolute;
        left: 12px;
      }
      font-weight: bold;
    }
  }
`;

/** Menu divider. */
export const MenuDivider = styled.div`
  align-self: stretch;
  border-bottom: 1px solid ${p => p.theme.menu.dividerColor};
  display: block;
  margin: 4px 0;
`;
