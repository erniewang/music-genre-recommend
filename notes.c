int typescriptDeclarations = 1;

/*
Typescript:
    Ideas to think about:
    - create a new object instance every time or morph it every time? pretty importiant
    as the object becomes bigger or more importiant
    - create a db instance and export to everything, 
    or create a connection to the db instance every time?

Routing Mismatch:
    - extremely dangerous. sometimes catch errors dont even catch it 
    because lower level shit in the TCP thing catches it before. 
    leaving extreme obtuse and opaque errors. 
    - fetch layers: (server may not know what the fuck is up)
        = js -> node(http) -> TCP -> network. 
*/