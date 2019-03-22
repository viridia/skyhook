import { styled } from './style';
import { mix } from 'polished';

export const ValidationMsg = styled.div`
  font-size: 90%;
  margin-top: 4px;

  &.error {
    color: ${p => mix(0.4, p.theme.textNormal, '#f00')};
  }

  &.warning {
    color: ${p => mix(0.5, p.theme.textNormal, '#ff0')};
  }

  &.success {
    color: ${p => mix(0.7, p.theme.textNormal, '#0f0')};
  }
`;

export type ValidationState = 'error' | 'warning' | 'success';
