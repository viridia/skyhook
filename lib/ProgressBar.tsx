import * as React from 'react';
import { styled } from './style';
import classNames from 'classnames';
import { darken } from 'polished';
import { SizeVariant } from 'variant';

const ProgressTrack = styled.div`
  align-items: center;
  background-color: ${p => p.theme.progress.trackColor};
  border-radius: 4px;
  color: ${p => p.theme.progress.textColor};
  justify-content: center;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  height: 1.5rem;

  &.small {
    height: 1rem;
  }

  &.smaller {
    height: 0.7rem;
  }

  &.mini {
    height: 0.5rem;
  }
`;

const ProgressThumb = styled.div`
  background: repeating-linear-gradient(
    -45deg,
    ${p => p.theme.progress.thumbColor},
    ${p => p.theme.progress.thumbColor} 10px,
    ${p => darken(.03, p.theme.progress.thumbColor)} 10px,
    ${p => darken(.03, p.theme.progress.thumbColor)} 20px
  );
  background-attachment: fixed;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`;

const ProgressContent = styled.div`
  z-index: 1;
`;

export interface ProgressBarProps {
  children?: React.ReactNode;
  className?: string;
  value: number;
  min?: number;
  max?: number;
  size?: SizeVariant;
}

export function ProgressBar(
    { value, min = 0, max = 100, className, size, children }: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value - min) * 100.0 / Math.max(max - min, 1)));
  return (
    <ProgressTrack className={classNames(className, size)}>
      <ProgressContent>{children}</ProgressContent>
      <ProgressThumb style={{ width: `${percent}%` }} />
    </ProgressTrack>
  );
}
