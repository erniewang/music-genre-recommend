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
        1: Show My Liked Songs
        2: Like a Song
        3: Show All Songs \n`);
    while (true) {
        let answer = Number(input(`enter a command: `));
        var res:string;
        switch (answer) {
            case 1:
                // GET /api/users/:id/likes - Show liked songs for user
                res = await new connectServer("users").withPath(clientID.toString()).withPath("likes").get();
                console.log(res);
                break;
            case 2:
                // POST /api/users/:id/likes - Like a song
                const songToLike = Number(input("Enter song ID to like: "));
                res = await new connectServer("users").withPath(clientID.toString()).withPath("likes").post({ songID: songToLike });
                console.log(res);
                break;
            case 3:
                // GET /api/songs - Show all songs
                res = await new connectServer("songs").get();
                console.log(res);
                break;
            default:
                return;
        }
    }
}
main();