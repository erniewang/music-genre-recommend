import { DatabaseSync } from 'node:sqlite';
import { database } from '../../db/database';

// Removes a song from a playlist
// Route: DELETE /api/playlists/:id/songs/:songId
// Returns: Success confirmation or error if song not in playlist
export const removeSongFromPlaylist = async (req: any, res: any) => {
    console.log("Playlist ID:", req.params.id);
    console.log("Song ID:", req.params.songId);
    res.json({ message: "removeSongFromPlaylist's response" });
};
