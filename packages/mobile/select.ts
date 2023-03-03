import { Button, Select } from 'ant-design-vue';
import { map, uniqBy } from 'lodash';
import { computed, defineComponent, h, onMounted, ref } from 'vue';
import { SearcherOption } from '../types';

export default defineComponent({
    props: ['option', 'modelValue', 'props'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const value = computed({
            get: () => props.modelValue,
            set: value => emit('update:modelValue', value),
        });
        const current = ref<string>('');
        const options = ref<SearcherOption[]>([]);
        onMounted(async () => {
            current.value = props.modelValue;
            options.value = uniqBy<any>((await props.option.store()).concat(props.modelValue ? [props.modelValue] : []), 'value');
        });
        return { value, current, options };
    },
    render() {
        return h('div', { class: 'childcctx' }, [
            h('div', { class: 'childcch' }, [this.option.label]),
            h('div', { class: 'childccc' }, [
                h(Select, {
                    class: 'childcccs', value: this.current || undefined, size: 'small', showSearch: true,
                    filterOption: (input: string, option: any) => option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0, allowClear: true,
                    ...(this.option.props || {}), options: map(this.options, option => ({ value: JSON.stringify(option), label: option.label })),
                    onChange: (current: string) => this.current = current, getPopupContainer: (el: Element) => el.parentElement,
                }, []),
            ]),
            h('div', { class: 'childccf' }, [
                h(Button, {
                    type: 'primary', size: 'small',
                    onClick: () => this.value = this.current ? JSON.parse(this.current) : undefined,
                }, [`确定`]),
                h(Button, { size: 'small' }, [`取消`]),
            ]),
        ]);
    },
});

export function getLabel(option: SearcherOption) {
    return { [`${option.label}: ${option.current.value}`]: option.value };
}
