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
var polished_1 = require("polished");
function ActionLinkImpl(_a) {
    var children = _a.children, className = _a.className, attrs = __rest(_a, ["children", "className"]);
    return (React.createElement("a", __assign({ className: classnames_1.default(className) }, attrs), children));
}
/** Looks like a link, but takes an action. */
exports.ActionLink = style_1.styled(ActionLinkImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  cursor: pointer;\n  display: inline;\n  outline: none;\n  text-decoration: underline;\n\n  &[disabled] {\n    opacity: 0.7;\n    pointer-events: none;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  &:hover:not([disabled]) {\n    color: ", ";\n  }\n"], ["\n  color: ", ";\n  cursor: pointer;\n  display: inline;\n  outline: none;\n  text-decoration: underline;\n\n  &[disabled] {\n    opacity: 0.7;\n    pointer-events: none;\n  }\n\n  &:focus {\n    box-shadow: 0 0 0 3px ", ";\n    z-index: 1;\n  }\n\n  &:hover:not([disabled]) {\n    color: ", ";\n  }\n"])), function (p) { return p.theme.linkColor; }, function (p) { return p.theme.focusColor; }, function (p) { return polished_1.darken(0.05, p.theme.linkColor); });
var templateObject_1;
//# sourceMappingURL=ActionLink.js.map