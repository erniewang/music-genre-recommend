import { database } from '../../db/database';

// Adds a like (song) for a user
// Route: POST /api/users/:userID/likes
// Body: { songID: number }
export const addLike = async (req: any, res: any) => {
    try {
        const userID = Number(req.params.userID);
        const { songID } = req.body;
        if (!songID) {
            res.status(400).json({ error: true, message: 'songID required' });
            return;
        }
        const stmt = database.prepare('INSERT OR IGNORE INTO likes (userID, songID) VALUES (?, ?)');
        const result = stmt.run(userID, songID);
        res.json({ message: 'Song liked', changes: result.changes });
    } catch (err: any) {
        console.error('Error adding like:', err);
        res.status(500).json({ error: true, message: 'Failed to like song' });
    }
};
