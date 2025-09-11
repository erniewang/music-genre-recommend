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
exports.createPlaylist = void 0;
const database_1 = require("../../db/database");
const createPlaylist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const stmt = database_1.database.prepare('INSERT INTO playlists (name, ownerID) VALUES (?, ?)');
    //helps prevent sql injectioin
    stmt.run(req.body.data.name, req.body.data.userId);
    res.json({ message: "succesfully inserted new playlist into database" });
});
exports.createPlaylist = createPlaylist;
