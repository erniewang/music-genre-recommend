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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const connectServer_1 = __importDefault(require("./connectServer"));
const input = (0, prompt_sync_1.default)();
function main2() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n Please Log In");
        let tries = 0;
        while (tries < 3) {
            const u = input('enter username: ');
            const p = input('enter password: ');
            if (u == "q" || p == "q")
                Error("quit");
            //await database response
            let res = yield new connectServer_1.default('auth/login').post({
                username: u,
                password: p
            });
            if ('error' in res) {
                console.log("wrong username or password, try again");
                tries++;
            }
            else {
                return;
            }
        }
        const newUserConfirm = yield newUser();
        return;
    });
}
function newUser() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n creating new user:");
        const newU = input('enter new username: ');
        const newP = input('enter new password: ');
        const res = yield new connectServer_1.default('auth/new').post({
            username: newU,
            password: newP
        });
        if ('error' in res) {
            console.log("Error creating user:", res.error);
            return false;
        }
        else {
            console.log("User created successfully!");
            return true;
        }
    });
}
exports.default = main2;
