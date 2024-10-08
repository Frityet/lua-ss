---@class Page
---@field title string
---@field on_load? fun()
---@field on_draw fun()
---@field on_next? love.PixelFormat

---@type Page[]
return {
    require("Pages.intro"),
    require("Pages.about-me"),
}
