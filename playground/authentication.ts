import prompt from 'prompt-sync';
import connectServer from './connectionAxios';

const input = prompt();

export var clientID:number;

async function main2():Promise<boolean | string> {
    console.log("\n Please Log In");

    let tries:number = 0;
    while (tries < 3) {
        const u = input('enter username: ');
        const p = input('enter password: ');
        if (u == "q" || p == "q") Error("quit");
        //await database response
        let res = await new connectServer('auth/login').post({
            username: u,
            password: p
        });
        if ('error' in res) {
            console.log("wrong username or password, try again");
            tries++;
        }
        else {
            clientID = res.userID;
            return u;
        }
    }
    const newUserConfirm = await newUser();
    return newUserConfirm;
}

async function newUser():Promise<boolean | string> {
    console.log("\n creating new user:");
    const newU = input('enter new username: ');
    const newP = input('enter new password: ');
    var res:any;
    try {
        res = await new connectServer('auth/new').post({
            username: newU,
            password: newP
        });
        if (res.error) {
            console.log(res.message, "please log in again");
            return false;
        }
        clientID = res.userID;
        return newU;
    }
    catch (error:any) {
        throw error;
    }
}

export default main2;