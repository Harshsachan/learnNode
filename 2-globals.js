// GLOBALS - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (common js)
// module - info about current module( file)
// process - info about env where the program is executing.

console.log(__dirname);
setInterval(() => {
    console.log("Hello World")
}, 1000);
setTimeout(() => {
    console.log("Time Out function ")
}, 1000);