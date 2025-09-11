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


How SQL works:
    SQL query -> lexical analysis
    tokenized (keywords, operators, identifies, strings)
    -> Syntax Check -> Semantics Check -> 
    query transformations (relational algebra?)
    tries multiple paths: -> Optimzer ->
    Execution Plan

    JOINs:
    (left) (whatever) JOIN (right) on (shared key)
    - Inner Join: join all matching rows
    - Left Join: all on the left + matching right
    - Right Join: all on the right + matching left

    Different Bash Enviroments, Different available Modules:
    - FNM vs normal NPM: each with their own
    global package directories. 

    Retarded Fucking Debugger:
    - IDE debugger uses whatever nodejs it finds first.
    = Assumes everybody uses system installed Node.js, when in reality, 
    most people use nvms, fnms, and shit.
*/