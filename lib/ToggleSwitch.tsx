import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';

interface Props {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function ToggleSwitchImpl({ checked, disabled, className, ...props }: Props) {
  return (
    <button
      {...props}
      className={classNames(className, { checked })}
      disabled={disabled}
      role="switch"
      aria-checked={checked}
    >
      <div className="slide" />
      <div className="thumb" />
    </button>
  );
}

export const ToggleSwitch = styled(ToggleSwitchImpl)`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 4px 1px;
  position: relative;

  &[disabled] {
    opacity: 0.4;
    cursor: default;
  }

  > .slide {
    background-color: ${p => p.theme.toggle.slideColor};
    border: none;
    border-radius: 7px;
    height: 14px;
    transition: background-color linear 0.2s;
    width: 32px;
  }

  &:focus > .slide {
    box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
    z-index: 1;
  }

  > .thumb {
    background-color: ${p => p.theme.toggle.thumbColor};
    border-radius: 9px;
    box-shadow: 0 2px 2px 1px ${p => p.theme.shadowColor};
    height: 19px;
    top: 1px;
    left: -1px;
    position: absolute;
    transition: transform linear 0.2s, background-color linear 0.3s;
    width: 19px;
    /* transition: transform */
  }

  &.checked {
    > .slide {
      background-color: ${p => p.theme.toggle.checkedSlideColor};
    }
    > .thumb {
      transform: translateX(17px);
      background-color: ${p => p.theme.toggle.checkedThumbColor};
    }
  }
`;
