import { createStore } from 'vuex';

//firebase auth
import { auth } from '../firebase/config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';

// Create a new store instance.
const store = createStore({
	state() {
		return {
			user: null,
			authIsReady: false,
		};
	},
	mutations: {
		setUser(state, payload) {
			state.user = payload;
			console.log('user state changes:', state.user);
		},
		setAuthIsReady(state, payload) {
			state.authIsReady = payload;
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
		async logout({ commit }) {
			await signOut(auth);
			commit('setUser', null);
		},
	},
});

const unsub = onAuthStateChanged(auth, (user) => {
	store.commit('setAuthIsReady', true);
	store.commit('setUser', user);
	unsub();
});

export default store;
