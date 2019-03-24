"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_1 = require("./style");
var polished_1 = require("polished");
var contrastingColor_1 = require("./theme/contrastingColor");
var classnames_1 = require("classnames");
function ChipImpl(_a) {
    var children = _a.children, className = _a.className, onClose = _a.onClose, size = _a.size;
    return (React.createElement("span", { className: classnames_1.default('chip', className, size) },
        onClose && React.createElement("button", { className: "close", onClick: onClose }, "\u2715"),
        React.createElement("span", { className: "title" }, children)));
}
exports.Chip = style_1.styled(ChipImpl).attrs(function (props) { return ({
    titleColor: contrastingColor_1.contrastingColor(props.color),
    hoverColor: polished_1.transparentize(0.4, contrastingColor_1.contrastingColor(props.color)),
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  color: ", ";\n  font-size: 85%;\n  flex-direction: row;\n  height: 24px;\n  overflow: hidden;\n  margin-right: 3px;\n  padding: 0 5px;\n  user-select: none;\n  white-space: nowrap;\n\n  &.small {\n    height: 21px;\n    font-size: 75%;\n    border-radius: 10px;\n  }\n\n  &.smaller {\n    height: 18px;\n    font-size: 70%;\n    border-radius: 9px;\n  }\n\n  &.mini {\n    height: 16px;\n    font-size: 65%;\n    border-radius: 8px;\n  }\n\n  .title {\n    margin-right: 4px;\n    margin-left: 4px;\n  }\n\n  > .close {\n    align-items: center;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    background-color: transparent;\n    display: flex;\n    height: 16px;\n    justify-content: center;\n    margin-right: -4px;\n    outline: none;\n    padding: 0;\n    position: relative;\n    top: 1px;\n    width: 16px;\n    font-weight: bold;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 12px;\n  color: ", ";\n  font-size: 85%;\n  flex-direction: row;\n  height: 24px;\n  overflow: hidden;\n  margin-right: 3px;\n  padding: 0 5px;\n  user-select: none;\n  white-space: nowrap;\n\n  &.small {\n    height: 21px;\n    font-size: 75%;\n    border-radius: 10px;\n  }\n\n  &.smaller {\n    height: 18px;\n    font-size: 70%;\n    border-radius: 9px;\n  }\n\n  &.mini {\n    height: 16px;\n    font-size: 65%;\n    border-radius: 8px;\n  }\n\n  .title {\n    margin-right: 4px;\n    margin-left: 4px;\n  }\n\n  > .close {\n    align-items: center;\n    border: none;\n    color: ", ";\n    cursor: pointer;\n    background-color: transparent;\n    display: flex;\n    height: 16px;\n    justify-content: center;\n    margin-right: -4px;\n    outline: none;\n    padding: 0;\n    position: relative;\n    top: 1px;\n    width: 16px;\n    font-weight: bold;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) { return props.color; }, function (props) { return props.titleColor; }, function (props) { return props.hoverColor; }, function (props) { return props.titleColor; });
exports.Chip.defaultProps = { color: 'gray' };
var templateObject_1;
//# sourceMappingURL=Chip.js.map