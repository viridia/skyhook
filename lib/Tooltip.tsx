import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { styled } from './style';
import { Overlay } from 'react-overlays';

/** Need a class for ref target. */
class RefWrapper extends React.Component<{ children: any }> {
  public render() {
    return this.props.children;
  }
}

const TooltipOverlay = styled.section`
  background-color: ${p => p.theme.tooltip.bgColor};
  border: 1px solid ${p => p.theme.tooltip.borderColor};
  border-radius: 4px;
  box-shadow: 0.5px 1px 1px 0 ${p => p.theme.shadowColor};
  color:  ${p => p.theme.tooltip.textColor};
  margin: 6px;
  padding: .5rem;
  position: absolute;

  > .arrow {
    position: absolute;
    background-color: ${p => p.theme.tooltip.bgColor};
    border-color: ${p => p.theme.tooltip.borderColor};
    border-style: solid;
    border-width: 1px 0 0 1px;
    width: 8px;
    height: 8px;
  }

  &.top > .arrow {
    bottom: -5px;
    transform: rotate(-135deg);
  }

  &.bottom > .arrow {
    top: -5px;
    transform: rotate(45deg);
  }

  &.left > .arrow {
    right: -5px;
    transform: rotate(135deg);
  }

  &.right > .arrow {
    left: -5px;
    transform: rotate(-45deg);
  }
`;

export interface TooltipProps {
  children: React.ReactElement;
  content: () => JSX.Element;
  placement: 'left' | 'right' | 'top' | 'bottom';
}

export function Tooltip({ children, content, placement }: TooltipProps) {
  const [visible, setVisible] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const childRef = React.useRef<RefWrapper>();
  const child = React.Children.only(children);
  function onMouseOver(e: MouseEvent) {
    setTimer(setTimeout(() => {
      setVisible(true);
    }, 500));
  }
  function onMouseOut(e: MouseEvent) {
    setVisible(false);
    clearTimeout(timer);
  }
  const childClone = React.cloneElement(child, {
    onMouseOver,
    onMouseOut,
  });
  return (
    <React.Fragment>
      <RefWrapper ref={childRef}>{childClone}</RefWrapper>
      <Overlay
        show={visible}
        placement={placement}
        target={ReactDOM.findDOMNode(childRef.current) as Element}
        flip={true}
      >
        {({ props, arrowProps, placement }) => {
          delete props.style.opacity;
          return (
            <TooltipOverlay className={placement} {...props}>
              {content()}
              <div {...arrowProps} className="arrow" />
            </TooltipOverlay>
          );
        }}
      </Overlay>
    </React.Fragment>
  );
}
