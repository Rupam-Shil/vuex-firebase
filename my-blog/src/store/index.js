import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state() {
		return {
			points: 0,
		};
	},
	mutations: {
		updatePoints(state, payload) {
			state.points += payload;
		},
	},
});

export default store;
