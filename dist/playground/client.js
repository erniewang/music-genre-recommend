"use strict";
//use axios 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//make the prompts all if then. of mathematical
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const connectServer_1 = __importDefault(require("./connectServer"));
const authentication_1 = __importDefault(require("./authentication"));
const clientID = 1;
const input = (0, prompt_sync_1.default)();
console.log(`Logged in as User 1

Commands - press any other key to exit
1: Show Playlists
2: Show Single Playlist
3: Delete Song from Playlist
4: Create Playlist
5: Delete Playlist
6: Add Song to Playlist \n`);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, authentication_1.default)();
        while (true) {
            let answer = Number(input(`enter a command: `));
            var res;
            switch (answer) {
                case 1:
                    // GET /api/users/1/playlists - Show playlists for user 1
                    res = yield new connectServer_1.default("users").withPath(clientID.toString()).withPath("playlists").get();
                    console.log(res);
                    break;
                case 2:
                    // GET /api/playlists/42 - Show single playlist with ID 42
                    res = yield new connectServer_1.default("playlists").withPath("42").get();
                    console.log(res);
                    break;
                case 3:
                    // DELETE /api/playlists/42/songs/123 - Delete song 123 from playlist 42
                    res = yield new connectServer_1.default("playlists/42/songs").withPath("123").delete();
                    console.log(res);
                    break;
                case 4:
                    // POST /api/playlists - Create new playlist
                    res = yield new connectServer_1.default("playlists").post({
                        name: "My Awesome Mix",
                        userId: clientID
                    });
                    console.log(res);
                    break;
                case 5:
                    // DELETE /api/playlists/42 - Delete playlist with ID 42
                    res = yield new connectServer_1.default("playlists").withPath("42").delete();
                    console.log(res);
                    break;
                case 6:
                    // POST /api/playlists/42/songs - Add song to playlist 42
                    res = yield new connectServer_1.default("playlists/42/songs").post({
                        songId: "123"
                    });
                    console.log(res);
                    break;
                default:
                    return;
            }
        }
    });
}
main();
