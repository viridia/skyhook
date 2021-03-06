import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';
import { ValidationState, ValidationMsg } from './ValidationMsg';
import { TextInputContainer } from './TextInputContainer';

const InputEl = styled.textarea`
  background-color: ${p => p.theme.textField.bgColor};
  color: ${p => p.theme.textField.textColor};
  font-family: ubuntu;
  font-size: 1rem;
  min-height: 18px;
`;

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClassName?: string;
  validationMsg?: string;
  validationStatus?: ValidationState;
}

const TextAreaImpl = ({
    children,
    className,
    containerClassName,
    validationStatus,
    validationMsg,
    ...attrs
  }: TextAreaProps) => {
  return (
    <TextInputContainer className={classNames('form-control', containerClassName)}>
      <InputEl className={classNames(className, validationStatus)} {...attrs}>
        {children}
      </InputEl>
      {validationStatus &&
        <ValidationMsg className={classNames(validationStatus)}>
          {validationMsg}
        </ValidationMsg>}
    </TextInputContainer>
  );
};

/** Textarea input form control. */
export const TextArea = styled(TextAreaImpl)`
  background-color: ${p => p.theme.textField.bgColor};
  border: 1px solid ${p => p.theme.textField.borderColor};
  border-radius: 3px;
  outline: none;
  padding: 6px;
  resize: none;

  &:focus {
    box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
    z-index: 1;
  }

  &.success {
    box-shadow: inset 0 0 0 2px #00cc0044;
  }

  &.warning {
    box-shadow: inset 0 0 0 2px #cccc0066;
  }

  &.error {
    box-shadow: inset 0 0 0 2px #ee000033;
  }

  &::placeholder {
    font-size: 85%;
  }
`;
