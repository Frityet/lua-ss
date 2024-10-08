-- Copyright (C) 2024 frityet
-- 
-- This program is free software: you can redistribute it and/or modify
-- it under the terms of the GNU Affero General Public License as
-- published by the Free Software Foundation, either version 3 of the
-- License, or (at your option) any later version.
-- 
-- This program is distributed in the hope that it will be useful,
-- but WITHOUT ANY WARRANTY; without even the implied warranty of
-- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
-- GNU Affero General Public License for more details.
-- 
-- You should have received a copy of the GNU Affero General Public License
-- along with this program.  If not, see <https://www.gnu.org/licenses/>.



local pages = require("pages")

local fonts = {
    header = love.graphics.newFont(32),
    body = love.graphics.newFont(16),
}
love.graphics.setFont(fonts.body)

local current_index = 1

function love.load()
    love.window.setTitle("Lua Workshop")
    love.window.setMode(0, 0, {fullscreen = true})
end

function love.draw()
    local pg = pages[current_index]
    love.graphics.setBackgroundColor(1, 1, 1)

    love.graphics.setColor(0, 0, 0)
    love.graphics.setFont(fonts.header)
    love.graphics.print(pg.title, 10, 10)
    love.graphics.setFont(fonts.body)
    pg.on_draw()
end

---@param key love.KeyConstant
function love.keypressed(key)
    if key == "right" then
        print("Next page")
        local pg = pages[current_index]

        if not pg.on_next or pg.on_next() then
            current_index = current_index + 1
            if current_index > #pages then
                current_index = 1
            end
        end
    elseif key == "left" then
        print("Previous page")
        current_index = current_index - 1
        if current_index < 1 then
            current_index = #pages
        end
    end
end
