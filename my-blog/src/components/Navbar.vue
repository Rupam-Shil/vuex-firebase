<template>
	<nav>
		<h1>Vuex Auth</h1>
		<!-- for all users -->
		<div>
			<router-link to="/">Home</router-link>
		</div>
		<!-- for logged in users -->
		<div v-if="user != null">
			<span>Logged in as {{ user.email }}</span>
			<button @click="logout">Logout</button>
		</div>
		<!-- for logged out users -->
		<div v-else>
			<router-link to="/login">Login</router-link>
			<router-link to="/signup">Signup</router-link>
		</div>
	</nav>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.user);

const logout = () => {
	store.dispatch('logout');
};
</script>
