import { styled } from './style';

/** Decorative frame around a text input or text area control. */
export const TextInputContainer = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;

  > .text-input-content {
    align-items: center;
    background-color: ${p => p.theme.textField.bgColor};
    border: 1px solid ${p => p.theme.textField.borderColor};
    border-radius: 3px;
    display: flex;
    flex-direction: row;

    > input, > textarea {
      border-radius: 2px;
    }

    &:focus-within {
      box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
      z-index: 1;
    }

    &.success {
      > input, > textarea {
        box-shadow: inset 0 0 0 2px #00cc0044;
      }
    }

    &.warning {
      > input, > textarea {
        box-shadow: inset 0 0 0 2px #cccc0066;
      }
    }

    &.error {
      > input, > textarea {
        box-shadow: inset 0 0 0 2px #ff888877;
      }
    }
  }
`;
