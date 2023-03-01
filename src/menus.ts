import { Input } from 'ant-design-vue';
import { CheckOutlined } from '@ant-design/icons-vue';
import { debounce, findIndex, map } from 'lodash';
import { computed, defineComponent, h, onMounted, ref } from 'vue';
import { SearcherOption } from './types';

export default defineComponent({
    props: ['option', 'modelValue', 'props'],
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const options = ref<SearcherOption[]>([]);
        const search = ref<string>('');
        const onSearch = debounce(async search => {
            options.value = await props.option.store(search);
        }, 500);

        const value = computed({
            get: () => props.modelValue,
            set: value => emit('update:modelValue', value),
        });

        onMounted(async () => {
            options.value = await props.option.store();
        });
        return { options, search, onSearch, value };
    },
    render() {
        return h('div', { class: 'childcctx' }, [
            h('div', { class: 'cccsearch' }, [
                h(Input, {
                    size: 'small', 'model-value': this.search,
                    onInput: ({ target }) => {
                        this.search = target.value || '';
                        this.onSearch(this.search);
                    },
                }),
            ]),
        ].concat(map(this.options, option => {
            return h('div', {
                class: 'menu', onClick: () => {
                    if (!this.value) return this.value = [option];
                    let value: any[] = this.value.slice();
                    const idx = findIndex(this.value, ({ value }: any) => value === option.value);
                    if (idx >= 0) value = value.slice(0, idx).concat(value.slice(idx + 1));
                    else value.push(option);
                    this.value = value;
                },
            }, [
                h('div', { class: 'menutext' }, [option.label]),
            ].concat((this.value || []).find(({ value }: any) => value === option.value) ? [
                h(CheckOutlined, {}, []),
            ] : []));
        })).concat([
            h('div', { class: 'cccsfooter' }, []),
        ]));
    },
});

export function getLabel(option: SearcherOption) {
    return { [`${option.label}: ${map(option.current, ({ value }) => value).join(',')}`]: option.value };
}
