"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_1 = require("./style");
function RadioButtonGroupImpl(_a) {
    var id = _a.id, className = _a.className, children = _a.children, value = _a.value, onChange = _a.onChange;
    // Get the list of radio values
    var values = React.Children.map(children, function (radioItem) {
        if (radioItem.props && radioItem.props.value) {
            return radioItem.props.value;
        }
        return null;
    }).filter(function (a) { return a; });
    // Track which one has focus
    var _b = React.useState(value !== undefined ? value : values[0]), selected = _b[0], setSelected = _b[1];
    // Callback when a radio button is clicked
    function onChangeInput(e) {
        if (e.target.value) {
            var v = e.target.dataset['value'];
            setSelected(v);
            onChange(v);
        }
    }
    // Clone buttons, add props
    var buttons = React.Children.map(children, function (radioItem) {
        if (radioItem.props && radioItem.props.value) {
            var rv = radioItem.props.value;
            return React.cloneElement(radioItem, {
                'data-value': rv,
                id: id + "-" + rv,
                selected: rv === selected,
                checked: rv === value,
                onChange: onChangeInput,
            });
        }
        return radioItem;
    });
    // Keyboard handler
    function onKeyDown(e) {
        switch (e.key) {
            case 'ArrowLeft':
            case 'ArrowUp': {
                e.preventDefault();
                var index = values.indexOf(selected);
                setSelected(index > 0 ? values[index - 1] : values[values.length - 1]);
                break;
            }
            case 'ArrowRight':
            case 'ArrowDown': {
                e.preventDefault();
                var index = values.indexOf(selected);
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
    return (React.createElement("div", { tabIndex: 0, className: className, onKeyDown: onKeyDown, role: "radiogroup", "aria-activedescendant": selected && id + "-" + selected, "aria-live": "polite" }, buttons));
}
exports.RadioButtonGroup = style_1.styled(RadioButtonGroupImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  outline: none;\n\n  > label {\n    margin-bottom: .4rem;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  &:focus .selected > .radio {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  outline: none;\n\n  > label {\n    margin-bottom: .4rem;\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  &:focus .selected > .radio {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n"])), function (p) { return p.theme.focusColor; });
var templateObject_1;
//# sourceMappingURL=RadioButtonGroup.js.map