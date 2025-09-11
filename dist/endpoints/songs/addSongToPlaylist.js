"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSongToPlaylist = void 0;
// Adds a song to an existing playlist
// Route: POST /api/playlists/:id/songs
// Body: { songId: number }
// Returns: Success confirmation or error if song/playlist not found
const addSongToPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Playlist ID:", req.params.id);
    console.log("Song data:", req.body.data);
    res.json({ message: "addSongToPlaylist's response" });
});
exports.addSongToPlaylist = addSongToPlaylist;
