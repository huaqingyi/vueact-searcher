export declare enum SearcherType {
    MENU = 0,
    MENUS = 1,
    INPUT = 2,
    SELECT = 3,
    SELECTS = 4,
    TAGS = 5,
    DATAPICKER = 6
}
export type SearcherStore = SearcherOption[] | Promise<SearcherOption[]>;
export interface SearcherOption {
    [x: string]: any;
    label: string;
    value: string;
    type?: SearcherType;
    props?: any;
    store?: (...props: any[]) => SearcherStore;
    current?: any;
}
