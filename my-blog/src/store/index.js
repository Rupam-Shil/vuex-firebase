import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state() {
		return {
			user: null,
		};
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
			console.log('user state changes:', state.user);
		},
	},
});

export default store;
