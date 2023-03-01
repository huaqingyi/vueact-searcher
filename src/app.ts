import { computed, defineComponent, h, ref, watch } from 'vue';
import { SearcherType, SearcherOption } from './types';
import Menu, { getLabel as gm } from './menu';
import Menus, { getLabel as gms } from './menus';
import Input, { getLabel as gi } from './input';
import Select, { getLabel as gs } from './select';
import Selects, { getLabel as gss } from './selects';
import Tags, { getLabel as gt } from './tags';
import Datapicker, { getLabel as gd } from './datapicker';
import { difference, map } from 'lodash';
import { Select as AntSelect } from 'ant-design-vue';

export default defineComponent({
    components: { Menu, Menus, Input, Select, Selects, Tags, Datapicker },
    props: ['options', 'onChange', 'placeholder'],
    setup(props) {
        const options = ref<SearcherOption[]>(props.options);
        watch(options, () => props.onChange && props.onChange(options.value), { deep: true });
        const value = computed(() => {
            let data: any = {};
            // console.log(3333, options.value);
            map(options.value, option => {
                if (!option.current) return null;
                if (option.current.length === 0) return null;
                let d = {};
                if (option.type === SearcherType.MENU) d = gm(option);
                if (option.type === SearcherType.MENUS) d = gms(option);
                if (option.type === SearcherType.INPUT) d = gi(option);
                if (option.type === SearcherType.SELECT) d = gs(option);
                if (option.type === SearcherType.SELECTS) d = gss(option);
                if (option.type === SearcherType.TAGS) d = gt(option);
                if (option.type === SearcherType.DATAPICKER) d = gd(option);
                data = { ...data, ...d };
            });
            return data;
        });

        function onHover(option: SearcherOption) {
            options.value = map(options.value.slice(), opt => {
                if (opt.value === option.value) return { ...opt, isHover: true };
                return { ...opt, isHover: false };
            });
        }

        const visible = ref<boolean>(false);
        function onVisibleChange(v: boolean) {
            if (v) visible.value = v;
        }
        function onChange(data: string[]) {
            const diff = difference(Object.keys(value.value), data);
            map(diff, dkey => {
                const v = value.value[dkey];
                options.value = map(options.value.slice(), option => {
                    if (option.value === v) return { ...option, current: [] };
                    return { ...option };
                });
            });
        }
        document.body.addEventListener('mousedown', e => visible.value = false);
        return { options, value, onChange, onHover, visible, onVisibleChange, SearcherType };
    },
    render() {
        return h('div', { class: 'searcher-root', onMousedown: (e: Event) => e.stopPropagation() }, [
            h(AntSelect, {
                class: 'sresel', dropdownClassName: 'searcher-menu',
                value: Object.keys(this.value), mode: 'multiple', showSearch: true, allowClear: true,
                filterOption: (input: string, option: any) => option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0,
                placeholder: this.placeholder, onDropdownVisibleChange: this.onVisibleChange,
                onChange: this.onChange, getPopupContainer: el => el,
            }, []),
        ].concat(this.visible ? [
            h('div', { class: 'searcher-root-menu' }, [
                h('div', { class: 'srmctx' }, map(this.options, option => {
                    return h('div', {
                        class: ['menu', { opend: option.isHover || false }],
                        key: option.value, onMouseenter: (e: MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.onHover(option);
                        },
                    }, [
                        option.label,
                        h('div', { class: 'children' }, option.isHover ? [
                            h('div', { class: 'child-container' }, ([] as any[]).concat(option.type === SearcherType.MENU ? [
                                h(Menu, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : []).concat(option.type === SearcherType.MENUS ? [
                                h(Menus, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : []).concat(option.type === SearcherType.INPUT ? [
                                h(Input, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : []).concat(option.type === SearcherType.SELECT ? [
                                h(Select, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : []).concat(option.type === SearcherType.SELECTS ? [
                                h(Selects, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : []).concat(option.type === SearcherType.TAGS ? [
                                h(Tags, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : []).concat(option.type === SearcherType.DATAPICKER ? [
                                h(Datapicker, { option, modelValue: option.current, "onUpdate:modelValue": current => option.current = current }, []),
                            ] : [])),
                        ] : []),
                    ]);
                })),
            ]),
        ] : []));
    },
});
