import { DatabaseSync } from 'node:sqlite';
import { database } from '../../db/database';

// Shows all available songs with their artists
// Route: GET /api/songs
// Returns: Array of all songs with name and artist
const getAllSongsSQL = `SELECT songID, name, artist FROM songs ORDER BY artist, name`;

export const showSongs = async (req: any, res: any) => {
    try {
        const cmd = database.prepare(getAllSongsSQL);
        const songs = cmd.all();
        
        if (songs.length === 0) {
            res.json({ 
                message: "No songs found in database",
                songs: []
            });
        } else {
            res.json({ 
                message: `Found ${songs.length} songs`,
                songs: songs
            });
        }
    } catch (error: any) {
        console.log("Database error:", error);
        res.status(500).json({
            error: true,
            message: "Failed to retrieve songs"
        });
    }
};
