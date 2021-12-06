import { createStore } from 'vuex';

//firebase auth
import { auth } from '../firebase/config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

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
		async signup({ commit }, { email, password }) {
			try {
				const res = await createUserWithEmailAndPassword(auth, email, password);
				commit('setUser', res.user);
			} catch (e) {
				throw new Error('could not complete signup');
			}
		},
		async login({ commit }, { email, password }) {
			const res = await signInWithEmailAndPassword(auth, email, password);
			if (res) {
				commit('setUser', res.user);
			} else {
				throw new Error('invalid credentials');
			}
		},
	},
});

export default store;
