import { SearcherType, SearcherOption } from '../types';
declare const _default: import("vue").DefineComponent<Readonly<{
    options?: any;
    onChange?: any;
    placeholder?: any;
}>, {
    options: import("vue").Ref<{
        [x: string]: any;
        label: string;
        value: string;
        type?: SearcherType | undefined;
        props?: any;
        store?: ((...props: any[]) => import("../types").SearcherStore) | undefined;
        current?: any;
    }[]>;
    value: import("vue").ComputedRef<any>;
    onChange: (data: string[]) => void;
    onHover: (option: SearcherOption) => void;
    visible: import("vue").Ref<boolean>;
    onVisibleChange: (v: boolean) => void;
    SearcherType: typeof SearcherType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    options?: any;
    onChange?: any;
    placeholder?: any;
}>>>, {
    readonly options?: any;
    readonly onChange?: any;
    readonly placeholder?: any;
}>;
export default _default;
//# sourceMappingURL=app.d.ts.map