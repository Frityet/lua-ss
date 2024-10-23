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
    title = "Projects I made in Lua",
}

---@param projects { name: string, description: string, image_path: string }[]
local function draw_projects(projects)
    local canvas_width, canvas_height = love.graphics.getDimensions()
    local columns = math.ceil(#projects / 2)
    local spacing_x = canvas_width / (columns + 1)
    local spacing_y = 600
    local img_scale = 0.15
    local border_padding = 30

    for i, project in ipairs(projects) do
        local column = (i - 1) % columns
        local row = math.floor((i - 1) / columns)

        local x = (column + 1) * spacing_x
        local y = 100 + row * spacing_y
        local img = utilities.load_image(project.image_path)
        local img_width, img_height = img:getDimensions()
        local border_width = img_width * img_scale + 2 * border_padding
        local border_height = img_height * img_scale + 160 -- Include space for text

        -- Draw border around the project
        love.graphics.setColor(0, 0, 0) -- Black border
        love.graphics.rectangle("line", x - border_width / 2, y - border_padding, border_width, border_height)

        love.graphics.setColor(1, 1, 1) -- Reset to white for the image
        love.graphics.draw(img, x - (img_width * img_scale) / 2, y, 0, img_scale, img_scale)

        -- Draw project name and description centered below the image
        utilities.coloured(0, 0, 0, function ()
            love.graphics.printf(project.name, x - 200, y + img_height * img_scale + 30, 400, "center")
            love.graphics.printf(project.description, x - 200, y + img_height * img_scale + 80, 400, "center")
        end)
    end
end

function export.on_draw()

    utilities.coloured(1, 1, 1, function () 
        return draw_projects {
            {
                name = "Lua Workshop 1",
                description = "A workshop on the Lua programming language",
                image_path = "assets/lua.png",
            },
            {
                name = "Lua Workshop 2",
                description = "A workshop on the Lua programming language",
                image_path = "assets/lua.png",
            },
            {
                name = "Lua Workshop 3",
                description = "A workshop on the Lua programming language",
                image_path = "assets/lua.png",
            },
            {
                name = "Lua Workshop 4",
                description = "A workshop on the Lua programming language",
                image_path = "assets/lua.png",
            },
            {
                name = "Lua Workshop 5",
                description = "A workshop on the Lua programming language",
                image_path = "assets/lua.png",
            },
            -- {
            --     name = "Lua Workshop 6",
            --     description = "A workshop on the Lua programming language",
            --     image_path = "assets/lua.png",
            -- }
        }
    end)

end


return export

