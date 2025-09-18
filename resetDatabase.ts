import { database } from "./db/database";

const toggle = false;

if (toggle) {
    // Drop tables in correct order (respect foreign key constraints)
    database.exec(`
        DROP TABLE IF EXISTS likes;
        DROP TABLE IF EXISTS songs;
        DROP TABLE IF EXISTS users;
    `);
} else {
    // Add sample songs
    database.exec(`
        INSERT INTO songs (name, artist) VALUES
            ('Giant Steps', 'John Coltrane'),
            ('So What', 'Miles Davis'),
            ('Take Five', 'Dave Brubeck'),
            ('A Love Supreme, Pt. 1 - Acknowledgement', 'John Coltrane'),
            ('Round Midnight', 'Thelonious Monk'),
            ('Blue in Green', 'Miles Davis'),
            ('Take the "A" Train', 'Duke Ellington'),
            ('My Favorite Things', 'John Coltrane'),
            ('Cantaloupe Island', 'Herbie Hancock'),
            ('Birdland', 'Weather Report'),
            ('Goodbye Pork Pie Hat', 'Charles Mingus')
    `);

    // Add a test user
    database.exec(`
        INSERT INTO users (username, password) VALUES
            ('testuser', '$2b$10$6jM7G7eHlVvNBvFJL6Z6QOGGtY1E4hPGn9lW4kB7bAUH0FHM2h3Gy')
    `);
}