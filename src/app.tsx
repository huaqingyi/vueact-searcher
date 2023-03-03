import React, { PureComponent } from 'react';
import { Searcher, SearcherType } from '../dist';

export interface Props {

}

export interface State {

}

export class App extends PureComponent<Props, State> {
    public render() {
        return (
            <div ref={(e: HTMLDivElement) => {
                if (!e) return e;
                if (e.getAttribute('load') === '1') return e;
                e.setAttribute('load', '1');
                new Searcher(e, {
                    placeholder: `请选择条件 .`,
                    options: [
                        {
                            label: `应用`,
                            value: 'appId',
                            type: SearcherType.MENUS,
                            current: [],
                            store: async (name: string) =>
                                Promise.resolve([
                                    { label: 'Test 1', value: 'Test 1' },
                                    { label: 'Test 2', value: 'Test 2' },
                                ]),
                        },
                        {
                            label: `单选`,
                            value: 'only',
                            type: SearcherType.MENU,
                            store: async (name: string) =>
                                Promise.resolve([
                                    { label: 'Test 1', value: 'Test 1' },
                                    { label: 'Test 2', value: 'Test 2' },
                                ]),
                        },
                        {
                            label: `关键字`,
                            value: 'keywords',
                            type: SearcherType.TAGS,
                            current: [],
                            props: { placeholder: '请填写关键字' },
                        },
                        { label: `输入框`, value: 'input', type: SearcherType.INPUT },
                        {
                            label: `下拉`,
                            value: 'select',
                            type: SearcherType.SELECT,
                            store: async (name: string) =>
                                Promise.resolve([
                                    { label: 'Test 1', value: 'Test 1' },
                                    { label: 'Test 2', value: 'Test 2' },
                                ]),
                        },
                        {
                            label: `多下拉`,
                            value: 'selects',
                            type: SearcherType.SELECTS,
                            current: [],
                            store: async (name: string) =>
                                Promise.resolve([
                                    { label: 'Test 1', value: 'Test 1' },
                                    { label: 'Test 2', value: 'Test 2' },
                                ]),
                        },
                        {
                            label: `时间`,
                            value: 'timerange',
                            type: SearcherType.DATAPICKER,
                            current: [],
                        },
                    ],
                    onChange: (config) => {
                        console.log(11111111, config);
                    },
                });
            }}></div>
        );
    }
}
