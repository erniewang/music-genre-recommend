//command to create new database if needed

export const dbCommands = {
    createTables: `
        CREATE TABLE IF NOT EXISTS users (
            userID INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS songs (
            songID INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL UNIQUE,
            artist TEXT
        );

        CREATE TABLE IF NOT EXISTS likes (
            userID INTEGER NOT NULL,
            songID INTEGER NOT NULL,
            PRIMARY KEY (userID, songID),
            FOREIGN KEY (userID) REFERENCES users (userID) ON DELETE CASCADE,
            FOREIGN KEY (songID) REFERENCES songs (songID)
        );
    `
};
