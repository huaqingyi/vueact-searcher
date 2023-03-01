import { Button, Select } from 'ant-design-vue';
import { map } from 'lodash';
import { computed, defineComponent, h, onMounted, ref } from 'vue';
import { SearcherOption } from './types';

export default defineComponent({
    props: ['option', 'modelValue', 'props'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const value = computed({
            get: () => props.modelValue,
            set: value => emit('update:modelValue', value),
        });
        const current = ref<string[]>([]);
        onMounted(() => current.value = props.modelValue);
        return { value, current };
    },
    render() {
        return h('div', { class: 'childcctx' }, [
            h('div', { class: 'childcch' }, [this.option.label]),
            h('div', { class: 'childccc' }, [
                h(Select, {
                    class: 'childcccs', value: this.current, size: 'small', mode: 'tags', ...(this.option.props || {}),
                    onChange: (current: string[]) => this.current = current, getPopupContainer: (el: Element) => el.parentElement,
                }, []),
            ]),
            h('div', { class: 'childccf' }, [
                h(Button, {
                    type: 'primary', size: 'small',
                    onClick: () => this.value = this.current,
                }, [`确定`]),
                h(Button, { size: 'small' }, [`取消`]),
            ]),
        ]);
    },
});

export function getLabel(option: SearcherOption) {
    return { [`${option.label}: ${map(option.current, value => value).join(',')}`]: option.value };
}
