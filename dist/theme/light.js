"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = require("polished");
exports.makeLight = function (color, accent) {
    // const muted = makeSpread(desaturate(0.2, color));
    var textColor = '#222';
    var shadow = polished_1.transparentize(0.7, polished_1.mix(0.3, color, '#000'));
    var c1 = polished_1.darken(0.3, color);
    var c4 = polished_1.mix(0.7, color, '#fff');
    var c5 = polished_1.mix(0.4, color, '#fff');
    var c6 = polished_1.mix(0.3, color, '#fff');
    var c7 = polished_1.mix(0.2, color, '#fff');
    var c8 = polished_1.mix(0.1, color, '#fff');
    return {
        pageColor: c8,
        focusColor: c5,
        textNormal: textColor,
        // Buttons
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
        },
        // Text inputs
        textField: {
            bgColor: '#fff',
            borderColor: c7,
            textColor: textColor,
        },
        tab: null,
        menu: {
            bgColor: c8,
            textColor: textColor,
            borderColor: c5,
            focusBgColor: c6,
            focusTextColor: textColor,
            hoverBgColor: c5,
            hoverTextColor: textColor,
            activeBgColor: c1,
            activeTextColor: c8,
            dividerColor: c5,
        },
        dialog: {
            backdropColor: c1,
            bgColor: c7,
            borderColor: polished_1.darken(0.1, c7),
            headerBgColor: c5,
            headerTextColor: textColor,
            shadowColor: shadow,
        },
        progress: null,
    };
};
//# sourceMappingURL=light.js.map