local extension = jit.os == "Windows" and "dll" or jit.os == "OSX" and "dylib" or "so"
package.cpath = string.format("%s;./cimgui/native/?.%s", package.cpath, extension)

local imgui = require("cimgui")

function love.load()
    imgui.love.Init()
    love.window.setMode(800, 600, { resizable = true })
end

function love.draw()
    if imgui.Begin("Test window") then
        imgui.Text("Hello, world!")
    end imgui.End()
    
    -- code to render imgui
    imgui.Render()
    imgui.love.RenderDrawLists()
end

function love.update(dt)
    imgui.love.Update(dt)
    imgui.NewFrame()
end

function love.mousemoved(x, y, ...)
    imgui.love.MouseMoved(x, y)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here
    end
end

function love.mousepressed(x, y, button, ...)
    imgui.love.MousePressed(button)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here 
    end
end

function love.mousereleased(x, y, button, ...)
    imgui.love.MouseReleased(button)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here 
    end
end

function love.wheelmoved(x, y)
    imgui.love.WheelMoved(x, y)
    if not imgui.love.GetWantCaptureMouse() then
        -- your code here 
    end
end

function love.keypressed(key, ...)
    imgui.love.KeyPressed(key)
    if not imgui.love.GetWantCaptureKeyboard() then
        -- your code here 
    end
end

function love.keyreleased(key, ...)
    imgui.love.KeyReleased(key)
    if not imgui.love.GetWantCaptureKeyboard() then
        -- your code here 
    end
end

function love.textinput(t)
    imgui.love.TextInput(t)
    if imgui.love.GetWantCaptureKeyboard() then
        -- your code here 
    end
end

function love.quit()
    return imgui.love.Shutdown()
end

-- for gamepad support also add the following:

function love.joystickadded(joystick)
    imgui.love.JoystickAdded(joystick)
    -- your code here 
end

function love.joystickremoved(joystick)
    imgui.love.JoystickRemoved()
    -- your code here 
end

function love.gamepadpressed(joystick, button)
    imgui.love.GamepadPressed(button)
    -- your code here 
end

function love.gamepadreleased(joystick, button)
    imgui.love.GamepadReleased(button)
    -- your code here 
end
