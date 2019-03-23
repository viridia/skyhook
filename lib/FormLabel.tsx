import { styled } from './style';

export const FormLabel = styled.span`
  font-weight: bold;
  grid-column: labels;
  justify-self: end;
  white-space: nowrap;

  .layout-ledger & {
    margin-top: 6px;
  }

  .layout-stacked &, .layout-column & {
    margin-top: 1rem;
    margin-bottom: 6px;
    &:first-child {
      margin-top: 0;
    }
  }

  .layout-inline & {
    margin-left: 8px;
    margin-top: 6px;
    &:first-child {
      margin-left: 0;
    }
  }

  .layout-row & {
    margin-left: 8px;
    margin-top: 6px;
    &:first-child {
      margin-left: 0;
    }
  }
`;
