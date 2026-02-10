import axios from "axios";

const api = axios.create({
    baseURL: "https://raftlabs-order-app-backend.onrender.com/api",
    timeout: 10000,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            return Promise.reject(new Error("Network error. Kindly wait for a moment while the server is waking up."));
        }

        const message =
            error.response.data?.message ||
            "Something went wrong. Please try again.";

        return Promise.reject(new Error(message));
    }
);

export default api;