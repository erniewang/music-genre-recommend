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
exports.removeSongFromPlaylist = void 0;
// Removes a song from a playlist
// Route: DELETE /api/playlists/:id/songs/:songId
// Returns: Success confirmation or error if song not in playlist
const removeSongFromPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Playlist ID:", req.params.id);
    console.log("Song ID:", req.params.songId);
    res.json({ message: "removeSongFromPlaylist's response" });
});
exports.removeSongFromPlaylist = removeSongFromPlaylist;
