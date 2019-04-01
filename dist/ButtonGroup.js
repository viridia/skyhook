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
var classnames_1 = require("classnames");
var style_1 = require("./style");
function ButtonGroupImpl(_a) {
    var children = _a.children, className = _a.className, vertical = _a.vertical, attrs = __rest(_a, ["children", "className", "vertical"]);
    return (React.createElement("div", __assign({ className: classnames_1.default(className, { vertical: vertical }) }, attrs), children));
}
exports.ButtonGroup = style_1.styled(ButtonGroupImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  border: none;\n  display: inline-flex;\n  flex-direction: row;\n\n  &.vertical {\n    flex-direction: column;\n  }\n\n  > button {\n    border-radius: 0;\n    margin-right: -1px;\n    &:first-child {\n      border-radius: ", ";\n    }\n    &:last-child {\n      border-radius: ", ";\n      margin-right: 0;\n    }\n  }\n"], ["\n  align-items: center;\n  border: none;\n  display: inline-flex;\n  flex-direction: row;\n\n  &.vertical {\n    flex-direction: column;\n  }\n\n  > button {\n    border-radius: 0;\n    margin-right: -1px;\n    &:first-child {\n      border-radius: ", ";\n    }\n    &:last-child {\n      border-radius: ", ";\n      margin-right: 0;\n    }\n  }\n"])), function (p) { return p.theme.button.roundCorners ? '4px 0 0 4px' : 0; }, function (p) { return p.theme.button.roundCorners ? '0 4px 4px 0' : 0; });
var templateObject_1;
//# sourceMappingURL=ButtonGroup.js.map