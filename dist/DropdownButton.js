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
var react_overlays_1 = require("react-overlays");
var Button_1 = require("./Button");
var style_1 = require("./style");
var Menu_1 = require("./Menu");
var DropdownContainer = style_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n"], ["\n  position: relative;\n  display: inline-block;\n"])));
var DropdownButtonEl = style_1.styled(Button_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  justify-content: space-between;\n  .down-arrow {\n    margin-left: 1rem;\n  }\n"], ["\n  justify-content: space-between;\n  .down-arrow {\n    margin-left: 1rem;\n  }\n"])));
function DropdownButton(_a) {
    var _b = _a.drop, drop = _b === void 0 ? 'down' : _b, disabled = _a.disabled, size = _a.size, _c = _a.alignEnd, alignEnd = _c === void 0 ? false : _c, className = _a.className, children = _a.children, title = _a.title, kind = _a.kind, onSelect = _a.onSelect;
    var _d = React.useState(false), shown = _d[0], setShown = _d[1];
    function onMenuClick(e) {
        setShown(false);
        // TODO: Perhaps this logic should go in the Menu component.
        if (onSelect) {
            var target = e.target;
            while (target) {
                var role = target.getAttribute('role');
                if (role === 'menuitem') {
                    if ('eventKey' in target.dataset) {
                        e.preventDefault();
                        onSelect(target.dataset.eventKey);
                    }
                    break;
                }
                target = target.parentElement;
            }
        }
    }
    return (React.createElement(react_overlays_1.Dropdown, { show: shown, onToggle: function (show) { return setShown(show); }, drop: drop, alignEnd: alignEnd, itemSelector: "button:not(:disabled)" }, function (_a) {
        var props = _a.props;
        return (React.createElement(DropdownContainer, __assign({}, props),
            React.createElement(react_overlays_1.Dropdown.Toggle, null, function (_a) {
                var toggle = _a.toggle, buttonProps = _a.props;
                return (React.createElement(DropdownButtonEl, __assign({ variant: kind, size: size, disabled: disabled, className: className }, buttonProps, { onClick: function (e) { e.preventDefault(); toggle(e); } }),
                    React.createElement("span", { className: "title" }, title),
                    React.createElement("span", { className: "down-arrow" }, "\u25BE")));
            }),
            React.createElement(react_overlays_1.Dropdown.Menu, { flip: true }, function (_a) {
                var show = _a.show, menuProps = _a.props;
                return show && (React.createElement(Menu_1.Menu, __assign({}, menuProps, { onClick: onMenuClick }), children));
            })));
    }));
}
exports.DropdownButton = DropdownButton;
var templateObject_1, templateObject_2;
//# sourceMappingURL=DropdownButton.js.map