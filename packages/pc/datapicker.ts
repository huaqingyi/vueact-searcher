import { Button, DatePicker } from 'ant-design-vue';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import moment, { Moment } from 'moment';
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
        const current = ref<Moment[]>([]);
        onMounted(async () => {
            current.value = props.modelValue;
        });
        return { value, current };
    },
    render() {
        return h('div', { class: 'childcctx' }, [
            h('div', { class: 'childcch' }, [this.option.label]),
            h('div', { class: 'childccc' }, [
                h(DatePicker.RangePicker, {
                    class: 'childcccs', value: this.current, allowClear: true,
                    size: 'small', ...(this.option.props || {}), locale,
                    onChange: (current: Moment[]) => this.current = current,
                    getPopupContainer: (el: Element) => el.parentElement,
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
    const [start, end] = option.current;
    return { [`${option.label}: ${moment(start).format('YYYY-MM-DD')} 至 ${moment(end).format('YYYY-MM-DD')}`]: option.value };
}
