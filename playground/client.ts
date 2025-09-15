//use axios 

//make the prompts all if then. of mathematical
import prompt from 'prompt-sync';
import connectServer from './connectionAxios';
import main2 from './authentication';
import { clientID } from './authentication';

const input = prompt();


async function main() {
    var userID:boolean | string = false;

    while (!userID) {
        userID = await main2();
    }

    console.log(`Logged in as User ${userID}
        Commands - press any other key to exit
        1: Show All Playlists
        2: Show My Playlists
        3: Delete Song from My Playlist
        4: Add Song to Playlist \n`);
    while (true) {
        let answer = Number(input(`enter a command: `));
        var res:string;
        switch (answer) {
            case 1:
                // GET /api/users/1/playlists - Show playlists and Songs
                res = await new connectServer("users").withPath(clientID.toString()).withPath("playlists").get();
                console.log(res);
                break;
            case 2:
                // GET /api/playlists/42 - Show all playlists made by current user
                res = await new connectServer("playlists").withPath("42").get();
                console.log(res);
                break;
            case 3:
                //res = await new connectServer("playlists/42/songs").withPath("123").post();
                //console.log(res);
                console.log("skipping for now");
                break;
            case 4:
                // POST /api/playlists/42/songs - Add song to playlist 42
                res = await new connectServer("playlists/42/songs").post({
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