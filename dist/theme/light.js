"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = require("polished");
exports.makeLight = function (color, accent) {
    // const muted = makeSpread(desaturate(0.2, color));
    var textColor = '#222';
    var shadow = polished_1.transparentize(0.6, polished_1.mix(0.3, color, '#000'));
    var c1 = polished_1.darken(0.3, color);
    var c2 = polished_1.darken(0.2, color);
    var c4 = polished_1.mix(0.7, color, '#fff');
    var c5 = polished_1.mix(0.4, color, '#fff');
    var c6 = polished_1.mix(0.3, color, '#fff');
    var c7 = polished_1.mix(0.2, color, '#fff');
    var c8 = polished_1.mix(0.1, color, '#fff');
    var c9 = '#fff';
    return {
        pageColor: c8,
        focusColor: c5,
        shadowColor: shadow,
        textNormal: textColor,
        linkColor: polished_1.darken(0.2, accent),
        button: {
            default: {
                bgColor: c7,
                textColor: textColor,
                borderColor: polished_1.darken(0.1, c7),
            },
            primary: {
                bgColor: c4,
                textColor: textColor,
                borderColor: polished_1.darken(0.1, c4),
            },
            action: {
                bgColor: accent,
                textColor: c8,
                borderColor: polished_1.darken(0.1, accent),
            },
            checkbox: {
                bgColor: c7,
                textColor: c1,
                borderColor: c4,
            },
            radio: {
                bgColor: c7,
                textColor: c1,
                borderColor: c4,
            },
            roundCorners: true,
        },
        textField: {
            bgColor: '#fff',
            borderColor: c7,
            textColor: textColor,
        },
        menu: {
            bgColor: c9,
            textColor: textColor,
            borderColor: polished_1.desaturate(0.4, c5),
            focusBgColor: c6,
            focusTextColor: textColor,
            hoverBgColor: c5,
            hoverTextColor: textColor,
            dividerColor: c5,
        },
        dialog: {
            backdropColor: c1,
            bgColor: c7,
            borderColor: polished_1.darken(0.1, c7),
            headerBgColor: c5,
            headerTextColor: textColor,
        },
        progress: {
            trackColor: c6,
            thumbColor: c4,
            textColor: textColor,
        },
        toggle: {
            slideColor: polished_1.desaturate(0.3, color),
            thumbColor: c9,
            checkedSlideColor: c2,
            checkedThumbColor: polished_1.mix(0.7, accent, '#fff'),
        },
        insetToggle: {
            slideColor: polished_1.desaturate(0.3, color),
            thumbColor: c9,
            checkedSlideColor: c2,
            checkedThumbColor: polished_1.mix(0.3, accent, '#fff'),
        },
        tooltip: {
            bgColor: polished_1.lighten(0.02, c8),
            textColor: textColor,
            borderColor: polished_1.darken(0.15, c8),
        },
    };
};
//# sourceMappingURL=light.js.map