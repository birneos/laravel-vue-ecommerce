import axios from "axios";
import store from "../src/store/index";
import router from "../src/router/index";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

//You can intercept requests or responses before they are handled by then or catch.
axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
});

//You can intercept requests or responses before they are handled by then or catch.
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            sessionStorage.removeItem("TOKEN");
            router.push({ name: "login" });
        }
        // console.error(error);
        throw error;
    }
);

export default axiosClient;
