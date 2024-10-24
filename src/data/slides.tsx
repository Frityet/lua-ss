import React from 'react';
import Slide from '../components/Slide';
import CodeExecutor from '../components/CodeExecutor';

import luaLogo from "../public/lua.png"
import me from "../public/me.jpeg"

function SlideIntroduction() {
    return (
        <Slide>
            <h1 className="text-5xl font-bold text-center">Introduction to Lua</h1>
            <p className="mt-4 text-2xl text-center">An overview of the Lua programming language.</p>
            <p className="mt-4 text-xl text-center text-gray-500">Fast, embeddable, and versatile scripting language.</p>
            <div className="flex items-center justify-center mt-8">
                <img src={luaLogo} alt="Lua Logo" className="w-32 h-32 object-contain" />
            </div>
        </Slide>
    );
}
function SlideWhatIsLua() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">What is Lua?</h2>
            <ul className="mt-4 list-disc text-2xl ml-8">
                <li>Lightweight, high-level, multi-paradigm programming language</li>
                <li>Designed for embedded use in applications</li>
                <li>Procedural syntax with powerful data description constructs</li>
            </ul>
            <CodeExecutor>
{`
print("Hello, Lua!")
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideUsagesOfLua() {
    let usages = [
        {
            name: "Roblox",
            description: "Used for creating games and experiences in Roblox Studio.",
            iconURL: "https://vectorseek.com/wp-content/uploads/2023/08/Roblox-Studio-Logo-Vector.svg-.png"
        },
        {
            name: "Wikipedia",
            description: "Used for creating templates and modules on Wikipedia.",
            iconURL: "https://pngimg.com/uploads/wikipedia/wikipedia_PNG4.png"
        },
        {
            name: "Angry Birds",
            description: "Used for game logic and level design in the Angry Birds franchise.",
            iconURL: "https://www.ranklogos.com/wp-content/uploads/2014/09/Angry-Birds-Logo.png"
        },
        {
            name: "OpenResty/Nginx",
            description: "An open-source web platform based on Nginx, used for high-performance web applications. Lua scripts are embedded for dynamic content handling, with a large global user base.",
            iconURL: "https://openresty.org/images/logo.png"
        },
        {
            name: "Torch",
            description: "A deep learning library used primarily in AI research for computer vision and NLP.",
            iconURL: "https://www.scan.co.uk/images/3xs/infopages/torch-logo.png"
        },
        {
            name: "VLC Media Player",
            description: "Lua scripts control customization, playlist handling, and extensions in this popular media player.",
            iconURL: "https://www.leavealegacytoday.com/wp-content/uploads/2018/07/1200px-VLC_Icon.svg_.png"
        },
        {
            name: "Neovim",
            description: "A highly extensible text editor that uses Lua for plugins and configuration.",
            iconURL: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg"
        },
        {
            name: "Nmap",
            description: "A widely-used network discovery and security auditing tool with Lua scripting for extending its capabilities.",
            iconURL: "https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2020/04/nmap-logo-256x256-1.png"
        }
    ]

    return (
        <Slide>
            <h2 className="text-4xl font-bold text-center">Usages of Lua</h2>
            <div className="grid grid-cols-2 gap-8 mt-8">
                {usages.map((usage, index) => (
                    <div key={index} className="flex items-center bg-white shadow-md p-4 rounded-lg">
                        <img
                            src={usage.iconURL}
                            alt={usage.name}
                            className="w-16 h-16 object-contain mr-4"
                        />
                        <div>
                            <h3 className="text-2xl font-semibold">{usage.name}</h3>
                            <p className="mt-2 text-lg text-gray-600">{usage.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Slide>
    );
}

function SlideSyntaxBasics() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Syntax Basics</h2>
            <p className="mt-4 text-2xl">Lua has a simple, flexible syntax.</p>
            <CodeExecutor>
                {`
local x = 4

-- Lua function
local function add_x(n)
    return n + x
end

print(add_x(5))  -- prints 9
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideVariablesAndTypes() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Variables and Types</h2>
            <ul className="mt-4 list-disc text-2xl ml-8">
                <li>Dynamic typing</li>
                <li>8 basic types: nil, boolean, number, string, function, table, userdata, thread</li>
                <li>Lua variables are global by default, use <code>local</code> for local variables</li>
                <li>Use <code>type</code> to check the type of a variable</li>
            </ul>
            <CodeExecutor>
                {`
global_var = 10
local a = 10            
local b = "hello"       
local c = true          
local d = function() end
local e = nil           

local f = {}            

print(type(a))  -- prints "number"
print(type(b))  -- prints "string"
print(type(c))  -- prints "boolean"
print(type(d))  -- prints "function"
print(type(e))  -- prints "nil"
print(type(f))  -- prints "table"
`}
            </CodeExecutor>
        </Slide>
    );
}
          
