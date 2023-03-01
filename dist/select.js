"use strict";
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
var lodash_1 = require("lodash");
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    props: ['option', 'modelValue', 'props'],
    emits: ['update:modelValue'],
    setup: function (props, _a) {
        var _this = this;
        var emit = _a.emit;
        var value = (0, vue_1.computed)({
            get: function () { return props.modelValue; },
            set: function (value) { return emit('update:modelValue', value); },
        });
        var current = (0, vue_1.ref)('');
        var options = (0, vue_1.ref)([]);
        (0, vue_1.onMounted)(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        current.value = props.modelValue;
                        _a = options;
                        _b = lodash_1.uniqBy;
                        return [4 /*yield*/, props.option.store()];
                    case 1:
                        _a.value = _b.apply(void 0, [(_c.sent()).concat(props.modelValue ? [props.modelValue] : []), 'value']);
                        return [2 /*return*/];
                }
            });
        }); });
        return { value: value, current: current, options: options };
    },
    render: function () {
        var _this = this;
        return (0, vue_1.h)('div', { class: 'childcctx' }, [
            (0, vue_1.h)('div', { class: 'childcch' }, [this.option.label]),
            (0, vue_1.h)('div', { class: 'childccc' }, [
                (0, vue_1.h)(ant_design_vue_1.Select, __assign(__assign({ class: 'childcccs', value: this.current || undefined, size: 'small', showSearch: true, filterOption: function (input, option) { return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0; }, allowClear: true }, (this.option.props || {})), { options: (0, lodash_1.map)(this.options, function (option) { return ({ value: JSON.stringify(option), label: option.label }); }), onChange: function (current) { return _this.current = current; }, getPopupContainer: function (el) { return el.parentElement; } }), []),
            ]),
            (0, vue_1.h)('div', { class: 'childccf' }, [
                (0, vue_1.h)(ant_design_vue_1.Button, {
                    type: 'primary', size: 'small',
                    onClick: function () { return _this.value = _this.current ? JSON.parse(_this.current) : undefined; },
                }, ["\u786E\u5B9A"]),
                (0, vue_1.h)(ant_design_vue_1.Button, { size: 'small' }, ["\u53D6\u6D88"]),
            ]),
        ]);
    },
});
function getLabel(option) {
    var _a;
    return _a = {}, _a["".concat(option.label, ": ").concat(option.current.value)] = option.value, _a;
}
exports.getLabel = getLabel;

//# sourceMappingURL=.sourcemaps/select.js.map
