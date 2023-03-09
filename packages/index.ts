// import 'ant-design-vue/dist/antd.css';
// import 'vant/lib/index.css';
// import './styles.less';
import { createApp, h } from 'vue';
import PCApp from './pc/app';
import MoblieApp from './mobile/app';
import { isMobile } from './compositions';
import { SearcherOption } from './types';

export * from './types';

export type SOption = { [x: string]: any; options: SearcherOption[]; onChange?: (props: SOption) => any };

export class Searcher {

    constructor(public container: HTMLElement, public option: SOption) {
        // if (isMobile()) {
        //     import('vant').then(Vant => {
        //         const app = createApp({
        //             render: () => h(MoblieApp, option, []),
        //         });
        //         app.use(Vant);
        //         app.mount(this.container);
        //     }).catch(err => console.error(err));
        // } else {
        import('ant-design-vue').then(ElementPlus => {
            const app = createApp({
                render: () => h(PCApp, option, []),
            });
            app.use(ElementPlus);
            app.mount(this.container);
        }).catch(err => console.error(err));
        // }
    }
}
