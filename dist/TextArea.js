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
var ValidationMsg_1 = require("./ValidationMsg");
var TextInputContainer_1 = require("./TextInputContainer");
var InputEl = style_1.styled.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  font-family: ubuntu;\n  font-size: 1rem;\n  min-height: 18px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  font-family: ubuntu;\n  font-size: 1rem;\n  min-height: 18px;\n"])), function (p) { return p.theme.textField.bgColor; }, function (p) { return p.theme.textField.textColor; });
var TextAreaImpl = function (_a) {
    var children = _a.children, className = _a.className, containerClassName = _a.containerClassName, validationStatus = _a.validationStatus, validationMsg = _a.validationMsg, attrs = __rest(_a, ["children", "className", "containerClassName", "validationStatus", "validationMsg"]);
    return (React.createElement(TextInputContainer_1.TextInputContainer, { className: classnames_1.default('form-control', containerClassName) },
        React.createElement(InputEl, __assign({ className: classnames_1.default(className, validationStatus) }, attrs), children),
        validationStatus &&
            React.createElement(ValidationMsg_1.ValidationMsg, { className: classnames_1.default(validationStatus) }, validationMsg)));
};
/** Textarea input form control. */
exports.TextArea = style_1.styled(TextAreaImpl)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  outline: none;\n  padding: 6px;\n  resize: none;\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  &.success {\n    box-shadow: inset 0 0 0 2px #00cc0044;\n  }\n\n  &.warning {\n    box-shadow: inset 0 0 0 2px #cccc0066;\n  }\n\n  &.error {\n    box-shadow: inset 0 0 0 2px #ee000033;\n  }\n\n  &::placeholder {\n    font-size: 85%;\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  outline: none;\n  padding: 6px;\n  resize: none;\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  &.success {\n    box-shadow: inset 0 0 0 2px #00cc0044;\n  }\n\n  &.warning {\n    box-shadow: inset 0 0 0 2px #cccc0066;\n  }\n\n  &.error {\n    box-shadow: inset 0 0 0 2px #ee000033;\n  }\n\n  &::placeholder {\n    font-size: 85%;\n  }\n"])), function (p) { return p.theme.textField.bgColor; }, function (p) { return p.theme.textField.borderColor; }, function (p) { return p.theme.focusColor; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=TextArea.js.map