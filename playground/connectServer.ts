//a class itself is a object
class ServerConnector {
    private url: string; // the complete URL

    constructor(endpoint:string) {
        this.url = `http://localhost:3000/api/${endpoint}`;
    }

    // Add path segments to the base URL
    withPath(path: string) {
        this.url += `/${path}`;
        return this;
    }

    async get() {
        console.log("feching get request");
        try {
            const result = await fetch(this.url);
            const data = await result.json();
            return data;
        } catch (error) {
            console.log("error", error);
            throw error;
        }
    }

    async post(payload: object) {
        try {
            const response = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: payload }),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Nigga.", error);
        }
    }

    async delete(payload?: object) {
        try {
            const response = await fetch(this.url, {
                method: "DELETE",
                body: payload ? JSON.stringify({ data: payload }) : undefined,
            });

            const data = await response.text();
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default ServerConnector;