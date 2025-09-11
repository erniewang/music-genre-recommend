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
//a class itself is a object
class ServerConnector {
    constructor(endpoint) {
        this.url = `http://localhost:3000/api/${endpoint}`;
    }
    // Add path segments to the base URL
    withPath(path) {
        this.url += `/${path}`;
        return this;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("feching get request");
            try {
                const result = yield fetch(this.url);
                const data = yield result.json();
                return data;
            }
            catch (error) {
                console.log("error", error);
                throw error;
            }
        });
    }
    post(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ data: payload }),
                });
                const data = yield response.json();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.url, {
                    method: "DELETE",
                    body: payload ? JSON.stringify({ data: payload }) : undefined,
                });
                const data = yield response.text();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = ServerConnector;
