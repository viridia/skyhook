import * as React from 'react';
import * as ReactDOM from 'react-dom';
import bind from 'bind-decorator';

interface Props {
  autoSelect?: boolean; // Indicates we want to automatically select the first input text field.
}

/** A component which, when placed inside of a form element, will implement automatic navigation
    between fields when the enter key is pressed. */
export class AutoNavigate extends React.Component<Props> {
  private form: HTMLFormElement;

  public componentDidMount() {
    // Locate the nearest parent form.
    let el = ReactDOM.findDOMNode(this) as HTMLElement;
    while (el) {
      if (el.tagName === 'FORM') {
        this.form = el as HTMLFormElement;
        break;
      }
      el = el.parentNode as HTMLElement;
    }

    // Subscribe to keyboard events.
    if (this.form) {
      this.form.addEventListener('keydown', this.onKeyDown);

      if (this.props.autoSelect) {
        // If the first form element is an input field, then select its contents.
        const elements = this.form.elements;
        if (elements.length > 0 && elements[0].tagName === 'INPUT') {
          (elements[0] as HTMLInputElement).select();
        }
      }
    }
  }

  public componentWillUnmount() {
    // unsubscribe from keyboard events.
    if (this.form) {
      this.form.removeEventListener('keydown', this.onKeyDown);
    }
  }

  public render(): JSX.Element {
    // Need a real DOM element as starting point for search.
    return <div />;
  }

  @bind
  private onKeyDown(e: any) {
    // Enter key
    if (e.key === 'Enter' && this.form) {
      // The list of all focusable elements in the form.
      const elements = this.form.elements;
      if (!elements) {
        return;
      }

      // Figure out the index of the current focused item, or -1 if there focus is outside the form.
      const activeEl = document.activeElement;
      if (activeEl.tagName === 'INPUT') {
        let activeIndex = -1;
        for (let i = 0; i < elements.length; i += 1) {
          if (this.form.elements[i] === activeEl) {
            activeIndex = i;
            break;
          }
        }

        // Increment the index. See if there any any focusable elements following this one.
        while (activeIndex < elements.length - 1) {
          activeIndex += 1;
          // Now set focus to it.
          const nextActive = elements[activeIndex];
          if (nextActive && nextActive.tagName === 'INPUT' || nextActive.tagName === 'TEXTAREA') {
            (nextActive as HTMLInputElement).focus();
            e.preventDefault();
            return;
          }
        }
      }
    }
  }
}
