import { database } from '../../db/database';

// Retrieves all liked songs for a specific user
// Route: GET /api/users/:userID/likes
// Returns: Array of liked songs with full song info
export const getLikes = async (req: any, res: any) => {
    try {
        const userId = Number(req.params.userID);
        const sql = `SELECT s.songID, s.name, s.artist
                     FROM songs s
                     JOIN likes l ON s.songID = l.songID
                     WHERE l.userID = ?`;
        const likedSongs = database.prepare(sql).all(userId);
        res.json({ message: `Found ${likedSongs.length} liked songs`, songs: likedSongs });
    } catch (err: any) {
        console.error('Error fetching likes:', err);
        res.status(500).json({ error: true, message: 'Failed to fetch likes' });
    }
};
