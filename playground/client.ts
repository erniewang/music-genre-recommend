//use axios 

//make the prompts all if then. of mathematical
import prompt from 'prompt-sync';
import ServerConnector from './connectServer';
import main2 from './authentication';

const clientID:number = 1;

const input = prompt();
console.log(`Logged in as User 1

Commands - press any other key to exit
1: Show Playlists
2: Show Single Playlist
3: Delete Song from Playlist
4: Create Playlist
5: Delete Playlist
6: Add Song to Playlist \n`);

async function main() {
    await main2();
    while (true) {
        let answer = Number(input(`enter a command: `));
        var res:string;
        switch (answer) {
            case 1:
                // GET /api/users/1/playlists - Show playlists for user 1
                res = await new ServerConnector("users").withPath(clientID.toString()).withPath("playlists").get();
                console.log(res);
                break;
            case 2:
                // GET /api/playlists/42 - Show single playlist with ID 42
                res = await new ServerConnector("playlists").withPath("42").get();
                console.log(res);
                break;
            case 3:
                // DELETE /api/playlists/42/songs/123 - Delete song 123 from playlist 42
                res = await new ServerConnector("playlists/42/songs").withPath("123").delete();
                console.log(res);
                break;
            case 4:
                // POST /api/playlists - Create new playlist
                res = await new ServerConnector("playlists").post({
                    name: "My Awesome Mix",
                    userId: clientID
                });
                console.log(res);
                break;
            case 5:
                // DELETE /api/playlists/42 - Delete playlist with ID 42
                res = await new ServerConnector("playlists").withPath("42").delete();
                console.log(res);
                break;
            case 6:
                // POST /api/playlists/42/songs - Add song to playlist 42
                res = await new ServerConnector("playlists/42/songs").post({
                    songId: "123"
                });
                console.log(res);
                break;
            default:
                return;
        }
    }
}
main();