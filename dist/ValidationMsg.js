"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("./style");
var polished_1 = require("polished");
exports.ValidationMsg = style_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 90%;\n  margin-top: 4px;\n\n  &.error {\n    color: ", ";\n  }\n\n  &.warning {\n    color: ", ";\n  }\n\n  &.success {\n    color: ", ";\n  }\n"], ["\n  font-size: 90%;\n  margin-top: 4px;\n\n  &.error {\n    color: ", ";\n  }\n\n  &.warning {\n    color: ", ";\n  }\n\n  &.success {\n    color: ", ";\n  }\n"])), function (p) { return polished_1.mix(0.4, p.theme.textNormal, '#f00'); }, function (p) { return polished_1.mix(0.5, p.theme.textNormal, '#ff0'); }, function (p) { return polished_1.mix(0.7, p.theme.textNormal, '#0f0'); });
var templateObject_1;
//# sourceMappingURL=ValidationMsg.js.map