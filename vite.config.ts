import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
    plugins: [[vue()]],
    build: {
        target: 'es2015',
        outDir: 'lib',
        lib: {
            name: 'es',
            entry: './packages/index.ts',
            formats: ['es'],
        },
        rollupOptions: {
            input: ['./packages/index.ts'],
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                dir: 'lib',
                entryFileNames: '[name].js',
                // file: 'dist/library.esm.js',
                format: 'es',
                exports: 'named',
            },
        }, // rollup打包配置
    },
});
