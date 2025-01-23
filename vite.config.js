import {defineConfig} from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
        ],
    },
})
