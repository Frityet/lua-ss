import { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import { getLuaState } from '../common';
import type { LuaTable } from "../luajs";

export function Terminal({ children }: { children: string })
{
    let lines = children.split('\n');
    return (
        <div className="bg-black text-white font-mono p-4 rounded-lg shadow-lg">
          <div className="overflow-auto h-40">
            {lines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
          </div>
        </div>
      );
}

export default function CodeExecutor({ children }: { children?: string })
{
    const [code, setCode] = useState(children ? children.trimStart() : '');
    const [output, setOutput] = useState('');

    useEffect(() => void (async () => await getLuaState())(), [])

    // function handleExecute()
    // {
    //     // Stub: simulate execution
    //     setOutput('Execution result will appear here.');
    // }
    const handleExecute = async () => {
        setOutput('')
        try {
            const lua = await getLuaState()
            const _G = lua.getGlobalTable()
            //We set this every time because we have multiple code executors
            _G.set('__js_print', (args: any[]) => setOutput((prev) => prev + args.join(' ') + '\n'))
            lua.run(`function print(...)
                local args = {...}
                for i, v in ipairs(args) do
                    args[i] = tostring(v)
                end
                __js_print(nil, args)
            end`)
            await lua.run(code);
        } catch (error: any) {
            setOutput("Error: " + error.message)
        }
    }

    return (
        
        <div className="mt-6 w-full max-w-3xl mx-auto p-4 border rounded bg-white">
            <Editor
                height="35vh"
                width="100%"
                defaultLanguage="lua"
                theme='github'
                defaultValue={children}
                onChange={(value) => setCode(value ?? '')}
                options={{
                    minimap: { enabled: false },
                    lineNumbers: 'on',
                    fontSize: 16,
                }}
            />
            <button
                className="mt-2 mb-2 w-full px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleExecute}
            >
                Execute
            </button>
            <Terminal>{output}</Terminal>
        </div>
    );
}
