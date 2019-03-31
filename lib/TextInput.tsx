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
  min-height: 18px;
`;

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
  }: TextInputProps,
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
