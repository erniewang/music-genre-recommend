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

    async functions:
        - all async functions return a promise. it is just that
        when they dont have any internal promisies/awaits. it acts just 
        like a normal sync function.
    
        importing:
            - when a function from a file is imported. the entire file is ran top down
            = this is called module initialization / side effects. and languages 
            have methods to stop that like. "if __name__ == "__main__":",
            public static void, or if (require.main === module)



    
*/