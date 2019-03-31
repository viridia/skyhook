import * as React from 'react';
import { styled } from './style';

export interface RadioButtonGroupProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function RadioButtonGroupImpl({ id, className, children, value, onChange }: RadioButtonGroupProps) {
  // Get the list of radio values
  const values = React.Children.map(children, (radioItem: React.ReactElement) => {
    if (radioItem.props && radioItem.props.value) {
      return radioItem.props.value;
    }
    return null;
  }).filter(a => a);

  // Track which one has focus
  const [selected, setSelected] = React.useState<string>(value !== undefined ? value : values[0]);

  // Callback when a radio button is clicked
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value) {
      const v = e.target.dataset['value'];
      setSelected(v)
      onChange(v);
    }
  }

  // Clone buttons, add props
  const buttons = React.Children.map(children, (radioItem: React.ReactElement) => {
    if (radioItem.props && radioItem.props.value) {
      const rv = radioItem.props.value;
      return React.cloneElement(radioItem, {
        'data-value': rv,
        id: `${id}-${rv}`,
        selected: rv === selected,
        checked: rv === value,
        onChange: onChangeInput,
      });
    }
    return radioItem;
  });

  // Keyboard handler
  function onKeyDown(e: React.KeyboardEvent<HTMLElement>) {
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp': {
      e.preventDefault();
        const index = values.indexOf(selected);
        setSelected(index > 0 ? values[index - 1] : values[values.length - 1]);
        break;
      }
      case 'ArrowRight':
      case 'ArrowDown': {
        e.preventDefault();
        const index = values.indexOf(selected);
        setSelected(index < values.length - 1 ? values[index + 1] : values[0]);
        break;
      }
      case ' ':
      case 'Enter':
        if (selected !== undefined) {
          onChange(selected);
        }
        break;
    }
  }

  return (
    <div
      tabIndex={0}
      className={className}
      onKeyDown={onKeyDown}
      role="radiogroup"
      aria-activedescendant={selected && `${id}-${selected}`}
      aria-live="polite"
    >
      {buttons}
    </div>
  );
}

export const RadioButtonGroup = styled(RadioButtonGroupImpl)`
  display: flex;
  flex-direction: column;
  outline: none;

  > label {
    margin-bottom: .4rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  &:focus .selected > .radio {
    box-shadow: 0 0 0 3px ${p => p.theme.focusColor};
    z-index: 1;
  }
`;
