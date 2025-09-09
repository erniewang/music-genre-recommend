import { DatabaseSync } from 'node:sqlite';
import { database } from '../../db/database';

// Deletes a playlist and all its associated songs
// Route: DELETE /api/playlists/:id
// Returns: Success confirmation or error if playlist not found
export const deletePlaylist = async (req: any, res: any) => {
    console.log("Playlist ID:", req.params.id);
    res.json({ message: "deletePlaylist's response" });
};
