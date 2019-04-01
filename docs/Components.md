# Components

## Button

A push button. In addition to accepting all of the properties of a standard HTML ```<button>```,
the ```<Button>``` component defines the following optional properties:

| Name | Meaning | Value |
| -- | -- | -- |
| variant | Style variant | One of ```default```, ```primary```, or ```action``` |
| size | Button size | One of ```normal```, ```small```, ```smaller``` or ```mini``` |

* The ```default``` variant renders a plain button that does not call attention to itself. This
  would typically be used for the 'cancel' button of a dialog, as an example.
* The ```primary``` variant represents a button that stands out, such as the 'submit' or 'OK' button
  of a dialog.
* The ```action``` variant represents a 'call to action' button, that is, the one button on the page
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

## Forms

### Form

The ```<Form>``` component renders a standard HTML form, however the internal layout can be changed
via the 'layout' attribute:

* ```ledger```: Arrange the controls in a grid with labels on the left, and input fields on
  the right (uses CSS grid). Individual components can control whether they are considered as
  labels or controls for layour purposes by setting the CSS 'grid-column' property.
* ```row``: Arrange the labels and controls in a row (uses a CSS flexbox).
* ```column``: Arrange the labels and controls in a column, aligned to the left (uses a CSS flexbox).
* ```stack``: Arrange the labels and controls in a column, centered (uses a CSS flexbox).
* ```inline``: Uses inline layout for all children.

```js
<Form layout="ledger" onSubmit={() => console.log('submitted')}>
  <AutoNavigate />
  <FormLabel>Street:</FormLabel>
  <TextInput value={street} onChange={() => setStreet(e.target.value)} />
  <FormLabel>City:</FormLabel>
  <TextInput value={city} onChange={() => setCity(e.target.value)} />
  <FormLabel>Misc:</FormLabel>
  <FormControlGroup>Misc text</FormControlGroup>
</Button>
```

### FormGrid

If you want to use the layout logic without an actual HTML form element, use ```<FormGrid>```.

### FormLabel

A label for a form input element. This will be placed in the 'labels' column in ```ledger```
form layouts.

### FormControlGroup

Wrap a component with ```<FormControlGroup>``` to force it to be placed in the 'controls'
column.

Note that text input fields, checkboxes and radio buttons are automatically considered controls
for layout purposes.

### AutoNavigate

Placing an ```<AutoNavigate>``` component inside of a ```<Form>``` will cause the Enter key to
move focus to the next input field. If the focus is currently on the last field of the form,
pressing Enter will trigger the form's submit event.


## TODO
## Dialog

```js
export { Dialog } from './Dialog';
export { DiscloseButton } from './DiscloseButton';
export { Menu, MenuItem, MenuDivider } from './Menu';
export { RadioButton } from './RadioButton';
export { Spacer } from './Spacer';
export { TextArea } from './TextArea';
export { TextInput } from './TextInput';
export { ValidationMsg } from './ValidationMsg';
```
