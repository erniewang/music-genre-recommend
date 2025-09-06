int typescriptDeclarations = 1;

/*
Typescript:
    - requires a declartion for every function. especially imported ones.
        1. check for community type definitions: npm install --save-dev @types
        npm search @types/[name]
        2. declare module 'modle name' and write it out if the shit really aint exist.
        usually in node_modules/@types/

    Declarations:
    - declare namespace: creates isolated scope to prevent naming conflicts
    - function object | callable object: javascript object is callable and function
    Example: $('#element) and $.ajax() or $.get(). express(); or express.static();

    async functions 
    
*/