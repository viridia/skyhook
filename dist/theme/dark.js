"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = require("polished");
exports.makeDark = function (color, accent) {
    var textColor = '#fff';
    var darker = polished_1.mix(0.8, color, '#000');
    var shadow = polished_1.transparentize(0.7, darker);
    var c0 = polished_1.lighten(0.05, color);
    var c1 = polished_1.lighten(0.1, color);
    // const c2 = lighten(0.2, color);
    var c9 = polished_1.mix(0.1, color, '#fff');
    return {
        pageColor: color,
        focusColor: c1,
        textNormal: textColor,
        button: {
            default: {
                bgColor: c0,
                textColor: c9,
                borderColor: polished_1.darken(0.03, color),
            },
            primary: {
                bgColor: c1,
                textColor: c9,
                borderColor: polished_1.darken(0.03, color),
            },
            action: {
                bgColor: accent,
                textColor: c9,
                borderColor: polished_1.darken(0.03, color),
            },
        },
        textField: {
            bgColor: polished_1.darken(0.05, color),
            borderColor: c1,
            textColor: c9,
        },
        tab: null,
        menu: null,
        dialog: {
            backdropColor: c1,
            bgColor: color,
            borderColor: darker,
            headerBgColor: c0,
            headerTextColor: textColor,
            shadowColor: shadow,
        },
        progress: null,
    };
};
//# sourceMappingURL=dark.js.map