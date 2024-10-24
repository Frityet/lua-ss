import emscriptenInit from './luajs';

let luaState = null
let creatingState = false
export async function getLuaState() {
    if (!luaState) {
        while (creatingState) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        creatingState = true
        const LuaJS = await emscriptenInit();
        luaState = await LuaJS.newState();
        console.log('Created Lua state:', luaState);
        creatingState = false
    }
    return luaState;
};
