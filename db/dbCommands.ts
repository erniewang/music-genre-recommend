export const dbCommands = {
    createTables: `
        CREATE TABLE IF NOT EXISTS users (
            userID INTEGER PRIMARY KEY,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS songs (
            songID INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            artist TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS playlists (
            playlistID INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            ownerID INTEGER NOT NULL,
            FOREIGN KEY (ownerID) REFERENCES users (userID) ON DELETE CASCADE
        );
        CREATE TABLE IF NOT EXISTS playlistSongs (
            playlistID INTEGER NOT NULL,
            songID INTEGER NOT NULL,
            PRIMARY KEY (playlistID, songID),
            FOREIGN KEY (playlistID) REFERENCES playlists (playlistID) ON DELETE CASCADE,
            FOREIGN KEY (songID) REFERENCES songs (songID)
        );
    `
};
