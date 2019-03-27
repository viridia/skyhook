"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = require("polished");
exports.makeDark = function (color, accent) {
    var textColor = '#fff';
    var darker = polished_1.mix(0.8, color, '#000');
    var shadow = polished_1.transparentize(0.7, darker);
    var c0 = polished_1.lighten(0.05, color);
    var c1 = polished_1.lighten(0.1, color);
    var c2 = polished_1.lighten(0.15, color);
    // const c5 = lighten(0.4, color);
    // const c8 = mix(0.2, color, '#fff');
    var c9 = polished_1.mix(0.1, color, '#fff');
    return {
        pageColor: color,
        focusColor: c1,
        textNormal: textColor,
        button: {
            default: {
                bgColor: c0,
                textColor: c9,
                borderColor: polished_1.lighten(0.1, color),
            },
            primary: {
                bgColor: c1,
                textColor: c9,
            },
            action: {
                bgColor: accent,
                textColor: c9,
            },
        },
        textField: {
            bgColor: polished_1.darken(0.05, color),
            borderColor: c1,
            textColor: c9,
        },
        menu: {
            bgColor: c0,
            textColor: textColor,
            borderColor: darker,
            focusBgColor: c1,
            focusTextColor: textColor,
            hoverBgColor: c2,
            hoverTextColor: textColor,
            dividerColor: darker,
        },
        dialog: {
            backdropColor: c1,
            bgColor: color,
            borderColor: darker,
            headerBgColor: c0,
            headerTextColor: textColor,
            shadowColor: shadow,
        },
        progress: {
            trackColor: darker,
            thumbColor: c2,
            textColor: textColor,
        },
    };
};
//# sourceMappingURL=dark.js.map