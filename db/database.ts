import { DatabaseSync } from 'node:sqlite';
import { dbCommands } from './dbCommands';

export const database = new DatabaseSync('db.sql');

// Initialize tables on import
try {
    database.exec(dbCommands.createTables);
    console.log('Database tables initialized successfully');
} catch (error) {
    console.error('Error initializing database tables:', error);
}
