import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'; // analyse de bundle


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        visualizer({
            filename: "./bundle-analysis.html",
            open: true,
        }),
    ],
    // build: {
    //     sourcemap: false,
    // },
    // server: {
    //     sourcemap: false,
    // },
});
