import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig({
    // resolve: {
    //     alias: {
    //         luajs: cwd `node_modules/@doridian/luajs/dist/luajs.mjs`
    //     }
    // },
    plugins: [
        react(),
        wasm()
        // viteStaticCopy({
        //     targets: [
        //         {
        //             src: cwd `src/static`,
        //             dest: cwd `dist/`
        //         }
        //     ]
        // })
    ],
    assetsInclude: [
        "**/*.wasm"
    ]
})
