import { SearcherOption } from './types';
export * from './types';
export type SOption = {
    [x: string]: any;
    options: SearcherOption[];
    onChange?: (props: SOption) => any;
};
export declare class Searcher {
    container: HTMLElement;
    option: SOption;
    constructor(container: HTMLElement, option: SOption);
}
