import { createStore } from "vuex";
import * as actions from "../store/actions";
import * as mutations from "../store/mutations";
import state from "./state.js";

const store = createStore({
    state,
    getters: {},
    actions: actions,
    mutations: mutations,
});

export default store;
