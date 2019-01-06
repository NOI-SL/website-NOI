<template>
	<div id="app">
		<nav-bar v-bind:current-tab="1"/>
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
	components: {
		NavBar
	}
}
</script>