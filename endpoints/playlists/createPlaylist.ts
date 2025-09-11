import { DatabaseSync } from 'node:sqlite';
import { database } from '../../db/database';

export const createPlaylist = async (req: any, res: any) => {
    const stmt = database.prepare('INSERT INTO playlists (name, ownerID) VALUES (?, ?)');
    //helps prevent sql injectioin
    stmt.run(req.body.data.name, req.body.data.userId);
    res.json({ message: "succesfully inserted new playlist into database" });
};
