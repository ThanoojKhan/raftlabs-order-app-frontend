import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            return Promise.reject(new Error("Network error."));
        }

        const message =
            error.response.data?.message ||
            "Something went wrong. Please try again.";

        return Promise.reject(new Error(message));
    }
);

export default api;