// ServerConnector class: A utility class for making HTTP requests to the music recommender API
// It provides a fluent interface for building URLs and performing GET/POST/DELETE requests
class ServerConnector {
    // Private field to store the constructed API URL
    private url: string; // the complete URL

    // Constructor: Initializes the base URL with the provided endpoint
    // Parameter: endpoint - the API endpoint path (e.g., 'auth/login')
    constructor(endpoint:string) {
        this.url = `http://localhost:3000/api/${endpoint}`;
        console.log(`[DEBUG] ServerConnector initialized with URL: ${this.url}`);
    }

    // Method: withPath - Appends additional path segments to the base URL for chaining
    // Parameter: path - the path segment to append
    // Returns: this - allows method chaining
    withPath(path: string) {
        this.url += `/${path}`;
        console.log(`[DEBUG] URL updated with path '${path}': ${this.url}`);
        return this;
    }

    // Method: get - Performs a GET request to the constructed URL
    // Returns: Promise<any> - the JSON response data
    async get() {
        console.log(`[DEBUG] Starting GET request to URL: ${this.url}`);
        try {
            console.log(`[DEBUG] About to fetch from: ${this.url}`);
            const result = await fetch(this.url);
            console.log(`[DEBUG] Fetch completed. Response status: ${result.status}`);
            console.log(`[DEBUG] About to parse JSON from response`);
            const data = await result.json();
            console.log(`[DEBUG] JSON parsed successfully. Data:`, data);
            return data;
        } catch (error) {
            console.log(`[DEBUG] Error during GET request:`, error);
            throw error;
        }
    }

    // Method: post - Performs a POST request with a payload to the constructed URL
    // Parameter: payload - the data object to send in the request body
    // Returns: Promise<any> - the JSON response data
    async post(payload: object) {
        console.log(`[DEBUG] Starting POST request to URL: ${this.url}`);
        console.log(`[DEBUG] Payload to send:`, payload);
        try {
            console.log(`[DEBUG] About to fetch with POST method`);

            //dangerous section
            const response = await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ data: payload }),
            });
            console.log(`[DEBUG] POST fetch completed. Response status: ${response.status}`);
            console.log(`[DEBUG] About to parse JSON from POST response`);
            const data = await response.json();
            console.log(`[DEBUG] POST JSON parsed successfully. Data:`, data);
            return data;
        } catch (error) {
            console.log(`[DEBUG] Error during POST request:`, error);
        }
    }

    // Method: delete - Performs a DELETE request to the constructed URL, optionally with a payload
    // Parameter: payload - optional data object to send in the request body
    // Returns: Promise<string> - the text response data
    async delete(payload?: object) {
        console.log(`[DEBUG] Starting DELETE request to URL: ${this.url}`);
        console.log(`[DEBUG] DELETE payload to send:`, payload);
        try {
            console.log(`[DEBUG] About to fetch with DELETE method`);
            const response = await fetch(this.url, {
                method: "DELETE",
                body: payload ? JSON.stringify({ data: payload }) : undefined,
            });
            console.log(`[DEBUG] DELETE fetch completed. Response status: ${response.status}`);
            console.log(`[DEBUG] About to parse text from DELETE response`);
            const data = await response.text();
            console.log(`[DEBUG] DELETE text parsed successfully. Data:`, data);
            return data;
        } catch (error) {
            console.log(`[DEBUG] Error during DELETE request:`, error);
            throw error;
        }
    }
}

// Export the ServerConnector class as the default export for use in other modules
export default ServerConnector;