function SlideStrings() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Strings</h2>
            <p className="mt-4 text-2xl">Strings in Lua are immutable sequences of characters.</p>
            <p className="mt-4 text-2xl">You can use single or double quotes to define strings.</p>
            <p className="mt-4 text-2xl">String concatenation uses the <code>..</code> operator.</p>
            <CodeExecutor>
                {`
local name = "Alice"
local greeting = "Hello, "..name
print(greeting)
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideControlStructures() {
    const controlStructures = [
        {
            title: 'if, else, elseif',
            code: `
-- if, elseif, else
local x = 1  -- add your own value to test
if x > 0 then
    print("Positive number")
elseif x == 0 then
    print("Zero")
else
    print("Negative number")
end
`,
        },
        {
            title: 'while loops',
            code: `
-- while loop
local i = 0
while i < 5 do
  print(i)
  i = i + 1
end
`,
        },
        {
            title: 'for loops',
            code: `
-- for loop
for i = 5, 1, -1 do
    print(i)
end
`,
        },
        {
            title: 'repeat loops',
            code: `
-- repeat loop
local i = 0
repeat
    print(i)
    i = i + 1
until i > 5
`,
        },
    ];

    return (
        <Slide>
            <h2 className="text-4xl font-bold text-center">Control Structures</h2>
            <div className="mt-8 grid grid-cols-4 w-full">
                {controlStructures.map((structure, index) => (
                    <div key={index}>
                        <h3 className="text-3xl font-semibold">{structure.title}</h3>
                        <CodeExecutor>
                            {structure.code}
                        </CodeExecutor>
                    </div>
                ))}
            </div>
        </Slide>
    );
}

function SlideFunctions() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Functions</h2>
            <p className="mt-4 text-2xl">Functions are first-class citizens in Lua and can be stored in variables, passed as arguments, and returned from other functions.</p>
            <CodeExecutor>
                {`
-- Lua function example
local function add(a, b)
  return a + b
end
print(add(3, 4)) 

-- functions can be called different ways if the only argument is a string or table
local function print_name(name)
    print("Name:", name)
end

print_name 'Alice'  -- prints "Name: Alice"
print_name "bob"
print [[
this is a multiline string!
its very cool
]]
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideTablesIntro() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Tables in Lua</h2>
            <p className="mt-4 text-2xl">Tables are Lua's primary data structure, acting as both arrays and dictionaries.</p>
            <p className="mt-4 text-2xl">They can be used to store values in an indexed or key-value pair format.</p>
        </Slide>
    );
}

