// GLOBALS - NO WINDOW!!!

// The following are global variables in node that we can access in our program

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module  - info about current module
// process - info about env where the program is being executed. {local vs production environment}

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000)