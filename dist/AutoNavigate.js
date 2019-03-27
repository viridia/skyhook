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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var bind_decorator_1 = require("bind-decorator");
/** A component which, when placed inside of a form element, will implement automatic navigation
    between fields when the enter key is pressed. */
var AutoNavigate = /** @class */ (function (_super) {
    __extends(AutoNavigate, _super);
    function AutoNavigate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoNavigate.prototype.componentDidMount = function () {
        // Locate the nearest parent form.
        var el = ReactDOM.findDOMNode(this);
        while (el) {
            if (el.tagName === 'FORM') {
                this.form = el;
                break;
            }
            el = el.parentNode;
        }
        // Subscribe to keyboard events.
        if (this.form) {
            this.form.addEventListener('keydown', this.onKeyDown);
            if (this.props.autoSelect) {
                // If the first form element is an input field, then select its contents.
                var elements = this.form.elements;
                if (elements.length > 0 && elements[0].tagName === 'INPUT') {
                    elements[0].select();
                }
            }
        }
    };
    AutoNavigate.prototype.componentWillUnmount = function () {
        // unsubscribe from keyboard events.
        if (this.form) {
            this.form.removeEventListener('keydown', this.onKeyDown);
        }
    };
    AutoNavigate.prototype.render = function () {
        // Need a real DOM element as starting point for search.
        return React.createElement("div", null);
    };
    AutoNavigate.prototype.onKeyDown = function (e) {
        // Enter key
        if (e.key === 'Enter' && this.form) {
            // The list of all focusable elements in the form.
            var elements = this.form.elements;
            if (!elements) {
                return;
            }
            // Figure out the index of the current focused item, or -1 if there focus is outside the form.
            var activeEl = document.activeElement;
            if (activeEl.tagName === 'INPUT') {
                var activeIndex = -1;
                for (var i = 0; i < elements.length; i += 1) {
                    if (this.form.elements[i] === activeEl) {
                        activeIndex = i;
                        break;
                    }
                }
                // Increment the index. See if there any any focusable elements following this one.
                while (activeIndex < elements.length - 1) {
                    activeIndex += 1;
                    // Now set focus to it.
                    var nextActive = elements[activeIndex];
                    if (nextActive && nextActive.tagName === 'INPUT' || nextActive.tagName === 'TEXTAREA') {
                        nextActive.focus();
                        e.preventDefault();
                        return;
                    }
                }
            }
        }
    };
    __decorate([
        bind_decorator_1.default,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AutoNavigate.prototype, "onKeyDown", null);
    return AutoNavigate;
}(React.Component));
exports.AutoNavigate = AutoNavigate;
//# sourceMappingURL=AutoNavigate.js.map