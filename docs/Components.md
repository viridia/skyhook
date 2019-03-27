# Components

## Button

A push button. In addition to accepting all of the properties of a standard HTML ```<button>```,
the ```<Button>``` component defines the following optional properties:

| Name | Meaning | Value |
| -- | -- | -- |
| kind | Style variant | One of ```default```, ```primary```, or ```action``` |
| size | Button size | One of ```normal```, ```small```, ```smaller``` or ```mini``` |

* The 'default' variant renders a plain button that does not call attention to itself. This would
typically be used for the 'cancel' button of a dialog, as an example.
* The 'primary' variant represents a button that stands out, such as the 'submit' or 'OK' button of
a dialog.
* The 'action' variant represents a 'call to action' button, that is, the one button on the page
that should attract the user's attention first. This would be often used to create a new object,
such as "new contact' or 'new document'.

```js
<Button kind="primary" onClick={() => console.log('clicked')}>
  Click Me!
</Button>
```

### Other Button Variants

```<DismissButton>``` renders as small gray diagonal cross. This is often used to delete entries
in a list or table.

```<DiscloseButton>``` renders as small right-pointing triangle, but rotates when toggled so that
it points downward instead. This is typically used to control UIs that expand and collapse.

## CheckBox

```<CheckBox>``` renders a toggleable checkbox. It accepts all of the regular HTML ```<input>```
attributes. Any children will be rendered via an associated ```<label>``` element.

```js
<CheckBox onClick={() => console.log('clicked')}>
  Opt-in
</CheckBox>
```

## Chip

```<Chip>``` renders a small oval lozenge used to represent a label or tag. One common use for
chips is the recipients of an email being composed. In addition to containing a caption, the chip
can also contain a 'close' button.

Chips have the following attributes:

| Name | Meaning | Value |
| -- | -- | -- |
| className | CSS class name | string |
| color | Color of the chip | A CSS color expression |
| onClose | Close callback | Function callback |
| size | Size variant | One of ```normal```, ```small```, ```smaller``` or ```mini``` |

The Chip will only display a close button if a close callback has been provided.

## TODO
## Dialog
## Forms

```js
export { CheckBox } from './CheckBox';
export { Chip } from './Chip';
export { Dialog } from './Dialog';
export { DiscloseButton } from './DiscloseButton';
export { Form } from './Form';
export { FormLabel } from './FormLabel';
export { FormGrid, FormControlGroup } from './FormGrid';
export { Menu, MenuItem, MenuDivider } from './Menu';
export { RadioButton } from './RadioButton';
export { Spacer } from './Spacer';
export { TextArea } from './TextArea';
export { TextInput } from './TextInput';
export { ValidationMsg } from './ValidationMsg';
```