function SlideTablesAsArrays() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Tables as Arrays</h2>
            <p className="mt-4 text-2xl">When used as arrays, tables are indexed starting from 1 (not 0 like in many other languages).</p>
            <CodeExecutor>
                {`
local function print_elements(tbl)
    for i = 1, #tbl do
        print(i, tbl[i])
    end
end
    
-- Lua table as array
print_element { 10, 20, 30 }

-- Output:
-- 10
-- 20
-- 30
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideTablesAsDictionaries() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Tables as Dictionaries</h2>
            <p className="mt-4 text-2xl">Tables can also be used as dictionaries (key-value pairs).</p>
            <p className="mt-4 text-2xl">Keys can be strings, numbers, or any other type.</p>
            <p className="mt-4 text-2xl">Tables can be nested and mixed, allowing for complex data structures.</p>
            <CodeExecutor>
                {`
-- Lua table as dictionary
local dict = {
    name = "John",
    age = 25
}
print(dict["name"], dict.age)

-- Lua nested table
local t = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9},

    some_field = "value"
}
print(t[2][3], t.some_field)
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideManipulatingTables() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Manipulating Tables</h2>
            <p className="mt-4 text-2xl">Tables can be manipulated by adding, removing, or updating elements dynamically.</p>
            <CodeExecutor>
                {`
-- Adding elements to a table
local t = {1, 2, 3}
table.insert(t, 4)  -- Adds 4 at the end
t[5] = 5
t[#t + 1] = 6
print(t[4])

-- Removing an element
table.remove(t, 2)  -- Removes the element at index 2 and shifts the rest
print(t[2])
t[2] = nil  -- Removes the element at index 2, however, it does not shift the rest
if t[2] == nil then
    print("Element 2 is nil")
else
    print("Element 2 is not nil")
end
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideTablesWithFunctions() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Functions in Tables</h2>
            <p className="mt-4 text-2xl">Tables can store functions, allowing them to act like objects in other languages.</p>
            <CodeExecutor>
                {`
-- Function stored in a table
local obj = {
    greet = function(name)
        print("Hello, " .. name)
    end
}

obj.greet("Alice")
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideTablesWithSelf() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Using Self in Tables</h2>
            <p className="mt-4 text-2xl">The keyword <code>self</code> refers to the table itself, allowing for methods that can access and modify the table's fields.</p>
            <CodeExecutor>
                {`
-- Table with a function that uses self
local person = {
    name = "Bob",
    greet = function(self)
        print("Hi, I'm " .. self.name)
    end
}

person:greet()  -- prints "Hi, I'm Bob"
`}
            </CodeExecutor>
            <p className="mt-4 text-2xl">Using <code>:</code> automatically passes the table as <code>self</code> to the function.</p>
        </Slide>
    );
}

