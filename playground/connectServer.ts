//a class itself is a object
class ServerConnector {
    private baseURL: string; //can never be accessed outside

    private buildURL(endpoint: string): string {
        return this.baseURL + "/" + endpoint;
    }
    //used only by internal functions as shown below

    constructor(endpoint:string) {
        this.baseURL =`http://localhost:3000/api`;
        this.baseURL = this.buildURL(endpoint);
    }
    
    async get(parameter: string) {
        try {
            const combinedURL = this.buildURL(parameter);
            const result = await fetch(combinedURL);
            const data = await result.text();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async post(parameter: string, payload: object) {
        try {
            const combinedURL = this.buildURL(parameter);
            const response = await fetch(combinedURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: payload }),
            });

            const data = await response.text();
            return data;
        } catch (error) {
            throw error;
        }
    }

    async delete(parameter: string, payload?: object) {
        try {
            const combinedURL = this.buildURL(parameter);
            const response = await fetch(combinedURL, {
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