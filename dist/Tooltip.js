"use strict";
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
var ReactDOM = require("react-dom");
var style_1 = require("./style");
var react_overlays_1 = require("react-overlays");
/** Need a class for ref target. */
var RefWrapper = /** @class */ (function (_super) {
    __extends(RefWrapper, _super);
    function RefWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RefWrapper.prototype.render = function () {
        return this.props.children;
    };
    return RefWrapper;
}(React.Component));
var TooltipOverlay = style_1.styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  box-shadow: 0.5px 1px 1px 0 ", ";\n  color:  ", ";\n  margin: 6px;\n  padding: .5rem;\n  position: absolute;\n\n  > .arrow {\n    position: absolute;\n    background-color: ", ";\n    border-color: ", ";\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    width: 8px;\n    height: 8px;\n  }\n\n  &.top > .arrow {\n    bottom: -5px;\n    transform: rotate(-135deg);\n  }\n\n  &.bottom > .arrow {\n    top: -5px;\n    transform: rotate(45deg);\n  }\n\n  &.left > .arrow {\n    right: -5px;\n    transform: rotate(135deg);\n  }\n\n  &.right > .arrow {\n    left: -5px;\n    transform: rotate(-45deg);\n  }\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  box-shadow: 0.5px 1px 1px 0 ", ";\n  color:  ", ";\n  margin: 6px;\n  padding: .5rem;\n  position: absolute;\n\n  > .arrow {\n    position: absolute;\n    background-color: ", ";\n    border-color: ", ";\n    border-style: solid;\n    border-width: 1px 0 0 1px;\n    width: 8px;\n    height: 8px;\n  }\n\n  &.top > .arrow {\n    bottom: -5px;\n    transform: rotate(-135deg);\n  }\n\n  &.bottom > .arrow {\n    top: -5px;\n    transform: rotate(45deg);\n  }\n\n  &.left > .arrow {\n    right: -5px;\n    transform: rotate(135deg);\n  }\n\n  &.right > .arrow {\n    left: -5px;\n    transform: rotate(-45deg);\n  }\n"])), function (p) { return p.theme.tooltip.bgColor; }, function (p) { return p.theme.tooltip.borderColor; }, function (p) { return p.theme.shadowColor; }, function (p) { return p.theme.tooltip.textColor; }, function (p) { return p.theme.tooltip.bgColor; }, function (p) { return p.theme.tooltip.borderColor; });
function Tooltip(_a) {
    var children = _a.children, content = _a.content, placement = _a.placement;
    var _b = React.useState(false), visible = _b[0], setVisible = _b[1];
    var _c = React.useState(0), timer = _c[0], setTimer = _c[1];
    var childRef = React.useRef();
    var child = React.Children.only(children);
    function onMouseOver(e) {
        setTimer(setTimeout(function () {
            setVisible(true);
        }, 500));
    }
    function onMouseOut(e) {
        setVisible(false);
        clearTimeout(timer);
    }
    var childClone = React.cloneElement(child, {
        onMouseOver: onMouseOver,
        onMouseOut: onMouseOut,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(RefWrapper, { ref: childRef }, childClone),
        React.createElement(react_overlays_1.Overlay, { show: visible, placement: placement, target: ReactDOM.findDOMNode(childRef.current), flip: true }, function (_a) {
            var props = _a.props, arrowProps = _a.arrowProps, placement = _a.placement;
            delete props.style.opacity;
            return (React.createElement(TooltipOverlay, __assign({ className: placement }, props),
                content(),
                React.createElement("div", __assign({}, arrowProps, { className: "arrow" }))));
        })));
}
exports.Tooltip = Tooltip;
var templateObject_1;
//# sourceMappingURL=Tooltip.js.map