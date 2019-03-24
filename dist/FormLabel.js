"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var style_1 = require("./style");
exports.FormLabel = style_1.styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-weight: bold;\n  grid-column: labels;\n  justify-self: end;\n  white-space: nowrap;\n\n  .layout-ledger & {\n    margin-top: 6px;\n  }\n\n  .layout-stacked &, .layout-column & {\n    margin-top: 1rem;\n    margin-bottom: 6px;\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n\n  .layout-inline & {\n    margin-left: 8px;\n    margin-top: 6px;\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n\n  .layout-row & {\n    margin-left: 8px;\n    margin-top: 6px;\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"], ["\n  font-weight: bold;\n  grid-column: labels;\n  justify-self: end;\n  white-space: nowrap;\n\n  .layout-ledger & {\n    margin-top: 6px;\n  }\n\n  .layout-stacked &, .layout-column & {\n    margin-top: 1rem;\n    margin-bottom: 6px;\n    &:first-child {\n      margin-top: 0;\n    }\n  }\n\n  .layout-inline & {\n    margin-left: 8px;\n    margin-top: 6px;\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n\n  .layout-row & {\n    margin-left: 8px;\n    margin-top: 6px;\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=FormLabel.js.map