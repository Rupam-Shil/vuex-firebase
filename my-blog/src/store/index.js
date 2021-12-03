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
	actions: {
		signup({ commit }, { email, password }) {
			console.log('signup action');
			//async code
			setTimeout(() => {
				commit('setUser', { email, password });
			}, 2000);
		},
	},
});

export default store;
