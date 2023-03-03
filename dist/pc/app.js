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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var types_1 = require("../types");
var menu_1 = __importStar(require("./menu"));
var menus_1 = __importStar(require("./menus"));
var input_1 = __importStar(require("./input"));
var select_1 = __importStar(require("./select"));
var selects_1 = __importStar(require("./selects"));
var tags_1 = __importStar(require("./tags"));
var datapicker_1 = __importStar(require("./datapicker"));
var lodash_1 = require("lodash");
var ant_design_vue_1 = require("ant-design-vue");
exports.default = (0, vue_1.defineComponent)({
    components: { Menu: menu_1.default, Menus: menus_1.default, Input: input_1.default, Select: select_1.default, Selects: selects_1.default, Tags: tags_1.default, Datapicker: datapicker_1.default },
    props: ['options', 'onChange', 'placeholder'],
    setup: function (props) {
        var options = (0, vue_1.ref)(props.options);
        (0, vue_1.watch)(options, function () { return props.onChange && props.onChange(options.value); }, { deep: true });
        var value = (0, vue_1.computed)(function () {
            var data = {};
            // console.log(3333, options.value);
            (0, lodash_1.map)(options.value, function (option) {
                if (!option.current)
                    return null;
                if (option.current.length === 0)
                    return null;
                var d = {};
                if (option.type === types_1.SearcherType.MENU)
                    d = (0, menu_1.getLabel)(option);
                if (option.type === types_1.SearcherType.MENUS)
                    d = (0, menus_1.getLabel)(option);
                if (option.type === types_1.SearcherType.INPUT)
                    d = (0, input_1.getLabel)(option);
                if (option.type === types_1.SearcherType.SELECT)
                    d = (0, select_1.getLabel)(option);
                if (option.type === types_1.SearcherType.SELECTS)
                    d = (0, selects_1.getLabel)(option);
                if (option.type === types_1.SearcherType.TAGS)
                    d = (0, tags_1.getLabel)(option);
                if (option.type === types_1.SearcherType.DATAPICKER)
                    d = (0, datapicker_1.getLabel)(option);
                data = __assign(__assign({}, data), d);
            });
            return data;
        });
        function onHover(option) {
            options.value = (0, lodash_1.map)(options.value.slice(), function (opt) {
                if (opt.value === option.value)
                    return __assign(__assign({}, opt), { isHover: true });
                return __assign(__assign({}, opt), { isHover: false });
            });
        }
        var visible = (0, vue_1.ref)(false);
        function onVisibleChange(v) {
            if (v)
                visible.value = v;
        }
        function onChange(data) {
            var diff = (0, lodash_1.difference)(Object.keys(value.value), data);
            (0, lodash_1.map)(diff, function (dkey) {
                var v = value.value[dkey];
                options.value = (0, lodash_1.map)(options.value.slice(), function (option) {
                    if (option.value === v)
                        return __assign(__assign({}, option), { current: [] });
                    return __assign({}, option);
                });
            });
        }
        document.body.addEventListener('mousedown', function (e) { return visible.value = false; });
        return { options: options, value: value, onChange: onChange, onHover: onHover, visible: visible, onVisibleChange: onVisibleChange, SearcherType: types_1.SearcherType };
    },
    render: function () {
        var _this = this;
        return (0, vue_1.h)('div', { class: 'searcher-root', onMousedown: function (e) { return e.stopPropagation(); } }, [
            (0, vue_1.h)(ant_design_vue_1.Select, {
                class: 'sresel', dropdownClassName: 'searcher-menu',
                value: Object.keys(this.value), mode: 'multiple', showSearch: true, allowClear: true,
                filterOption: function (input, option) { return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0; },
                placeholder: this.placeholder, onDropdownVisibleChange: this.onVisibleChange,
                onChange: this.onChange, getPopupContainer: function (el) { return el; },
            }, []),
        ].concat(this.visible ? [
            (0, vue_1.h)('div', { class: 'searcher-root-menu' }, [
                (0, vue_1.h)('div', { class: 'srmctx' }, (0, lodash_1.map)(this.options, function (option) {
                    return (0, vue_1.h)('div', {
                        class: ['menu', { opend: option.isHover || false }],
                        key: option.value, onMouseenter: function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            _this.onHover(option);
                        },
                    }, [
                        option.label,
                        (0, vue_1.h)('div', { class: 'children' }, option.isHover ? [
                            (0, vue_1.h)('div', { class: 'child-container' }, [].concat(option.type === types_1.SearcherType.MENU ? [
                                (0, vue_1.h)(menu_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : []).concat(option.type === types_1.SearcherType.MENUS ? [
                                (0, vue_1.h)(menus_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : []).concat(option.type === types_1.SearcherType.INPUT ? [
                                (0, vue_1.h)(input_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : []).concat(option.type === types_1.SearcherType.SELECT ? [
                                (0, vue_1.h)(select_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : []).concat(option.type === types_1.SearcherType.SELECTS ? [
                                (0, vue_1.h)(selects_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : []).concat(option.type === types_1.SearcherType.TAGS ? [
                                (0, vue_1.h)(tags_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : []).concat(option.type === types_1.SearcherType.DATAPICKER ? [
                                (0, vue_1.h)(datapicker_1.default, { option: option, modelValue: option.current, "onUpdate:modelValue": function (current) { return option.current = current; } }, []),
                            ] : [])),
                        ] : []),
                    ]);
                })),
            ]),
        ] : []));
    },
});

//# sourceMappingURL=../.sourcemaps/pc/app.js.map
