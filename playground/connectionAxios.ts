const axios = require('axios/dist/node/axios.cjs'); 

// Create axios instance with custom config
const axiosInstance = axios.create({
    validateStatus: function (status:number) {
        return status >= 200 && status < 500; // Accept all status codes
    }
});

class connectServer {
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
        try {
            const response = await axiosInstance.get(this.url);
            return response.data;
        } catch (error:any) {
            // Only network errors will reach here now
            return {
                error: true,
                message: error.message || 'Network error',
                code: error.code
            };
        }
    }

    async post(payload: object) {
        try {
            const response = await axiosInstance.post(this.url, { data: payload });
            return response.data;
        } catch (error:any) {
            // Only network errors will reach here now
            return {
                error: true,
                message: error.message || 'Network error',
                code: error.code
            };
        }
    }
}

export default connectServer;