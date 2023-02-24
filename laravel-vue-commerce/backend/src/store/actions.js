import axiosClient from "../axios";

export function getUser({ commit }) {
    return axiosClient.get("/user").then((response) => {
        commit("setUser", response.data.user);
        return response;
    });
}
export function login({ commit }, data) {
    return axiosClient
        .post("/login", data)
        .then(({ data }) => {
            commit("setUser", data.user);
            commit("setToken", data.token);
            return data;
        })
        .catch();
}

export function logout({ commit }) {
    return axiosClient
        .post("/logout")
        .then((response) => {
            commit("setToken", null);
            return response;
        })
        .catch();
}
