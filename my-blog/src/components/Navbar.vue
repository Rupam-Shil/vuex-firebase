<template>
	<nav>
		<h1>Vuex Auth</h1>
		<!-- for all users -->
		<div>
			<router-link to="/">Home</router-link>
		</div>
		<!-- for logged in users -->
		<div>
			<span>Logged in as...</span>
			<button @click="logout">Logout</button>
		</div>
		<!-- for logged out users -->
		<div>
			<router-link to="/login">Login</router-link>
			<router-link to="/signup">Signup</router-link>
		</div>
	</nav>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const logout = () => {
	store.dispatch('logout');
};
</script>
