import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';

export interface ToggleSwitchProps {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function ToggleSwitchImpl({ checked, disabled, className, ...props }: ToggleSwitchProps) {
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

export const InsetToggleSwitch = styled(ToggleSwitchImpl)`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  position: relative;

  &[disabled] {
    opacity: 0.4;
    cursor: default;
  }

  > .slide {
    background-color: ${p => p.theme.insetToggle.slideColor};
    border-radius: 11px;
    box-shadow: inset 0 1px 1px 1px ${p => p.theme.shadowColor};
    height: 22px;
    transition: background-color linear 0.2s;
    width: 38px;
  }

  &:focus > .slide {
    box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
    z-index: 1;
  }

  > .thumb {
    background-color: ${p => p.theme.insetToggle.thumbColor};
    border-radius: 9px;
    height: 18px;
    top: 2px;
    left: 2px;
    position: absolute;
    transition: transform linear 0.2s, background-color linear 0.3s;
    width: 19px;
  }

  &.checked {
    > .slide {
      background-color: ${p => p.theme.insetToggle.checkedSlideColor};
    }
    > .thumb {
      transform: translateX(15px);
      background-color: ${p => p.theme.insetToggle.checkedThumbColor};
    }
  }
`;
