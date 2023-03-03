export enum SearcherType {
    MENU, MENUS, INPUT, SELECT, SELECTS, TAGS, DATAPICKER,
}
export type SearcherStore = SearcherOption[] | Promise<SearcherOption[]>;
export interface SearcherOption {
    [x:string]: any;
    label: string;
    value: string;
    type?: SearcherType;
    props?: any;
    store?: (...props: any[]) => SearcherStore;
    current?: any;
}