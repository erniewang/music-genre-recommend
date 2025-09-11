import { database } from "./db/database";

//must check it exists first? what the fuck?
database.exec(`
    DROP TABLE IF EXISTS playlistSongs;
    DROP TABLE IF EXISTS playlists;
    DROP TABLE IF EXISTS songs;
    DROP TABLE IF EXISTS users;
`);