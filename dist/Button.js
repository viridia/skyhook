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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_1 = require("./style");
var polished_1 = require("polished");
var variant_1 = require("./variant");
var ButtonImpl = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, size = _a.size, kind = _a.kind, attrs = __rest(_a, ["children", "className", "size", "kind"]);
    return (React.createElement("button", __assign({ className: className }, attrs), children));
});
/** A standard button. */
exports.Button = style_1.styled(ButtonImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border: ", ";\n  border-radius: 4px;\n  background-color: ", ";\n  color: ", ";\n  display: inline-flex;\n  font-family: ubuntu;\n  font-size: ", ";\n  padding: 0 12px;\n  height: ", ";\n  outline: none;\n  white-space: nowrap;\n\n  &[disabled] {\n    opacity: 0.6;\n    > svg {\n      opacity: 0.3;\n    }\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  &:hover:not([disabled]) {\n    background-color: ", ";\n  }\n\n  &:active:not([disabled]) {\n    background-color: ", ";\n  }\n\n  > svg {\n    margin-right: 4px;\n    margin-left: -5px;\n    fill: ", ";\n\n    &:only-child {\n      margin: 0;\n    }\n  }\n"], ["\n  align-items: center;\n  border: ",
    ";\n  border-radius: 4px;\n  background-color: ", ";\n  color: ", ";\n  display: inline-flex;\n  font-family: ubuntu;\n  font-size: ", ";\n  padding: 0 12px;\n  height: ", ";\n  outline: none;\n  white-space: nowrap;\n\n  &[disabled] {\n    opacity: 0.6;\n    > svg {\n      opacity: 0.3;\n    }\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  &:hover:not([disabled]) {\n    background-color: ", ";\n  }\n\n  &:active:not([disabled]) {\n    background-color: ",
    ";\n  }\n\n  > svg {\n    margin-right: 4px;\n    margin-left: -5px;\n    fill: ", ";\n\n    &:only-child {\n      margin: 0;\n    }\n  }\n"])), function (p) {
    var kind = p.theme.button[p.kind];
    return kind && kind.borderColor ? "1px solid " + kind.borderColor : 'none';
}, function (p) { return p.theme.button[p.kind].bgColor; }, function (p) { return p.theme.button[p.kind].textColor; }, function (p) { return variant_1.FontHeight[p.size]; }, function (p) { return variant_1.ControlHeight[p.size]; }, function (p) { return p.theme.focusColor; }, function (p) { return polished_1.darken(0.05, p.theme.button[p.kind].bgColor); }, function (p) {
    return polished_1.saturate(0.1, polished_1.darken(0.15, p.theme.button[p.kind].bgColor));
}, function (p) { return p.theme.button[p.kind].textColor; });
exports.Button.defaultProps = {
    kind: 'default',
    size: 'normal',
};
var templateObject_1;
//# sourceMappingURL=Button.js.map