import { database } from '../../db/database';

// Removes a like for a user
// Route: DELETE /api/users/:userID/likes/:songID
export const removeLike = async (req: any, res: any) => {
    try {
        const userID = Number(req.params.userID);
        const songID = Number(req.params.songID);
        const stmt = database.prepare('DELETE FROM likes WHERE userID = ? AND songID = ?');
        const result = stmt.run(userID, songID);
        res.json({ message: 'Song unliked', changes: result.changes });
    } catch (err: any) {
        console.error('Error removing like:', err);
        res.status(500).json({ error: true, message: 'Failed to remove like' });
    }
};
