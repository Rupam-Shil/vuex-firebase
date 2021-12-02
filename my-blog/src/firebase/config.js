import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDVl-f49fT3kIICH5nH4uIXOHf8Gwzy_vI',
	authDomain: 'vuex-8441a.firebaseapp.com',
	projectId: 'vuex-8441a',
	storageBucket: 'vuex-8441a.appspot.com',
	messagingSenderId: '555978456196',
	appId: '1:555978456196:web:d5ad98100fa70afe8f16d1',
	measurementId: 'G-XLB4S54VP1',
};

//init firebase

initializeApp(firebaseConfig);

//initialize firebase auth
const auth = getAuth();

export { auth };