function SlideTablesAsObjects() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Tables as Objects</h2>
            <p className="mt-4 text-2xl">By combining tables and functions, you can create object-like behavior in Lua, simulating classes and methods.</p>
            <CodeExecutor>
                {`
-- Simulating a class with a table
local car = {
    brand = "Toyota",
    speed = 0,
    accelerate = function(self, amount)
        self.speed = self.speed + amount
        print(self.brand .. " is now going " .. self.speed .. " km/h")
    end
}

car:accelerate(50)  -- prints "Toyota is now going 50 km/h"
car:accelerate(20)  -- prints "Toyota is now going 70 km/h"
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideIterators() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Iterators</h2>
            <p className="mt-4 text-2xl">Iterators are a powerful feature in Lua for looping over collections.</p>
            <CodeExecutor>
                {`
-- Iterators
local t = {
    1, 2, 3,
    
    key1 = "value1",
    key2 = "value2"
}

print "ipairs"
--iterates over all integer keys
for i, v in ipairs(t) do
    print(i, v)
end

print "pairs"
--iterates over all keys
for k, v in pairs(t) do
    print(k, v)
end

--our own iterator
local function range(x, y)
    return function()
        if x < y then
            x = x + 1
            return x - 1
        end
    end
end

print "range"
for i in range(1, 5) do
    print(i)
end
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideMetatablesIntro() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">What are Metatables?</h2>
            <p className="mt-4 text-2xl">A metatable is a table that defines custom behavior for another table. It allows things like operator overloading and custom indexing.</p>
            <p className="mt-4 text-2xl">You can attach a metatable to any table with the <code>setmetatable</code> function.</p>
            <CodeExecutor>
                {`
-- Basic metatable example
local t = {}
local mt = {
    __add = function(a, b)
        return a + b
    end
}
setmetatable(t, mt)

-- Now t uses mt for addition
local sum = t + 10  -- Works because __add is defined
print(sum)  -- prints 10
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideMetamethodsOverloading() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Operator Overloading with Metamethods</h2>
            <p className="mt-4 text-2xl">Metamethods allow you to overload operators like <code>+</code>, <code>-</code>, <code>*</code>, and more. Here’s an example of overloading addition.</p>
            <CodeExecutor>
                {`
-- Overloading the addition operator
local t1 = {value = 5}
local t2 = {value = 10}
local mt = {
    __add = function(a, b)
        return a.value + b.value
    end
}

setmetatable(t1, mt)
setmetatable(t2, mt)

local result = t1 + t2  -- adds t1.value and t2.value
print(result)  -- prints 15
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideMetamethodsIndexNewIndex() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Custom Indexing with __index and __newindex</h2>
            <div className="flex justify-between mt-4">
                <div className="w-1/2 pr-2">
                    <h3 className="text-3xl font-semibold">__index Example</h3>
                    <p className="mt-2 text-2xl">
                        controls table indexing behavior when a key isn't found.
                    </p>
                    <CodeExecutor>
                        {`
-- Custom indexing with __index
local t = {existing = 1}
local mt = {
    __index = function(table, key)
        return key .. " not found!"
    end
}

setmetatable(t, mt)

print(t.existing)  -- prints 1 (existing key)
print(t.nonexistent)  -- prints "nonexistent not found!"
`}
                    </CodeExecutor>
                </div>
                <div className="w-1/2 pl-2">
                    <h3 className="text-3xl font-semibold">__newindex Example</h3>
                    <p className="mt-2 text-2xl">
                        customizes how new keys are added to the table.
                    </p>
                    <CodeExecutor>
                        {`
-- Custom behavior for new keys with __newindex
local t = {}
local mt = {
    __newindex = function(table, key, value)
        print("Setting key " .. key .. " to value " .. value)
        rawset(table, key, value)  -- to actually set the value
    end
}

setmetatable(t, mt)

t.newKey = 10  -- prints "Setting key newKey to value 10"
print(t.newKey)  -- prints 10
`}
                    </CodeExecutor>
                </div>
            </div>
        </Slide>
    );
}



