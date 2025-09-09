import { DatabaseSync } from 'node:sqlite';
import { database } from '../../db/database';

// Adds a song to an existing playlist
// Route: POST /api/playlists/:id/songs
// Body: { songId: number }
// Returns: Success confirmation or error if song/playlist not found
export const addSongToPlaylist = async (req: any, res: any) => {
    console.log("Playlist ID:", req.params.id);
    console.log("Song data:", req.body.data);
    res.json({ message: "addSongToPlaylist's response" });
};
