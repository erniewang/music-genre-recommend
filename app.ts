//importing endpoints
import { login, createUSer } from "./endpoints/auth";
import { showSongs } from "./endpoints/songs";
import { getLikes, addLike, removeLike } from "./endpoints/likes";

//helper libraries
import express from "express";
import fs from "fs";
var morgan = require('morgan');

//endpoint config
const app = express();
const port = process.env.PORT || 3000;

//debugger;

//set up middleware
app.use(express.json()); 
app.use(morgan('combined'));

//frontend for now
app.get('/', (req, res) => {
    console.log("we have been requested");
res.send(fs.readFileSync('./public/index.html', 'utf8'));
});

// Music Recommender API Routes
app.get('/api/songs', showSongs);

// Likes routes
app.get('/api/users/:userID/likes', getLikes);
app.post('/api/users/:userID/likes', addLike);
app.delete('/api/users/:userID/likes/:songID', removeLike);
app.post('/api/auth/login', (req, res) => {login(req, res); });
app.post('/api/auth/new', createUSer);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});