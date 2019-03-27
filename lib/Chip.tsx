import * as React from 'react';
import { styled } from './style';
import { transparentize } from 'polished';
import { contrastingColor } from './theme/contrastingColor';
import classNames from 'classnames';
import { SizeVariant } from 'variant';

interface Props {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: SizeVariant;
  onClose?: () => void;
}

function ChipImpl({ children, className, onClose, size }: Props) {
  return (
    <span className={classNames('chip', className, size)}>
      {onClose && <button className="close" onClick={onClose}>&#x2715;</button>}
      <span className="title">{children}</span>
    </span>
  );
}

export const Chip = styled(ChipImpl).attrs(props => ({
  titleColor: contrastingColor(props.color),
  hoverColor: transparentize(0.4, contrastingColor(props.color)),
}))`
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 12px;
  color: ${props => props.titleColor};
  font-size: 85%;
  flex-direction: row;
  height: 24px;
  overflow: hidden;
  margin-right: 3px;
  padding: 0 5px;
  user-select: none;
  white-space: nowrap;

  &.small {
    height: 21px;
    font-size: 75%;
    border-radius: 10px;
  }

  &.smaller {
    height: 18px;
    font-size: 70%;
    border-radius: 9px;
  }

  &.mini {
    height: 16px;
    font-size: 65%;
    border-radius: 8px;
  }

  .title {
    margin-right: 4px;
    margin-left: 4px;
  }

  > .close {
    align-items: center;
    border: none;
    color: ${props => props.hoverColor};
    cursor: pointer;
    background-color: transparent;
    display: flex;
    height: 16px;
    justify-content: center;
    margin-right: -4px;
    outline: none;
    padding: 0;
    position: relative;
    top: 1px;
    width: 16px;
    font-weight: bold;

    &:hover {
      color: ${props => props.titleColor};
    }
  }
`;

Chip.defaultProps = { color: 'gray' };