function SlideMetatablesExampleAdvanced() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Advanced Metatables Example</h2>
            <p className="mt-4 text-2xl">Here’s a more complex example, combining multiple metamethods to simulate a vector-like behavior for tables.</p>
            <CodeExecutor>
                {`
-- Simulating vectors with metatables
local vector = {}
local mt = {
    __add = function(self, b)
        return vector.new(self.x + b.x, self.y + b.y)
    end,
    __sub = function(self, b)
        return vector.new(self.x - b.x, self.y - b.y)
    end,
    __tostring = function(self)
        return "(" .. self.x .. ", " .. self.y .. ")"
    end
}

function vector.new(x, y)
    local v = { x = x, y = y }
    setmetatable(v, mt)
    return v
end

local v1 = vector.new(3, 4)
local v2 = vector.new(1, 2)

local sum = v1 + v2  -- uses __add
local diff = v1 - v2  -- uses __sub

print(sum) 
print(diff)
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideOOPWithMetatablesClass() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">OOP with Metatables: Basic Class</h2>
            <p className="mt-4 text-2xl">In Lua, we can simulate a class using tables and metatables. Here's a basic example of creating a class with methods.</p>

            <h3 className="mt-4 text-3xl font-bold">1. Basic Class</h3>
            <p className="mt-2 text-2xl">A class can be defined by creating a table and setting its metatable to itself using the <code>__index</code> metamethod.</p>
            <CodeExecutor>
                {`
-- Define class "Animal"
local Animal = {}
Animal.__index = Animal

function Animal:new(name, sound)
    local obj = {name = name, sound = sound}
    setmetatable(obj, self)
    return obj
end

function Animal:makeSound()
    print(self.name .. " says " .. self.sound)
end

-- Create an instance of Animal
local animal = Animal:new("Lion", "Roar")
animal:makeSound()
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideOOPWithMetatablesInheritance() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">OOP with Metatables: Inheritance</h2>
            <p className="mt-4 text-2xl">We can extend the functionality of a base class by using inheritance. This is achieved through the <code>__index</code> metamethod in Lua.</p>

            <h3 className="mt-4 text-3xl font-bold">2. Inheritance</h3>
            <p className="mt-2 text-2xl">One class can inherit from another by setting the metatable of the derived class to reference the base class.</p>
            <CodeExecutor>
                {`
-- Define base class "Animal"
local Animal = {}
Animal.__index = Animal

function Animal:new(name, sound)
    local obj = {name = name, sound = sound}
    setmetatable(obj, self)
    return obj
end

function Animal:makeSound()
    print(self.name .. " says " .. self.sound)
end

-- Derived class "Dog" inheriting from Animal
local Dog = setmetatable({}, {__index = Animal})
Dog.__index = Dog

function Dog:new(name)
    local obj = Animal.new(self, name, "Woof")
    setmetatable(obj, self)
    return obj
end

-- Inheritance in action
local dog = Dog:new("Buddy")
dog:makeSound() 
`}
            </CodeExecutor>
        </Slide>
    );
}

function SlideOOPWithMetatablesPolymorphism() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">OOP with Metatables: Polymorphism</h2>
            <p className="mt-4 text-2xl">In Lua, polymorphism allows derived classes to override methods from the base class while maintaining the same interface.</p>

            <h3 className="mt-4 text-3xl font-bold">3. Polymorphism</h3>
            <p className="mt-2 text-2xl">This is demonstrated by overriding methods in derived classes like so:</p>
            <CodeExecutor>
                {`
-- Define base class "Animal"
local Animal = {}
Animal.__index = Animal

function Animal:new(name, sound)
    local obj = {name = name, sound = sound}
    setmetatable(obj, self)
    return obj
end

function Animal:makeSound()
    print(self.name .. " says " .. self.sound)
end

-- Derived class "Dog"
local Dog = setmetatable({}, {__index = Animal})
Dog.__index = Dog

function Dog:new(name)
    return Animal.new(self, name, "Woof")
end

-- Derived class "Cat" overriding makeSound
local Cat = setmetatable({}, {__index = Animal})
Cat.__index = Cat

function Cat:new(name)
    return Animal.new(self, name, "Meow")
end

function Cat:makeSound()
    print(self.name .. " purrs")
end

local function action(animal)
    animal:makeSound()
end

-- Polymorphism in action
local dog = Dog:new("Buddy")
local cat = Cat:new("Whiskers")

action(dog)
action(cat)
`}
            </CodeExecutor>

            <p className="mt-4 text-2xl">In this example, <code>Dog</code> and <code>Cat</code> both inherit from <code>Animal</code>, but <code>Cat</code> overrides the <code>makeSound</code> method.</p>
        </Slide>
    );
}

