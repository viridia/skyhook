"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_1 = require("./style");
var classnames_1 = require("classnames");
var IcPlayArrow_1 = require("./icons-compiled/IcPlayArrow");
var DiscloseButtonEl = style_1.styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 2px;\n  margin-bottom: 0;\n  margin-right: 4px;\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  transition: transform 0.5s ease;\n  transform-origin: 55% 45%;\n  cursor: pointer;\n\n  &.checked {\n    transform: rotate(90deg);\n  }\n\n  > .svg-icon {\n    width: 20px;\n    height: 20px;\n    > path {\n      fill: ", ";\n    }\n  }\n"], ["\n  margin-top: 2px;\n  margin-bottom: 0;\n  margin-right: 4px;\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  transition: transform 0.5s ease;\n  transform-origin: 55% 45%;\n  cursor: pointer;\n\n  &.checked {\n    transform: rotate(90deg);\n  }\n\n  > .svg-icon {\n    width: 20px;\n    height: 20px;\n    > path {\n      fill: ", ";\n    }\n  }\n"])), function (p) { return p.theme.button.primary.textColor; });
function DiscloseButton(props) {
    return (React.createElement(DiscloseButtonEl, { className: classnames_1.default('disclose', { checked: props.checked }), onClick: props.onClick },
        React.createElement(IcPlayArrow_1.default, { className: "svg-icon" })));
}
exports.DiscloseButton = DiscloseButton;
var templateObject_1;
//# sourceMappingURL=DiscloseButton.js.map