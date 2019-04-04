"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_1 = require("./style");
var classnames_1 = require("classnames");
function FormMessageImpl(_a) {
    var children = _a.children, state = _a.state, className = _a.className;
    return (React.createElement("section", { className: classnames_1.default(className, state) }, children));
}
/** Error or warning message for a form. */
exports.FormMessage = style_1.styled(FormMessageImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  grid-column: controls;\n  justify-self: stretch;\n  padding: .4rem 1rem;\n\n  &.success {\n    background-color: #00cc0022;\n    border: 1px solid #00cc0033;\n  }\n\n  &.warning {\n    background-color: #cccc0044;\n    border: 1px solid #cccc0055;\n  }\n\n  &.error {\n    background-color: #ff444433;\n    border: 1px solid #ff444444;\n  }\n"], ["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  grid-column: controls;\n  justify-self: stretch;\n  padding: .4rem 1rem;\n\n  &.success {\n    background-color: #00cc0022;\n    border: 1px solid #00cc0033;\n  }\n\n  &.warning {\n    background-color: #cccc0044;\n    border: 1px solid #cccc0055;\n  }\n\n  &.error {\n    background-color: #ff444433;\n    border: 1px solid #ff444444;\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=FormMessage.js.map