import { normalizePath, defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";
import { viteStaticCopy } from 'vite-plugin-static-copy'

function cwd(other: TemplateStringsArray)
{ return normalizePath(path.resolve(__dirname, ...other.raw)) }

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
