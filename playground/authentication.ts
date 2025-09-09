import prompt from 'prompt-sync';
import ServerConnector from './connectServer';

const input = prompt();

async function main2() {
    while (true) {

        const u = input('enter username: ');
        const p = input('enter password: ');


        //await database response
        let res = await new ServerConnector('auth/login').post("", {
            username: u,
            password: p,
        });

        console.log("Client response:", res);
    }
}

export default main2;