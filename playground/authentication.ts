import prompt from 'prompt-sync';
import ServerConnector from './connectServer';

const input = prompt();

async function main2() {
    console.log("\n Please Log In");
    let tries:number = 0;
    while (tries < 3) {
        const u = input('enter username: ');
        const p = input('enter password: ');
        if (u == "q" || p == "q") Error("quit");
        //await database response
        console.log(`[DEBUG AUTH] Attempting login with username: ${u}`);
        let res = await new ServerConnector('auth/login').post({
            username: u,
            password: p
        });
        console.log(`[DEBUG AUTH] Login response received:`, res);
        console.log(`[DEBUG AUTH] Response type:`, typeof res);
        console.log(`[DEBUG AUTH] Response is undefined:`, res === undefined);
        
        if (res && 'error' in res) {
            console.log("wrong username or password, try again");
            tries++;
        }
        else {
            return;
        }
    }
    const newUserConfirm = await newUser();
    return;
}

async function newUser() {
    console.log("\n creating new user:");
    const newU = input('enter new username: ');
    const newP = input('enter new password: ');
    console.log(`[DEBUG AUTH] Attempting to create user with username: ${newU}`);
    const res = await new ServerConnector('auth/new').post({
        username: newU,
        password: newP
    });
    console.log(`[DEBUG AUTH] User creation response received:`, res);
    console.log(`[DEBUG AUTH] Response type:`, typeof res);
    console.log(`[DEBUG AUTH] Response is undefined:`, res === undefined);
    
    if (res && 'error' in res) {
        console.log("Error creating user:", res.error);
        return false;
    } else {
        console.log("User created successfully!");
        return true;
    }
}

export default main2;