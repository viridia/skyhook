import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';
import { ValidationState, ValidationMsg } from './ValidationMsg';
import { TextInputContainer } from './TextInputContainer';

const InputEl = styled.input`
  background-color: ${p => p.theme.textField.bgColor};
  color: ${p => p.theme.textField.textColor};
  font-family: ubuntu;
  font-size: 1rem;
  min-height: 22px;
`;

interface InputProps {
  containerClassName?: string;
  validationMsg?: string;
  validationStatus?: ValidationState;
}

const TextInputImpl = React.forwardRef(
  ({
    children,
    className,
    containerClassName,
    validationStatus,
    validationMsg,
    ...attrs
  }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
  ref: any) => (
  <TextInputContainer className={classNames('form-control', containerClassName)}>
    <div className={classNames('text-input-content', validationStatus)}>
      <InputEl
          ref={ref}
          className={className}
          {...attrs}
      />
      {children}
    </div>
    {validationStatus &&
      <ValidationMsg className={classNames(validationStatus)}>
        {validationMsg}
      </ValidationMsg>}
  </TextInputContainer>
));

/** Text input form control. */
export const TextInput = styled(TextInputImpl)`
  border: none;
  padding: 6px;
  outline: none;
  margin: 0;
  flex: 1;

  &::placeholder {
    font-size: 85%;
  }
`;
