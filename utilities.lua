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

---@class utilities
local export = {}

---@return integer, integer
function export.screen_centre()
    local width, height = love.graphics.getDimensions()
    return math.floor(width / 2), math.floor(height / 2)
end

---@type { [integer] : love.Font }
local font_cache = {}

---@param text string | number
function export.load_font(text)
    local font = font_cache[text]
    if not font then
        font = love.graphics.newFont(text)
        font_cache[text] = font
    end
    return font
end

---@param text string
---@param y integer?
---@param font_size integer?
function export.print_centred(text, y, font_size)
    local width, height = love.graphics.getDimensions()
    local font = love.graphics.getFont()
    if font_size then
        font = export.load_font(font_size)
    end
    local text_width = font:getWidth(text)
    local text_height = font:getHeight()

    return love.graphics.print(text, width / 2 - text_width / 2, y or (height / 2 - text_height / 2))
end

---@param r number
---@param g number
---@param b number
---@param fn fun()
function export.coloured(r, g, b, fn)
    local old_r, old_g, old_b = love.graphics.getColor()
    love.graphics.setColor(r, g, b)
    fn()
    love.graphics.setColor(old_r, old_g, old_b)
end

---@type {[string] : love.Image}
local img_cache = {}

---@param path string
function export.load_image(path)
    local image = img_cache[path]
    if not image then
        image = love.graphics.newImage(path)
        img_cache[path] = image
    end
    return image
end

---@param path string
---@param x integer
---@param y integer
---@param scale number
function export.draw_image(path, x, y, scale)
    local image = export.load_image(path)
    local width, height = image:getDimensions()
    return export.coloured(1, 1, 1, function()
        return love.graphics.draw(image, x, y, 0, scale, scale, width / 2, height / 2)
    end)
end

return export
