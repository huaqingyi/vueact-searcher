import { SearcherOption } from '../types';
declare const _default: import("vue").DefineComponent<Readonly<{
    props?: any;
    option?: any;
    modelValue?: any;
}>, {
    value: import("vue").WritableComputedRef<any>;
    current: import("vue").Ref<string>;
    options: import("vue").Ref<{
        [x: string]: any;
        label: string;
        value: string;
        type?: import("../types").SearcherType | undefined;
        props?: any;
        store?: ((...props: any[]) => import("../types").SearcherStore) | undefined;
        current?: any;
    }[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    props?: any;
    option?: any;
    modelValue?: any;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly props?: any;
    readonly option?: any;
    readonly modelValue?: any;
}>;
export default _default;
export declare function getLabel(option: SearcherOption): {
    [x: string]: string;
};
