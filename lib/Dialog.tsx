import * as React from 'react';
import classNames from 'classnames';
import { styled } from './style';
import { Modal } from 'react-overlays';
import { CSSTransition } from 'react-transition-group';
import { mix, shade } from 'polished';
import IconClose from './icons-compiled/IcClose';

type CloseHandler = () => any;
const CloseContext = React.createContext<CloseHandler>(null);

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  hasClose?: boolean;
}

const DialogTransition = (props: any) =>
    <CSSTransition {...props} classNames="dialog" timeout={300} />;

const CloseButton = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  > svg {
    height: 24px;
    fill: ${p => p.theme.dialog.headerTextColor};
  }

  &:hover > svg {
    fill: ${p => mix(0.3, p.theme.dialog.headerBgColor, p.theme.dialog.headerTextColor)};
  }
`;

// Header component
function HeaderImpl({ children, className, hasClose, ...props }: HeaderProps) {
  return (
    <header {...props} className={classNames(className)}>
      {children}
      {hasClose && (
        <div>
          <CloseContext.Consumer>
            {onClose =>
                <CloseButton aria-label="close"><IconClose onClick={onClose} /></CloseButton>}
          </CloseContext.Consumer>
        </div>
      )}
    </header>
  );
}

const Header = styled(HeaderImpl)`
  align-items: center;
  background-color: ${p => p.theme.dialog.headerBgColor};
  border-radius: 5px 5px 0 0;
  color: ${p => p.theme.dialog.headerTextColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  min-height: 32px;
  padding: 0 4px 0 12px;
`;

// Body component
const Body = styled.section`
  color: ${p => p.theme.textNormal};
  display: flex;
  flex-direction: column;
  padding: 12px;

  > p {
    margin-top: 0;
  }
`;

// Footer component
const Footer = styled.footer`
  border-top: 1px solid ${p => shade(0.1, p.theme.dialog.bgColor)};
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: flex-end;
  > * {
    margin-left: 8px;
  }
`;

// Backdrop component
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: ${p => p.theme.dialog.backdropColor};
  transition: opacity .3s ease;

  &.dialog-appear-active, &.dialog-enter, &.dialog-enter-done {
    opacity: 0.3;
  }
`;

const ModalFrameEl = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 7;
  outline: none;
`;

const DialogEl = styled.div`
  background-color: ${p => p.theme.dialog.bgColor};
  border: 1px solid ${p => p.theme.dialog.borderColor};
  border-radius: 6px;
  box-shadow: 1px 2px 6px 6px ${p => p.theme.shadowColor};
  display: flex;
  flex-direction: column;
  max-height: 95%;
  max-width: 95%;
  min-width: 15em;
  position: relative;

  opacity: 0;
  transform: scale(0.5);
  transition: opacity .2s ease, transform .2s ease;
  .dialog-appear-active &, .dialog-enter &, .dialog-enter-done & {
    opacity: 1;
    transform: scale(1);
  }
`;

interface Props {
  children?: React.ReactNode;
  className?: string;
  frameClassName?: string;
  keyboard?: boolean;
  open?: boolean;
  style?: any;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;

  /** Called when the dialog first opens. */
  onOpen?: () => void;

  /** Indicates that the dialog wants to close. */
  onClose: () => void;

  /** Indicates that the dialog has finished closing. */
  onExited?: () => void;
}

/** Modal dialog class */
export class Dialog extends React.Component<Props> {
  public static Header = Header;
  public static Body = Body;
  public static Footer = Footer;

  public render() {
    const {
      open,
      onOpen,
      onClose,
      keyboard = true,
      className,
      style,
      frameClassName,
      children,
      ...props
    } = this.props;

    return (
      <Modal
        show={open}
        backdrop={true}
        transition={DialogTransition}
        backdropTransition={DialogTransition}
        onShow={onOpen}
        onHide={onClose}
        keyboard={keyboard}
        renderBackdrop={() => <Backdrop />}
        {...props}
      >
        <ModalFrameEl className={frameClassName}>
          <DialogEl className={className} style={style}>
            <CloseContext.Provider value={onClose}>
              {children}
            </CloseContext.Provider>
          </DialogEl>
        </ModalFrameEl>
      </Modal>
    );
  }
}
