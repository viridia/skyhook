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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("./Button");
var styled_components_1 = require("styled-components");
var IcClose_1 = require("./icons-compiled/IcClose");
exports.DismissButtonStyle = styled_components_1.default(Button_1.Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  justify-content: center;\n  margin: 0 .3rem;\n  padding: 0;\n  height: 20px;\n  font-size: 85%;\n\n  > svg {\n    width: 20px;\n    height: 20px;\n    opacity: .7;\n  }\n"], ["\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  justify-content: center;\n  margin: 0 .3rem;\n  padding: 0;\n  height: 20px;\n  font-size: 85%;\n\n  > svg {\n    width: 20px;\n    height: 20px;\n    opacity: .7;\n  }\n"])));
function DismissButton(props) {
    return React.createElement(exports.DismissButtonStyle, __assign({}, props),
        React.createElement(IcClose_1.default, null));
}
exports.DismissButton = DismissButton;
var templateObject_1;
//# sourceMappingURL=DismissButton.js.map