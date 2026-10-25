import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

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
                const src = path.resolve(rootDir, 'public/build/.vite/manifest.json');
                const dest = path.resolve(rootDir, 'public/build/manifest.json');
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
            '@': path.resolve(rootDir, './resources/js'),
        },
    },
});
