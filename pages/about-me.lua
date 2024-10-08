---@diagnostic disable: duplicate-set-field
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

local utilities = require("utilities")

---@type Page
---@diagnostic disable-next-line: missing-fields
local export = {
    title = "About me",
}
local states = coroutine.create(function ()
    function export.on_draw()
        local mid_x, mid_y = utilities.screen_centre()
        utilities.print_centred("Who am I?", nil, 64)
    end
    coroutine.yield()
    function export.on_draw()
        local mid_x, mid_y = utilities.screen_centre()
        utilities.draw_image("assets/Me.jpeg", mid_x, mid_y, 0.25)
        utilities.print_centred("I am Amrit Bhogal", mid_y + 550, 36)
    end
    coroutine.yield()
    function export.on_draw()
        local mid_x, mid_y = utilities.screen_centre()
        utilities.draw_image("assets/Me.jpeg", mid_x, mid_y, 0.25)
        utilities.print_centred("I am a software developer", mid_y + 550, 36)
    end
    coroutine.yield()
    function export.on_draw()
        local mid_x, mid_y = utilities.screen_centre()
        utilities.draw_image("assets/Me.jpeg", mid_x, mid_y, 0.5)
        utilities.coloured(0, 1, 0, function()
            utilities.print_centred("I am a Lua lover", nil, 72*2)
        end)
    end
end)

--first state
coroutine.resume(states)

function export.on_next()
    if coroutine.status(states) == "dead" then
        return true
    else
        coroutine.resume(states)
        return false
    end
end

return export

