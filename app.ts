import express from "express";
import { login, createUSer } from "./endpoints/auth";

import { 
    getPlaylists, 
    createPlaylist, 
    getPlaylist, 
    deletePlaylist 
} from "./endpoints/playlists";

import {
    addSongToPlaylist,
    removeSongFromPlaylist
} from "./endpoints/songs";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
//IMPORTIANT
//express does not automatically parse request bodies

app.get('/', (req, res) => {
    console.log("we have been requested");
  res.json({ message: "Server is running", status: "ok" });
});

app.post(`/test`, (req, res) => {
    console.log("request:", req.body);
    try {
        res.send(JSON.stringify({message : "hello back"}));
    }
    catch (error) {
        console.log(error);
        res.send(JSON.stringify({message : "something internal blew the fuck up"}));
    }
});

// Music Recommender API Routes
app.get('/api/playlists/:userID', getPlaylists);
app.post('/api/playlists', createPlaylist);
app.get('/api/playlists/:id', getPlaylist);
app.delete('/api/playlists/:id', deletePlaylist);
app.post('/api/playlists/:id/songs', addSongToPlaylist);
app.delete('/api/playlists/:id/songs/:songId', removeSongFromPlaylist);
app.post('/api/auth/login', (req, res) => {
    login(req, res);
});
app.post('/api/auth/new', createUSer);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
