import axiosClient from "../axios";

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

export function logout({ commit }, data) {
    return axiosClient
        .post("/logout")
        .then((response) => {
            commit("setToken", null);
            return response;
        })
        .catch();
}
