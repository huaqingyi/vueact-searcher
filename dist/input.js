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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabel = void 0;
var ant_design_vue_1 = require("ant-design-vue");
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    props: ['option', 'modelValue', 'props'],
    emits: ['update:modelValue'],
    setup: function (props, _a) {
        var emit = _a.emit;
        var value = (0, vue_1.computed)({
            get: function () { return props.modelValue; },
            set: function (value) { return emit('update:modelValue', value); },
        });
        var current = (0, vue_1.ref)('');
        (0, vue_1.onMounted)(function () { return current.value = props.modelValue; });
        return { value: value, current: current };
    },
    render: function () {
        var _this = this;
        return (0, vue_1.h)('div', { class: 'childcctx' }, [
            (0, vue_1.h)('div', { class: 'childcch' }, [this.option.label]),
            (0, vue_1.h)('div', { class: 'childccc' }, [
                (0, vue_1.h)(ant_design_vue_1.Input, __assign(__assign({ class: 'childcccs', value: this.current, size: 'small', allowClear: true }, (this.option.props || {})), { onChange: function (_a) {
                        var target = _a.target;
                        return _this.current = target.value;
                    } }), []),
            ]),
            (0, vue_1.h)('div', { class: 'childccf' }, [
                (0, vue_1.h)(ant_design_vue_1.Button, {
                    type: 'primary', size: 'small',
                    onClick: function () { return _this.value = _this.current; },
                }, ["\u786E\u5B9A"]),
                (0, vue_1.h)(ant_design_vue_1.Button, { size: 'small' }, ["\u53D6\u6D88"]),
            ]),
        ]);
    },
});
function getLabel(option) {
    var _a;
    return _a = {}, _a["".concat(option.label, ": ").concat(option.current)] = option.value, _a;
}
exports.getLabel = getLabel;

//# sourceMappingURL=.sourcemaps/input.js.map
