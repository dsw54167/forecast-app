import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [tailwindcss(), react()],
    resolve: {
        dedupe: ['react', 'react-dom']
    },
    optimizeDeps: {
        include: ['react', 'react-dom']
    }
});

