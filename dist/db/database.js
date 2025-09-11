"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const node_sqlite_1 = require("node:sqlite");
const dbCommands_1 = require("./dbCommands");
exports.database = new node_sqlite_1.DatabaseSync('db.sql');
// Initialize tables on import
try {
    exports.database.exec(dbCommands_1.dbCommands.createTables);
    console.log('Database tables initialized successfully');
}
catch (error) {
    console.error('Error initializing database tables:', error);
}
