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
exports.createUSer = exports.login = void 0;
const database_1 = require("../db/database");
const loginSQL = `
SELECT userID FROM users WHERE username == (?) AND password == (?)
`;
const login = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = database_1.database.prepare(loginSQL);
        const dbRes = cmd.get(req.body.data.username, req.body.data.password);
        if (dbRes === undefined) {
            res.status(401).json({ error: "User not found" });
        }
        else {
            res.json(dbRes);
        }
    });
};
exports.login = login;
const createUserSQL = `INSERT INTO users (username, password) 
VALUES (?, ?)`;
const createUSer = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmd = database_1.database.prepare(createUserSQL);
        const dbRes = cmd.run(req.body.data.username, req.body.data.password);
        res.json(dbRes);
    });
};
exports.createUSer = createUSer;
