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
function ToggleSwitchImpl(_a) {
    var checked = _a.checked, disabled = _a.disabled, className = _a.className, props = __rest(_a, ["checked", "disabled", "className"]);
    return (React.createElement("button", __assign({}, props, { className: classnames_1.default(className, { checked: checked }), disabled: disabled, role: "switch", "aria-checked": checked }),
        React.createElement("div", { className: "slide" }),
        React.createElement("div", { className: "thumb" })));
}
exports.ToggleSwitch = style_1.styled(ToggleSwitchImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 4px 1px;\n  position: relative;\n\n  &[disabled] {\n    opacity: 0.4;\n    cursor: default;\n  }\n\n  > .slide {\n    background-color: ", ";\n    border: none;\n    border-radius: 7px;\n    height: 14px;\n    transition: background-color linear 0.2s;\n    width: 32px;\n  }\n\n  &:focus > .slide {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  > .thumb {\n    background-color: ", ";\n    border-radius: 9px;\n    box-shadow: 0 2px 2px 1px ", ";\n    height: 19px;\n    top: 1px;\n    left: -1px;\n    position: absolute;\n    transition: transform linear 0.2s, background-color linear 0.3s;\n    width: 19px;\n    /* transition: transform */\n  }\n\n  &.checked {\n    > .slide {\n      background-color: ", ";\n    }\n    > .thumb {\n      transform: translateX(17px);\n      background-color: ", ";\n    }\n  }\n"], ["\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  padding: 4px 1px;\n  position: relative;\n\n  &[disabled] {\n    opacity: 0.4;\n    cursor: default;\n  }\n\n  > .slide {\n    background-color: ", ";\n    border: none;\n    border-radius: 7px;\n    height: 14px;\n    transition: background-color linear 0.2s;\n    width: 32px;\n  }\n\n  &:focus > .slide {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  > .thumb {\n    background-color: ", ";\n    border-radius: 9px;\n    box-shadow: 0 2px 2px 1px ", ";\n    height: 19px;\n    top: 1px;\n    left: -1px;\n    position: absolute;\n    transition: transform linear 0.2s, background-color linear 0.3s;\n    width: 19px;\n    /* transition: transform */\n  }\n\n  &.checked {\n    > .slide {\n      background-color: ", ";\n    }\n    > .thumb {\n      transform: translateX(17px);\n      background-color: ", ";\n    }\n  }\n"])), function (p) { return p.theme.toggle.slideColor; }, function (p) { return p.theme.focusColor; }, function (p) { return p.theme.toggle.thumbColor; }, function (p) { return p.theme.shadowColor; }, function (p) { return p.theme.toggle.checkedSlideColor; }, function (p) { return p.theme.toggle.checkedThumbColor; });
var templateObject_1;
//# sourceMappingURL=ToggleSwitch.js.map