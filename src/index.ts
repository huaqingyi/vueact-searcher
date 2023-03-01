import { createApp, h } from 'vue';
import App from './app';
import { SearcherOption } from './types';

export * from './types';

export type SOption = { [x: string]: any; options: SearcherOption[]; onChange?: (props: SOption) => any };

export class Searcher {

    constructor(public container: HTMLElement, public option: SOption) {
        import('ant-design-vue').then(ElementPlus => {
            const app = createApp({
                render: () => h(App, option, []),
            });
            app.use(ElementPlus);
            app.mount(this.container);
        });
    }
}
