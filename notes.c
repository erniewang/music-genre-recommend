int a = 1;

/*
Local Vs Global Installation:
    - npm start | npm test: npm adds a bin to the path of the specified execution
    - terminal: only looks at the global path. and shit can be installed locally but not globally.

    - npx: local installation. found in node_modules of the projects. goes to the nearest
    node modules binary folder. 

Typescript's Future Sight:
    - typescript compiler reads block by block, function by function. 
    = where there is a function, typescript analyzes the entire function. 
    - Compile type saftey vs runtime debugging

Error PolyMorphism and polymorphism in many javascript objects in general:
    - Javascript erros have some properties that are hidden in console.log
    - console.log serializes errors, and many objects in general. 

Wrong Developer Mindset:
    - treating typescript as javascript with limitations rather than actually using the types to make sure the
    code runs smoothly. example of delayed gratification
*/