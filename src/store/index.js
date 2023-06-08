import { createStore } from "vuex";

import tutorsModule from './modules/tutors/index.js';

const store = createStore({
    modules: {
        tutors: tutorsModule
    },
    state() {
        return{
            userId: 't3',
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;