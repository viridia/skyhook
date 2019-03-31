import * as React from 'react';
import { styled } from './style';
import classNames from 'classnames';
import DiscloseIcon from './icons-compiled/IcPlayArrow';

const DiscloseButtonEl = styled.button`
  margin-top: 2px;
  margin-bottom: 0;
  margin-right: 4px;
  border: none;
  background: none;
  padding: 0;
  outline: none;
  transition: transform 0.5s ease;
  transform-origin: 55% 45%;
  cursor: pointer;

  &.checked {
    transform: rotate(90deg);
  }

  > .svg-icon {
    width: 20px;
    height: 20px;
    > path {
      fill: ${p => p.theme.button.primary.textColor};
    }
  }
`;

export interface DiscloseButtonProps {
  onClick: (state: any) => void;
  checked?: boolean;
}

export function DiscloseButton(props: DiscloseButtonProps) {
  return (
    <DiscloseButtonEl
        className={classNames('disclose', { checked: props.checked })}
        onClick={props.onClick}
    >
      <DiscloseIcon className="svg-icon" />
    </DiscloseButtonEl>
  );
}
