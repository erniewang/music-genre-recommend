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
exports.getPlaylists = void 0;
// Retrieves all playlists belonging to a specific user
// Route: GET /api/users/:userID/playlists
// Returns: Array of playlist objects for the specified user
const getPlaylists = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("User ID:", req.params.userID);
    res.json({ message: "getPlaylists's response" });
});
exports.getPlaylists = getPlaylists;
