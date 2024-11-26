import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";
// import { visualizer } from 'rollup-plugin-visualizer'; // analyse de bundle

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        // visualizer({
        //     filename: "./bundle-analysis.html",
        //     open: true,
        // }),
    ],
    resolve: {
        alias: {
            "@components": path.resolve(__dirname, "src/components"),
            "@icons": path.resolve(__dirname, "public/icons"),
            "@styles": path.resolve(__dirname, "src/styles"),
        },
    },
    // build: {
    //     sourcemap: false,
    // },
    // server: {
    //     sourcemap: false,
    // },
});
