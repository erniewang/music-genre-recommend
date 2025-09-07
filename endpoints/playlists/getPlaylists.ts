import { database } from '../../db/database';

// Retrieves all playlists belonging to a specific user
// Route: GET /api/playlists/:userID
// Returns: Array of playlist objects for the specified user
export const getPlaylists = async (req: any, res: any) => {
    console.log("Got database instance:", database);
    console.log("User ID:", req.params.userID);
    res.json({ message: "getPlaylists's response" });
};
