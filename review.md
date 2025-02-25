Variables(labeled containers): used to store information (data) in your program. Examples are let, const, and var. Let is for variables that might change later. Const is for values that won't change (constants).

Data Types: Various types of information that the "containers" hold.
Examples are:
String: Text, enclosed in quotes (single or double)
Number: Integers and decimals.
Boolean: True or false values.
Objects: Collections of key-value pairs (containers holding multiple items)
Null
Undefined

Operators: symbols that perform actions on values (Do things with the data)
Arithmetic Operators: + (addition), - (subtraction), \* (multiplication), / (division), % (remainder)

    Assignment Operators: = (assigns a value), += (adds and assigns), -= (subtracts and assigns), etc.

    Comparison Operators: == (equals), === (strict equals - checks type and value), != (not equals), > (greater than), < (less than), >= (greater than or equals), <= (less than or equals)

    Logical Operators: && (AND), || (OR), ! (NOT)

Objects: Collections of key-value pairs that let you group related data and functionality. Objects are defined using curly braces {}. Inside, there are properties (keys) and their values.

JSON (JavaScript Object Notation): primarily used to store and transmit data.
A simple way to represent data as text; JSON data is organized into key-value pairs.
In JSON, Keys are always strings (in double quotes) in JSON. In JavaScript, keys can be strings, numbers, or symbols.
JSON doesn't have functions. It's purely for data; it can't store code.
JSON is a text format. It's a string. JavaScript objects are in-memory data structures. You often need to parse JSON (convert it from a string to a JavaScript object) and stringify JavaScript objects (convert them to JSON strings).

This keyword: When a function is called as a method of an object, this refers to that object. Ex: this.name, this.email, this.age

DOM Manipulation: how you use JavaScript to interact with and change that structure – adding, removing, or modifying elements, attributes, and content.
getElementById(): Selects an element based on its unique id attribute.
querySelector(): Selects the first element that matches a given CSS selector.
querySelectorAll(): Selects all elements that match a given CSS selector. It returns a NodeList (which you can iterate over).
addEventListener(): Attaches an event listener to an element. This allows you to execute a function when a specific event occurs
preventDefault(): Used inside an event handler to prevent the default behavior of an event.

A promise can be in one of three states: Pending, Fulfilled (Resolved), and Rejected

Async: You put the async keyword before a function to make it an asynchronous function. An async function implicitly returns a promise.
Await: You use the await keyword inside an async function to pause execution until a promise resolves (fulfills) or rejects.
Fetch is a way to make HTTP requests (like getting data from a server). It returns a promise that resolves to the response from the server. You then usually need to parse the response.
setTimeout is a function that executes a callback function after a specified delay.

Constructor functions define the properties and behaviors that objects of a certain type will have. They are usually named with a capital letter.
You create objects from constructor functions using the new keyword.
New does several things:
Creates a new empty object.
Sets the 'this' context inside the function to the new object.
Calls the constructor function.
Returns the new object.

Factory functions are used to create objects. They don't use the new keyword.
They simply return a new object.

Prototypes are the mechanism behind inheritance in JavaScript. They allow objects to inherit properties and methods from other objects.
Inheritance lets you create new types of objects based on existing ones, promoting code reuse and making your code more organized.
