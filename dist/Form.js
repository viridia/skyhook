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
var FormGrid_1 = require("./FormGrid");
function FormImpl(_a) {
    var children = _a.children, className = _a.className, _b = _a.layout, layout = _b === void 0 ? 'ledger' : _b, attrs = __rest(_a, ["children", "className", "layout"]);
    return (React.createElement("form", __assign({ className: classnames_1.default(className, "layout-" + layout) }, attrs), children));
}
exports.Form = style_1.styled(FormImpl)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), FormGrid_1.FormLayoutCSS);
var templateObject_1;
//# sourceMappingURL=Form.js.map