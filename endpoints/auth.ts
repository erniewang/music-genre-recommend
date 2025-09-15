import { DatabaseSync } from 'node:sqlite';
import { database } from '../db/database';

const loginSQL:string = `
SELECT userID FROM users WHERE username == (?) AND password == (?)
`;

const login = async function(req:any, res:any) {
    const cmd = database.prepare(loginSQL);
    const dbRes = cmd.get(req.body.data.username, req.body.data.password);
    if (dbRes === undefined) {
        res.status(401).json({ error: "User not found" });
    }
    else {
        res.json(dbRes);
    }
    console.log(dbRes);
};

const createUserSQL:string = `INSERT INTO users (username, password) 
VALUES (?, ?)`;

const createUSer = async function(req:any, res:any) {
    const cmd = database.prepare(createUserSQL);
    try {
        const dbRes = cmd.run(req.body.data.username, req.body.data.password);
        // Success response
        res.status(201).json({ 
            success: true, 
            message: "User created successfully",
            userID: dbRes.lastInsertRowid 
        });
    } catch (error: any) {
        console.log("Database error:", typeof(error));
        res.status(409).json({ 
            error: true,
            message: "Username already exists" 
        });
    }
};

export {login, createUSer};