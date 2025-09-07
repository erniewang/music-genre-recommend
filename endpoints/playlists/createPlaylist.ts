import { database } from '../../db/database';

// Creates a new playlist for a user
// Route: POST /api/playlists
// Body: { name: string, userId: number }
// Returns: Newly created playlist object with generated ID
export const createPlaylist = async (req: any, res: any) => {
    console.log("Got database instance:", database);
    console.log("Request data:", req.body.data);
    res.json({ message: "createPlaylist's response" });
};



