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
    title = "The Lua Programming Language, Part 1",
}

function export.on_draw()
    local mid_x, mid_y = utilities.screen_centre()
    utilities.draw_image("assets/lua.png", mid_x, mid_y, 0.25)
    utilities.print_centred("Workshop by Amrit Bhogal", mid_y + 500, 72)
end

return export
