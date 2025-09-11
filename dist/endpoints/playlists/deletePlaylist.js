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
exports.deletePlaylist = void 0;
// Deletes a playlist and all its associated songs
// Route: DELETE /api/playlists/:id
// Returns: Success confirmation or error if playlist not found
const deletePlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Playlist ID:", req.params.id);
    res.json({ message: "deletePlaylist's response" });
});
exports.deletePlaylist = deletePlaylist;
