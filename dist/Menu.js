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
var classnames_1 = require("classnames");
/** Drop-down menu class. */
exports.Menu = style_1.styled.div.attrs(function () { return ({
    role: 'menu'
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  margin: 4px 0;\n  min-width: 150px;\n  overflow-x: hidden;\n  position: absolute;\n  padding: 4px 0;\n  z-index: 2;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 3px;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-direction: column;\n  margin: 4px 0;\n  min-width: 150px;\n  overflow-x: hidden;\n  position: absolute;\n  padding: 4px 0;\n  z-index: 2;\n"])), function (props) { return props.theme.menu.bgColor; }, function (props) { return props.theme.menu.borderColor; });
function MenuItemImpl(_a) {
    var onClick = _a.onClick, active = _a.active, eventKey = _a.eventKey, className = _a.className, props = __rest(_a, ["onClick", "active", "eventKey", "className"]);
    function onKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (onClick) {
                e.preventDefault();
                onClick(e);
            }
        }
    }
    return (React.createElement("button", __assign({}, props, { role: "menuitem", "data-event-key": eventKey, className: classnames_1.default(className, { active: active }), onClick: onClick, onKeyDown: onKeyDown })));
}
exports.MenuItemImpl = MenuItemImpl;
/** Menu item. */
exports.MenuItem = style_1.styled(MenuItemImpl).attrs(function () { return ({
    tabIndex: -1,
}); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  margin: 0 4px;\n  outline: none;\n  padding: 4px;\n  white-space: nowrap;\n\n  &[disabled] {\n    opacity: 0.6;\n    > svg {\n      opacity: 0.3;\n    }\n  }\n\n  &:hover:not([disabled]) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n    font-weight: bold;\n  }\n"], ["\n  background-color: transparent;\n  border: none;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  margin: 0 4px;\n  outline: none;\n  padding: 4px;\n  white-space: nowrap;\n\n  &[disabled] {\n    opacity: 0.6;\n    > svg {\n      opacity: 0.3;\n    }\n  }\n\n  &:hover:not([disabled]) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &:focus {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &.active {\n    background-color: ", ";\n    color: ", ";\n    font-weight: bold;\n  }\n"])), function (props) { return props.theme.menu.textColor; }, function (props) { return props.theme.menu.hoverBgColor; }, function (props) { return props.theme.menu.hoverTextColor; }, function (props) { return props.theme.menu.focusBgColor; }, function (props) { return props.theme.menu.focusTextColor; }, function (props) { return props.theme.menu.activeBgColor; }, function (props) { return props.theme.menu.activeTextColor; });
/** Menu divider. */
exports.MenuDivider = style_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  align-self: stretch;\n  border-bottom: 1px solid ", ";\n  display: block;\n  margin: 4px 0;\n"], ["\n  align-self: stretch;\n  border-bottom: 1px solid ", ";\n  display: block;\n  margin: 4px 0;\n"])), function (props) { return props.theme.menu.dividerColor; });
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Menu.js.map