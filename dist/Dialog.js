"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var react_overlays_1 = require("react-overlays");
var react_transition_group_1 = require("react-transition-group");
var polished_1 = require("polished");
var IcClose_1 = require("./icons-compiled/IcClose");
var CloseContext = React.createContext(null);
var DialogTransition = function (props) {
    return React.createElement(react_transition_group_1.CSSTransition, __assign({}, props, { classNames: "dialog", timeout: 300 }));
};
var CloseButton = style_1.styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  > svg {\n    height: 24px;\n    fill: ", ";\n  }\n\n  &:hover > svg {\n    fill: ", ";\n  }\n"], ["\n  border: none;\n  background: none;\n  outline: none;\n  padding: 0 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 32px;\n  > svg {\n    height: 24px;\n    fill: ", ";\n  }\n\n  &:hover > svg {\n    fill: ", ";\n  }\n"])), function (p) { return p.theme.dialog.headerTextColor; }, function (p) { return polished_1.mix(0.3, p.theme.dialog.headerBgColor, p.theme.dialog.headerTextColor); });
// Header component
function HeaderImpl(_a) {
    var children = _a.children, className = _a.className, hasClose = _a.hasClose, props = __rest(_a, ["children", "className", "hasClose"]);
    return (React.createElement("header", __assign({}, props, { className: classnames_1.default(className) }),
        children,
        hasClose && (React.createElement("div", null,
            React.createElement(CloseContext.Consumer, null, function (onClose) {
                return React.createElement(CloseButton, { "aria-label": "close" },
                    React.createElement(IcClose_1.default, { onClick: onClose }));
            })))));
}
var Header = style_1.styled(HeaderImpl)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 5px 5px 0 0;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: bold;\n  min-height: 32px;\n  padding: 0 4px 0 12px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 5px 5px 0 0;\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-weight: bold;\n  min-height: 32px;\n  padding: 0 4px 0 12px;\n"])), function (p) { return p.theme.dialog.headerBgColor; }, function (p) { return p.theme.dialog.headerTextColor; });
// Body component
var Body = style_1.styled.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n\n  > p {\n    margin-top: 0;\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  padding: 12px;\n\n  > p {\n    margin-top: 0;\n  }\n"])), function (p) { return p.theme.textNormal; });
// Footer component
var Footer = style_1.styled.footer(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-direction: row;\n  padding: 8px;\n  justify-content: flex-end;\n  > * {\n    margin-left: 8px;\n  }\n"], ["\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-direction: row;\n  padding: 8px;\n  justify-content: flex-end;\n  > * {\n    margin-left: 8px;\n  }\n"])), function (p) { return polished_1.shade(0.1, p.theme.dialog.bgColor); });
// Backdrop component
var Backdrop = style_1.styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  background-color: ", ";\n  transition: opacity .3s ease;\n\n  &.dialog-appear-active, &.dialog-enter, &.dialog-enter-done {\n    opacity: 0.3;\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  background-color: ", ";\n  transition: opacity .3s ease;\n\n  &.dialog-appear-active, &.dialog-enter, &.dialog-enter-done {\n    opacity: 0.3;\n  }\n"])), function (p) { return p.theme.dialog.backdropColor; });
var ModalFrameEl = style_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 7;\n  outline: none;\n"], ["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 7;\n  outline: none;\n"])));
var DialogEl = style_1.styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 6px;\n  box-shadow: 1px 2px 6px 6px ", ";\n  display: flex;\n  flex-direction: column;\n  max-height: 95%;\n  max-width: 95%;\n  min-width: 15em;\n  position: relative;\n\n  opacity: 0;\n  transform: scale(0.5);\n  transition: opacity .2s ease, transform .2s ease;\n  .dialog-appear-active &, .dialog-enter &, .dialog-enter-done & {\n    opacity: 1;\n    transform: scale(1);\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 6px;\n  box-shadow: 1px 2px 6px 6px ", ";\n  display: flex;\n  flex-direction: column;\n  max-height: 95%;\n  max-width: 95%;\n  min-width: 15em;\n  position: relative;\n\n  opacity: 0;\n  transform: scale(0.5);\n  transition: opacity .2s ease, transform .2s ease;\n  .dialog-appear-active &, .dialog-enter &, .dialog-enter-done & {\n    opacity: 1;\n    transform: scale(1);\n  }\n"])), function (p) { return p.theme.dialog.bgColor; }, function (p) { return p.theme.dialog.borderColor; }, function (p) { return p.theme.shadowColor; });
/** Modal dialog class */
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialog.prototype.render = function () {
        var _a = this.props, open = _a.open, onOpen = _a.onOpen, onClose = _a.onClose, _b = _a.keyboard, keyboard = _b === void 0 ? true : _b, className = _a.className, style = _a.style, frameClassName = _a.frameClassName, children = _a.children, props = __rest(_a, ["open", "onOpen", "onClose", "keyboard", "className", "style", "frameClassName", "children"]);
        return (React.createElement(react_overlays_1.Modal, __assign({ show: open, backdrop: true, transition: DialogTransition, backdropTransition: DialogTransition, onShow: onOpen, onHide: onClose, keyboard: keyboard, renderBackdrop: function () { return React.createElement(Backdrop, null); } }, props),
            React.createElement(ModalFrameEl, { className: frameClassName },
                React.createElement(DialogEl, { className: className, style: style },
                    React.createElement(CloseContext.Provider, { value: onClose }, children)))));
    };
    Dialog.Header = Header;
    Dialog.Body = Body;
    Dialog.Footer = Footer;
    return Dialog;
}(React.Component));
exports.Dialog = Dialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Dialog.js.map