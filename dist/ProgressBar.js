"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var style_1 = require("./style");
var classnames_1 = require("classnames");
var polished_1 = require("polished");
var ProgressTrack = style_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 4px;\n  color: ", ";\n  justify-content: center;\n  display: inline-flex;\n  overflow: hidden;\n  position: relative;\n  height: 1.5rem;\n\n  &.small {\n    height: 1rem;\n  }\n\n  &.smaller {\n    height: 0.7rem;\n  }\n\n  &.mini {\n    height: 0.5rem;\n  }\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 4px;\n  color: ", ";\n  justify-content: center;\n  display: inline-flex;\n  overflow: hidden;\n  position: relative;\n  height: 1.5rem;\n\n  &.small {\n    height: 1rem;\n  }\n\n  &.smaller {\n    height: 0.7rem;\n  }\n\n  &.mini {\n    height: 0.5rem;\n  }\n"])), function (p) { return p.theme.progress.trackColor; }, function (p) { return p.theme.progress.textColor; });
var ProgressThumb = style_1.styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: repeating-linear-gradient(\n    -45deg,\n    ", ",\n    ", " 10px,\n    ", " 10px,\n    ", " 20px\n  );\n  background-attachment: fixed;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n"], ["\n  background: repeating-linear-gradient(\n    -45deg,\n    ", ",\n    ", " 10px,\n    ", " 10px,\n    ", " 20px\n  );\n  background-attachment: fixed;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n"])), function (p) { return p.theme.progress.thumbColor; }, function (p) { return p.theme.progress.thumbColor; }, function (p) { return polished_1.darken(.03, p.theme.progress.thumbColor); }, function (p) { return polished_1.darken(.03, p.theme.progress.thumbColor); });
var ProgressContent = style_1.styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: 1;\n"], ["\n  z-index: 1;\n"])));
function ProgressBar(_a) {
    var value = _a.value, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.max, max = _c === void 0 ? 100 : _c, className = _a.className, size = _a.size, children = _a.children;
    var percent = Math.min(100, Math.max(0, (value - min) * 100.0 / Math.max(max - min, 1)));
    return (React.createElement(ProgressTrack, { className: classnames_1.default(className, size) },
        React.createElement(ProgressContent, null, children),
        React.createElement(ProgressThumb, { style: { width: percent + "%" } })));
}
exports.ProgressBar = ProgressBar;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ProgressBar.js.map