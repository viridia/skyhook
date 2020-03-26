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
exports.FormLayoutCSS = style_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.layout-ledger {\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns: [labels] auto [controls] 1fr;\n    gap: 8px;\n    align-items: flex-start;\n    justify-items: flex-start;\n\n    .form-control {\n      grid-column: controls;\n    }\n  }\n\n  &.layout-stacked {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  &.layout-column {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  &.layout-inline, &.layout-row {\n    display: flex;\n    flex-direction: row;\n\n    > * {\n      margin-left: 8px;\n      &:first-child {\n        margin-left: 0;\n      }\n    }\n  }\n\n  &.layout-inline {\n    align-items: center;\n    flex-flow: wrap;\n  }\n\n  &.layout-row {\n    align-items: flex-start;\n  }\n"], ["\n  &.layout-ledger {\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns: [labels] auto [controls] 1fr;\n    gap: 8px;\n    align-items: flex-start;\n    justify-items: flex-start;\n\n    .form-control {\n      grid-column: controls;\n    }\n  }\n\n  &.layout-stacked {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  &.layout-column {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  &.layout-inline, &.layout-row {\n    display: flex;\n    flex-direction: row;\n\n    > * {\n      margin-left: 8px;\n      &:first-child {\n        margin-left: 0;\n      }\n    }\n  }\n\n  &.layout-inline {\n    align-items: center;\n    flex-flow: wrap;\n  }\n\n  &.layout-row {\n    align-items: flex-start;\n  }\n"])));
function FormGridImpl(_a) {
    var children = _a.children, className = _a.className, _b = _a.layout, layout = _b === void 0 ? 'ledger' : _b, attrs = __rest(_a, ["children", "className", "layout"]);
    return (React.createElement("section", __assign({ className: classnames_1.default(className, "layout-" + layout) }, attrs), children));
}
exports.FormGrid = style_1.styled(FormGridImpl)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), exports.FormLayoutCSS);
exports.FormControlGroup = style_1.styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-column: controls;\n"], ["\n  grid-column: controls;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=FormGrid.js.map