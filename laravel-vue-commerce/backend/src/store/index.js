import { createStore } from "vuex";
import * as actions from "../store/actions";
import * as mutations from "../store/mutations";

const store = createStore({
    state: {
        user: {
            token: sessionStorage.getItem("TOKEN"),
            data: {},
        },
    },
    getters: {},
    actions: actions,
    mutations: mutations,
});

export default store;
