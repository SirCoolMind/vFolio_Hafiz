import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.tsx',
            ],
            refresh: true,
        }),
        react(),
        {
            name: 'manifest-copy',
            closeBundle() {
                const fs = require('fs');
                const path = require('path');
                const src = path.resolve(__dirname, 'public/build/.vite/manifest.json');
                const dest = path.resolve(__dirname, 'public/build/manifest.json');
                if (fs.existsSync(src)) {
                    fs.copyFileSync(src, dest);
                }
            }
        }
    ],
    build: {
        manifest: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
});
