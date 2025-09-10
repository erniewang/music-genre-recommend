import { DatabaseSync } from 'node:sqlite';
import { database } from '../../db/database';

// Retrieves all playlists belonging to a specific user
// Route: GET /api/users/:userID/playlists
// Returns: Array of playlist objects for the specified user
export const getPlaylists = async (req: any, res: any) => {
    console.log("User ID:", req.params.userID);
    res.json({ message: "getPlaylists's response" });
};