function SlideMetamethodsTable() {
    const metamethods = [
        { name: "__add", description: "Handles addition using the + operator.", version: "Lua 5.0" },
        { name: "__sub", description: "Handles subtraction using the - operator.", version: "Lua 5.0" },
        { name: "__mul", description: "Handles multiplication using the * operator.", version: "Lua 5.0" },
        { name: "__div", description: "Handles division using the / operator.", version: "Lua 5.0" },
        { name: "__mod", description: "Handles modulo using the % operator.", version: "Lua 5.0" },
        { name: "__pow", description: "Handles exponentiation using the ^ operator.", version: "Lua 5.1" },
        { name: "__unm", description: "Handles negation using the unary - operator.", version: "Lua 5.0" },
        { name: "__concat", description: "Handles concatenation using the .. operator.", version: "Lua 5.0" },
        { name: "__len", description: "Handles length operator using the # operator.", version: "Lua 5.1" },
        { name: "__eq", description: "Handles equality using the == operator.", version: "Lua 5.0" },
        { name: "__lt", description: "Handles less than using the < operator.", version: "Lua 5.0" },
        { name: "__le", description: "Handles less than or equal to using the <= operator.", version: "Lua 5.0" },
        { name: "__index", description: "Handles table indexing when a key is not found.", version: "Lua 5.0" },
        { name: "__newindex", description: "Handles assignment of new keys in a table.", version: "Lua 5.0" },
        { name: "__call", description: "Allows the table to be called like a function.", version: "Lua 5.2" },
        { name: "__tostring", description: "Defines how the table is converted to a string.", version: "Lua 5.1" },
        { name: "__metatable", description: "Prevents access to a table's metatable.", version: "Lua 5.1" },
        { name: "__pairs", description: "Allows custom iteration over a table.", version: "Lua 5.2" },
        { name: "__ipairs", description: "Allows custom iteration over a table with integer keys.", version: "Lua 5.2 (removed in Lua 5.3)" },
        //bitwise operators
        { name: "__band", description: "Handles bitwise AND using the & operator.", version: "Lua 5.3" },
        { name: "__bor", description: "Handles bitwise OR using the | operator.", version: "Lua 5.3" },
        { name: "__bxor", description: "Handles bitwise XOR using the ~ operator.", version: "Lua 5.3" },
        { name: "__bnot", description: "Handles bitwise NOT using the ~ operator.", version: "Lua 5.3" },
        { name: "__shl", description: "Handles bitwise shift left using the << operator.", version: "Lua 5.3" },
        { name: "__shr", description: "Handles bitwise shift right using the >> operator.", version: "Lua 5.3" },
    ];

    return (
        <Slide>
            <h2 className="text-2xl font-bold">Metamethods in Lua</h2>
            <div className="mt-4 overflow-x-auto w-full">
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 font-bold">Metamethod</th>
                            <th className="px-4 py-2 font-bold">Description</th>
                            <th className="px-4 py-2 font-bold">Lua Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {metamethods.map((method, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2"><code>{method.name}</code></td>
                                <td className="border px-4 py-2">{method.description}</td>
                                <td className="border px-4 py-2">{method.version}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Slide>
    );
}

function SlideCoroutinesIntroAndYield() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Coroutines: Basics, Yielding, and Status</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Left column: Basics and Yielding */}
                <div>
                    <h3 className="text-3xl font-bold">Coroutine Basics and Yielding</h3>
                    <p className="mt-2 text-2xl">Coroutines in Lua allow for cooperative multitasking. They can be paused and resumed, making them perfect for managing asynchronous tasks or creating custom iterators.</p>
                </div>

                {/* Right column: Coroutine Status */}
                <div>
                    <h3 className="text-3xl font-bold">Checking Coroutine Status</h3>
                    <p className="mt-2 text-2xl">You can check the status of a coroutine using <code>coroutine.status</code>. It can return the following:</p>
                    <ul className="mt-2 text-1xl list-disc pl-8">
                        <li><strong>running</strong>: The coroutine is currently running.</li>
                        <li><strong>suspended</strong>: The coroutine is paused, waiting to be resumed.</li>
                        <li><strong>normal</strong>: The coroutine is active but not running (e.g., called by another coroutine).</li>
                        <li><strong>dead</strong>: The coroutine has finished execution.</li>
                    </ul>
                </div>

                <CodeExecutor>
                        {`
-- Basic Coroutine
local co = coroutine.create(function()
    for i = 1, 3 do
        print("Coroutine iteration:", i)
        coroutine.yield()  -- Pauses the coroutine
    end
end)

coroutine.resume(co)  -- Starts the coroutine, prints "Coroutine iteration: 1"
coroutine.resume(co)  -- Resumes, prints "Coroutine iteration: 2"
coroutine.resume(co)  -- Resumes, prints "Coroutine iteration: 3"
coroutine.resume(co)  -- Coroutine is finished, no output
`}
                </CodeExecutor>
                <CodeExecutor>
                        {`
-- Coroutine status example
local co = coroutine.create(function()
    print("Coroutine running")
end)

print(coroutine.status(co))  -- Prints "suspended" (before running)
coroutine.resume(co)          -- Starts the coroutine
print(coroutine.status(co))  -- Prints "dead" (after finishing)
`}
                </CodeExecutor>
            </div>
        </Slide>
    );
}

