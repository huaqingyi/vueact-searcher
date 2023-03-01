"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabel = void 0;
var ant_design_vue_1 = require("ant-design-vue");
var icons_vue_1 = require("@ant-design/icons-vue");
var lodash_1 = require("lodash");
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    props: ['option', 'modelValue', 'props'],
    emits: ['update:modelValue'],
    setup: function (props, _a) {
        var _this = this;
        var emit = _a.emit;
        var options = (0, vue_1.ref)([]);
        var search = (0, vue_1.ref)('');
        var onSearch = (0, lodash_1.debounce)(function (search) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = options;
                        return [4 /*yield*/, props.option.store(search)];
                    case 1:
                        _a.value = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); }, 500);
        var value = (0, vue_1.computed)({
            get: function () { return props.modelValue; },
            set: function (value) { return emit('update:modelValue', value); },
        });
        (0, vue_1.onMounted)(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = options;
                        return [4 /*yield*/, props.option.store()];
                    case 1:
                        _a.value = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        return { options: options, search: search, onSearch: onSearch, value: value };
    },
    render: function () {
        var _this = this;
        return (0, vue_1.h)('div', { class: 'childcctx' }, [
            (0, vue_1.h)('div', { class: 'cccsearch' }, [
                (0, vue_1.h)(ant_design_vue_1.Input, {
                    size: 'small', 'model-value': this.search,
                    onInput: function (_a) {
                        var target = _a.target;
                        _this.search = target.value || '';
                        _this.onSearch(_this.search);
                    },
                }),
            ]),
        ].concat((0, lodash_1.map)(this.options, function (option) {
            return (0, vue_1.h)('div', {
                class: 'menu', onClick: function () {
                    if (!_this.value)
                        return _this.value = [option];
                    var value = _this.value.slice();
                    var idx = (0, lodash_1.findIndex)(_this.value, function (_a) {
                        var value = _a.value;
                        return value === option.value;
                    });
                    if (idx >= 0)
                        value = value.slice(0, idx).concat(value.slice(idx + 1));
                    else
                        value.push(option);
                    _this.value = value;
                },
            }, [
                (0, vue_1.h)('div', { class: 'menutext' }, [option.label]),
            ].concat((_this.value || []).find(function (_a) {
                var value = _a.value;
                return value === option.value;
            }) ? [
                (0, vue_1.h)(icons_vue_1.CheckOutlined, {}, []),
            ] : []));
        })).concat([
            (0, vue_1.h)('div', { class: 'cccsfooter' }, []),
        ]));
    },
});
function getLabel(option) {
    var _a;
    return _a = {}, _a["".concat(option.label, ": ").concat((0, lodash_1.map)(option.current, function (_a) {
        var value = _a.value;
        return value;
    }).join(','))] = option.value, _a;
}
exports.getLabel = getLabel;

//# sourceMappingURL=.sourcemaps/menus.js.map
