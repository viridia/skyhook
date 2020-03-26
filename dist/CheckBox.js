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
var CheckBoxImpl = React.forwardRef(function (_a, ref) {
    var id = _a.id, children = _a.children, className = _a.className, checked = _a.checked, onChange = _a.onChange, props = __rest(_a, ["id", "children", "className", "checked", "onChange"]);
    var disabled = props.disabled;
    return (React.createElement("label", { id: id, className: classnames_1.default(className, 'form-control', { disabled: disabled }) },
        React.createElement("input", __assign({}, props, { type: "checkbox", checked: checked, ref: ref, onChange: onChange, tabIndex: 0 })),
        React.createElement("span", { "aria-hidden": true, className: "checkbox" }),
        children && React.createElement("span", { className: "caption" }, children)));
});
exports.CheckBox = style_1.styled(CheckBoxImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  cursor: pointer;\n  color: ", ";\n  display: inline-flex;\n  outline: none;\n  position: relative;\n\n  > .checkbox {\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 3px;\n    box-shadow: 0.5px 1px 1px 0 ", ";\n    height: .9rem;\n    margin-right: 6px;\n    position: relative;\n    width: .9rem;\n  }\n\n  &:focus-within > .checkbox {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  > input {\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    height: 1rem;\n    width: 1rem;\n    /* display: none; */\n  }\n\n  &.disabled {\n    cursor: default;\n    > .caption {\n      opacity: 0.7;\n    }\n  }\n\n  > input:checked ~ .checkbox::after {\n    position: absolute;\n    content: '';\n    border-width: 0 3px 3px 0;\n    border-color: ", ";\n    border-style: solid;\n    left: 3px;\n    transform: scaleX(0.7) rotate(45deg);\n    top: -2px;\n    width: .3rem;\n    height: .7rem;\n  }\n\n  > input:indeterminate ~ .checkbox::after {\n    position: absolute;\n    content: '';\n    border-width: 0 0 3px 0;\n    border-color: ", ";\n    border-style: solid;\n    left: 3px;\n    top: .35rem;\n    width: .5rem;\n    height: 0;\n  }\n"], ["\n  align-items: center;\n  cursor: pointer;\n  color: ", ";\n  display: inline-flex;\n  outline: none;\n  position: relative;\n\n  > .checkbox {\n    background-color: ", ";\n    border: 1px solid ", ";\n    border-radius: 3px;\n    box-shadow: 0.5px 1px 1px 0 ", ";\n    height: .9rem;\n    margin-right: 6px;\n    position: relative;\n    width: .9rem;\n  }\n\n  &:focus-within > .checkbox {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  > input {\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    height: 1rem;\n    width: 1rem;\n    /* display: none; */\n  }\n\n  &.disabled {\n    cursor: default;\n    > .caption {\n      opacity: 0.7;\n    }\n  }\n\n  > input:checked ~ .checkbox::after {\n    position: absolute;\n    content: '';\n    border-width: 0 3px 3px 0;\n    border-color: ", ";\n    border-style: solid;\n    left: 3px;\n    transform: scaleX(0.7) rotate(45deg);\n    top: -2px;\n    width: .3rem;\n    height: .7rem;\n  }\n\n  > input:indeterminate ~ .checkbox::after {\n    position: absolute;\n    content: '';\n    border-width: 0 0 3px 0;\n    border-color: ", ";\n    border-style: solid;\n    left: 3px;\n    top: .35rem;\n    width: .5rem;\n    height: 0;\n  }\n"])), function (p) { return p.theme.textNormal; }, function (p) { return p.theme.button.checkbox.bgColor; }, function (p) { return p.theme.button.checkbox.borderColor; }, function (p) { return p.theme.shadowColor; }, function (p) { return p.theme.focusColor; }, function (p) { return p.theme.button.checkbox.textColor; }, function (p) { return p.theme.button.checkbox.borderColor; });
var templateObject_1;
//# sourceMappingURL=CheckBox.js.map