function SlideCoroutineWrapAndIterators() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Using coroutine.wrap and Iterators</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Left column: coroutine.wrap explanation */}
                <div>
                    <h3 className="text-3xl font-bold">coroutine.wrap</h3>
                    <p className="mt-2 text-2xl"><code>coroutine.wrap</code> is a simpler way to use coroutines. Instead of needing to explicitly call <code>coroutine.resume</code>, it returns a function that handles resuming automatically.</p>
                </div>

                {/* Right column: Iterators explanation */}
                <div>
                    <h3 className="text-3xl font-bold">Coroutines as Iterators</h3>
                    <p className="mt-2 text-2xl">Coroutines are commonly used to create custom iterators. Here's an example of using <code>coroutine.wrap</code> to build a simple iterator:</p>
                </div>

                {/* CodeExecutor blocks in the 2nd row */}
                <CodeExecutor>
                    {`
-- Coroutine with wrap
local co = coroutine.wrap(function()
    for i = 1, 3 do
        print("Wrapped coroutine iteration:", i)
        coroutine.yield()
    end
end)

co()  -- prints "Wrapped coroutine iteration: 1"
co()  -- prints "Wrapped coroutine iteration: 2"
co()  -- prints "Wrapped coroutine iteration: 3"
`}
                </CodeExecutor>
                <CodeExecutor>
                    {`
-- Coroutine iterator using wrap
function range(max)
    return coroutine.wrap(function()
        for i = 1, max do
            coroutine.yield(i)  -- Yield each value in the range
        end
    end)
end

for i in range(5) do
    print(i)  -- Prints 1, 2, 3, 4, 5
end
`}
                </CodeExecutor>
            </div>
            <p className="mt-4 text-2xl">In this example, <code>range</code> creates an iterator that yields values from 1 to 5, and we loop over it using a <code>for</code> loop.</p>
        </Slide>
    );
}

function SlideErrorHandling() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold text-center">Error Handling</h2>

            <div className="mt-8 grid grid-cols-2 gap-0">
                <div>
                    <h3 className="text-3xl font-semibold">1. Simple Error Returns</h3>
                    <p className="mt-4 text-2xl">
                        Many Lua functions return <code>nil</code> and an error message when something goes wrong. It’s up to you to check for <code>nil</code> and handle the error gracefully.
                    </p>
                </div>

                <div>
                    <h3 className="text-3xl font-semibold">2. Protected Calls: <code>pcall</code> and <code>xpcall</code></h3>
                    <p className="mt-4 text-2xl">
                        In Lua, you can wrap error-prone code in a protected call using <code>pcall</code> (protected call) or <code>xpcall</code> (extended protected call). This prevents your program from crashing when an error occurs.
                    </p>
                    <p className="mt-4 text-2xl">
                        You can also use <code>xpcall</code> for more control, allowing you to specify an error handler function:
                    </p>
                </div>

                <CodeExecutor>
                        {`
-- Example of nil error handling
local function divide(a, b)
    if b == 0 then
        return nil, "Division by zero error"
    else
        return a / b
    end
end

local result, err = divide(10, 0)
if not result then
    print("Error:", err)
end
`}
                </CodeExecutor>

                <CodeExecutor>
                        {`
-- Error handling using pcall
local status, err = pcall(function()
    error("Something went wrong!")
end)

if not status then
    print("Caught an error:", err)
end
`}
                </CodeExecutor>
            </div>
        </Slide>
    );
}

