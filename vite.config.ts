import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';
import { join, basename } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    // plugins: [
    //     vue(),
    //     // dts({
    //     //     beforeWriteFile: (filePath, content) => {
    //     //         return { filePath: join(__dirname, 'dist', basename(filePath)), content };
    //     //     },
    //     // }),
    // ],
    // build: {
    //     target: 'modules',
    //     outDir: 'dist',
    //     assetsDir: 'assets',
    //     minify: 'terser',
    //     lib: {
    //         entry: join(__dirname, 'packages/index.ts'),
    //         name: 'vueact-searcher',
    //         formats: ['es'],
    //         fileName: 'index',
    //     },
    //     rollupOptions: {
    //         input: join(__dirname, 'packages/index.ts'),
    //         output: {
    //             chunkFileNames: '[name].js',
    //             entryFileNames: '[name].js',
    //             format: 'commonjs',
    //         },
    //     },
    // },
    build: {
        target: 'modules',
        outDir: 'dist',
        minify: true,
        cssCodeSplit: true,
        rollupOptions: {
            input: join(__dirname, 'packages/index.ts'),
            output: {
                format: 'commonjs',
                entryFileNames: '[name].js',
                dir: 'dist',
            },
        },
        lib: {
            entry: join(__dirname, 'packages/index.ts'),
            name: 'vueact-searcher',
            formats: ['es'],
        },
    },
    plugins: [
        vue(), dts({
            beforeWriteFile: (filePath, content) => {
                return { filePath: join(__dirname, 'dist', basename(filePath)), content };
            },
        }),
    ],
});
