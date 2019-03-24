"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = require("polished");
/** Polished's 'readableColor' isn't all that readable. */
function contrastingColor(color) {
    var rgb = polished_1.parseToRgb(color);
    var luminance = (rgb.red * 0.3 + rgb.green * 0.5 + rgb.blue * 0.2) / 255.0;
    return luminance > 0.53 ? 'black' : 'white';
}
exports.contrastingColor = contrastingColor;
//# sourceMappingURL=contrastingColor.js.map