function SlideStandardLibraries() {
    let libraries = [
        {
            name: "string",
            description: "String manipulation functions. Also present in the string metatable.",
            version: "All"
        },
        {
            name: "utf8",
            description: "UTF-8 aware string manipulation functions.",
            version: "5.3+"
        },
        {
            name: "table",
            description: "Functions for table manipulation (insertion, removal, etc.).",
            version: "All"
        },
        {
            name: "math",
            description: "Basic math functions (trigonometry, logarithms, etc.).",
            version: "All"
        },
        {
            name: "io",
            description: "Input and output facilities (file manipulation, reading, etc.).",
            version: "All"
        },
        {
            name: "os",
            description: "Operating system facilities (date, time, executing commands).",
            version: "All"
        },
        {
            name: "coroutine",
            description: "Support for coroutines, allowing cooperative multitasking.",
            version: "All"
        },
        {
            name: "debug",
            description: "Facilities for debugging and introspection.",
            version: "All"
        },
        {
            name: "jit",
            description: "LuaJIT Just-In-Time compiler control and optimizations.",
            version: "LuaJIT"
        },
        {
            name: "ffi",
            description: "Foreign Function Interface (FFI) to call C functions and use C data structures.",
            version: "LuaJIT"
        },
    ];

    return (
        <Slide>
            <h2 className="text-5xl font-bold">Standard Libraries</h2>
            <p className="mt-4 text-3xl">Lua has a small but powerful standard library for math, I/O, and more. LuaJIT extends this with additional features.</p>

            <table className="table-auto mt-6 text-2xl w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Library</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Version</th>
                    </tr>
                </thead>
                <tbody>
                    {libraries.map((library) => (
                        <tr key={library.name}>
                            <td className="border px-4 py-2 whitespace-nowrap">{library.name}</td>
                            <td className="border px-4 py-2 break-words max-w-lg">{library.description}</td> {/* max-w-lg limits width */}
                            <td className="border px-4 py-2">{library.version}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Slide>
    );
}

function SlideConclusion() {
    return (
        <Slide>
            <h2 className="text-4xl font-bold">Conclusion</h2>
            <p className="mt-4 text-2xl">Lua is a powerful, efficient, lightweight, embeddable scripting language.</p>
            <p className="mt-4 text-xl text-gray-500">It's used in games, embedded systems, and applications requiring quick scripting capabilities.</p>
        </Slide>
    );
}

const slides = [
    SlideIntroduction,
    SlideWhatIsLua,
    SlideUsagesOfLua,
    SlideSyntaxBasics,
    SlideVariablesAndTypes,
    SlideStrings,

    SlideControlStructures,
    SlideFunctions,
    //tables
    SlideTablesIntro,
    SlideTablesAsArrays,
    SlideTablesAsDictionaries,
    SlideManipulatingTables,
    SlideTablesWithFunctions,
    SlideTablesWithSelf,
    SlideTablesAsObjects,

    SlideIterators,
    SlideMetatablesIntro,
    SlideMetamethodsOverloading,
    SlideMetamethodsIndexNewIndex,
    SlideMetatablesExampleAdvanced,
    SlideOOPWithMetatablesClass,
    SlideOOPWithMetatablesInheritance,
    SlideOOPWithMetatablesPolymorphism,
    SlideMetamethodsTable,
    
    SlideCoroutinesIntroAndYield,
    SlideCoroutineWrapAndIterators,

    SlideErrorHandling,
    SlideStandardLibraries,
    SlideConclusion,
];


export default slides;
