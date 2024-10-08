local pages = require("pages")

local fonts = {
    header = love.graphics.newFont(32),
    body = love.graphics.newFont(16),
}
love.graphics.setFont(fonts.body)

local current_index = 1

function love.draw()
    local pg = pages[current_index]
    love.graphics.setBackgroundColor(1, 1, 1)

    love.graphics.setColor(0, 0, 0)
    love.graphics.setFont(fonts.header)
    love.graphics.print(pg.title, 0, 0)
    love.graphics.setFont(fonts.body)
    pg.on_draw()
end

---@param key love.KeyConstant
function love.keypressed(key)
    if key == "right" then
        print("Next page")
        current_index = current_index + 1
        if current_index > #pages then
            current_index = 1
        end
    elseif key == "left" then
        print("Previous page")
        current_index = current_index - 1
        if current_index < 1 then
            current_index = #pages
        end
    end
end
