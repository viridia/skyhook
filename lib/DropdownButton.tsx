import * as React from 'react';
import { Dropdown as OverlayDropdown } from 'react-overlays';
import { Button, StyleVariant } from './Button';
import { styled } from './style';
import { Menu } from './Menu';
import { SizeVariant } from 'variant';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export interface DropdownButtonProps {
  alignEnd?: boolean;
  disabled?: boolean;
  drop?: 'up' | 'left' | 'right' | 'down';
  kind?: StyleVariant;
  size?: SizeVariant;
  id?: string;
  className?: string;
  children: React.ReactNode;
  title: React.ReactNode;
  onSelect?: (key: string) => any;
}

const DropdownButtonEl = styled(Button)`
  justify-content: space-between;
  .down-arrow {
    margin-left: 1rem;
  }
`;

export function DropdownButton({
  drop = 'down',
  disabled,
  size,
  alignEnd = false,
  className,
  children,
  title,
  kind,
  onSelect,
}: DropdownButtonProps) {
  const [shown, setShown] = React.useState(false);

  function onMenuClick(e: any) {
    setShown(false);
    // TODO: Perhaps this logic should go in the Menu component.
    if (onSelect) {
      let target: HTMLElement = e.target;
      while (target) {
        const role = target.getAttribute('role');
        if (role === 'menuitem') {
          if ('eventKey' in target.dataset) {
            e.preventDefault();
            onSelect(target.dataset.eventKey);
          }
          break;
        }
        target = target.parentElement;
      }
    }
  }

  return (
    <OverlayDropdown
      show={shown}
      onToggle={show => setShown(show)}
      drop={drop}
      alignEnd={alignEnd}
      itemSelector="button:not(:disabled)"
    >
      {({ props }) => (
        <DropdownContainer {...props}>
          <OverlayDropdown.Toggle>
            {({ toggle, props: buttonProps }) => (
              <DropdownButtonEl
                  variant={kind}
                  size={size}
                  disabled={disabled}
                  className={className}
                  {...buttonProps}
                  onClick={(e: any) => { e.preventDefault(); toggle(e); }}
              >
                <span className="title">{title}</span>
                <span className="down-arrow">&#9662;</span>
              </DropdownButtonEl>
            )}
          </OverlayDropdown.Toggle>
          <OverlayDropdown.Menu flip={true}>
            {({ show, props: menuProps }) => show && (
              <Menu {...menuProps} onClick={onMenuClick}>
                {children}
              </Menu>
            )}
          </OverlayDropdown.Menu>
        </DropdownContainer>
      )}
    </OverlayDropdown>
  );
}
