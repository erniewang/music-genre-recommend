"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing endpoints
const auth_1 = require("./endpoints/auth");
const playlists_1 = require("./endpoints/playlists");
const songs_1 = require("./endpoints/songs");
//helper libraries
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
var morgan = require('morgan');
//endpoint config
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
//set up middleware
app.use(express_1.default.json());
app.use(morgan('combined'));
//frontend for now
app.get('/', (req, res) => {
    console.log("we have been requested");
    res.send(fs_1.default.readFileSync('./public/index.html', 'utf8'));
});
// Music Recommender API Routes
app.get('/api/users/:userID/playlists', playlists_1.getPlaylists);
app.post('/api/playlists', playlists_1.createPlaylist);
app.get('/api/playlists/:id', playlists_1.getPlaylist);
app.delete('/api/playlists/:id', playlists_1.deletePlaylist);
app.post('/api/playlists/:id/songs', songs_1.addSongToPlaylist);
app.delete('/api/playlists/:id/songs/:songId', songs_1.removeSongFromPlaylist);
app.post('/api/auth/login', (req, res) => { (0, auth_1.login)(req, res); });
app.post('/api/auth/new', auth_1.createUSer);
// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
