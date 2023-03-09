"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobile = void 0;
function isMobile() {
    var userAgent = navigator.userAgent.toLowerCase();
    // 用 test 匹配浏览器信息
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isMobile = isMobile;

//# sourceMappingURL=.sourcemaps/compositions.js.map
