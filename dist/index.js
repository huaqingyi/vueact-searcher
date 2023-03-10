"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Searcher = void 0;
// import 'ant-design-vue/dist/antd.css';
// import 'vant/lib/index.css';
// import './styles.less';
var vue_1 = require("vue");
var app_1 = __importDefault(require("./pc/app"));
__exportStar(require("./types"), exports);
var Searcher = /** @class */ (function () {
    function Searcher(container, option) {
        var _this = this;
        this.container = container;
        this.option = option;
        // if (isMobile()) {
        //     import('vant').then(Vant => {
        //         const app = createApp({
        //             render: () => h(MoblieApp, option, []),
        //         });
        //         app.use(Vant);
        //         app.mount(this.container);
        //     }).catch(err => console.error(err));
        // } else {
        Promise.resolve().then(function () { return __importStar(require('ant-design-vue')); }).then(function (ElementPlus) {
            var app = (0, vue_1.createApp)({
                render: function () { return (0, vue_1.h)(app_1.default, option, []); },
            });
            app.use(ElementPlus);
            app.mount(_this.container);
        }).catch(function (err) { return console.error(err); });
        // }
    }
    return Searcher;
}());
exports.Searcher = Searcher;

//# sourceMappingURL=.sourcemaps/index.js.map
