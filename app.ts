//importing endpoints
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

//helper libraries
import express from "express";
import fs from "fs";
var morgan = require('morgan');

//endpoint config
const app = express();
const port = process.env.PORT || 3000;

//set up middleware
app.use(express.json()); 
app.use(morgan('combined'));

//frontend for now
app.get('/', (req, res) => {
    console.log("we have been requested");
res.send(fs.readFileSync('./public/index.html', 'utf8'));
});

// Music Recommender API Routes
app.get('/api/users/:userID/playlists', getPlaylists);
app.post('/api/playlists', createPlaylist);
app.get('/api/playlists/:id', getPlaylist);
app.delete('/api/playlists/:id', deletePlaylist);
app.post('/api/playlists/:id/songs', addSongToPlaylist);
app.delete('/api/playlists/:id/songs/:songId', removeSongFromPlaylist);
app.post('/api/auth/login', (req, res) => {login(req, res); });
app.post('/api/auth/new', createUSer);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});