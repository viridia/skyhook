"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var classnames_1 = require("classnames");
var style_1 = require("./style");
var RadioButtonImpl = React.forwardRef(function (_a, ref) {
    var id = _a.id, children = _a.children, className = _a.className, checked = _a.checked, selected = _a.selected, props = __rest(_a, ["id", "children", "className", "checked", "selected"]);
    var disabled = props.disabled;
    return (React.createElement("label", { id: id, className: classnames_1.default(className, { disabled: disabled, selected: selected }), role: "radio", "aria-checked": checked },
        React.createElement("input", __assign({ "aria-hidden": true, type: "radio", ref: ref }, props, { checked: checked })),
        React.createElement("span", { "aria-hidden": true, className: "radio" }),
        React.createElement("span", { className: "caption" }, children)));
});
exports.RadioButton = style_1.styled(RadioButtonImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  outline: none;\n\n  > input {\n    display: none;\n  }\n\n  > .radio {\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    margin-right: 6px;\n  }\n\n  > input:checked ~ .radio:after {\n    content: \"\";\n    display: block;\n    background-color: ", ";\n    border-radius: 50%;\n    left: 3px;\n    top: 3px;\n    position: relative;\n    width: 10px;\n    height: 10px;\n  }\n\n  &.disabled {\n    cursor: default;\n    > .caption {\n      opacity: 0.7;\n    }\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  outline: none;\n\n  > input {\n    display: none;\n  }\n\n  > .radio {\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 50%;\n    width: 16px;\n    height: 16px;\n    margin-right: 6px;\n  }\n\n  > input:checked ~ .radio:after {\n    content: \"\";\n    display: block;\n    background-color: ", ";\n    border-radius: 50%;\n    left: 3px;\n    top: 3px;\n    position: relative;\n    width: 10px;\n    height: 10px;\n  }\n\n  &.disabled {\n    cursor: default;\n    > .caption {\n      opacity: 0.7;\n    }\n  }\n"])), function (p) { return p.theme.textNormal; }, function (p) { return p.theme.button.radio.bgColor; }, function (p) { return p.theme.button.radio.borderColor; }, function (p) { return p.theme.button.radio.textColor; });
var templateObject_1;
//# sourceMappingURL=RadioButton.js.map